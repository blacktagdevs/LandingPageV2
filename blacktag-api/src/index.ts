import { Hono } from "hono";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";

const app = new Hono();

// Environment variables
const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID || "";
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET || "";
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN || "";
const PORT = parseInt(process.env.PORT || "3001");
const ALLOWED_ORIGINS = (
  process.env.ALLOWED_ORIGINS ||
  "https://blacktagdevs.com,https://www.blacktagdevs.com,https://rendezview.com,https://www.rendezview.com,http://localhost:3000,http://localhost:5173"
).split(",");

// CORS configuration
app.use(
  "/*",
  cors({
    origin: ALLOWED_ORIGINS,
    allowMethods: ["POST", "GET", "OPTIONS"],
    allowHeaders: ["Content-Type"],
    maxAge: 86400, // 24 hours
  })
);

// Health check endpoint
app.get("/health", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    zohoConfigured: !!(ZOHO_CLIENT_ID && ZOHO_CLIENT_SECRET && ZOHO_REFRESH_TOKEN),
  });
});

// Types
interface LeadData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
}

interface VendorWaitlistData {
  name: string;
  email: string;
  businessType: string;
  location: string;
  businessName?: string;
}

interface ZohoTokenResponse {
  access_token?: string;
  error?: string;
}

interface ZohoLeadResponse {
  data?: Array<{
    details?: {
      id: string;
    };
    status?: string;
    message?: string;
  }>;
  message?: string;
}

// Cache access token to reduce API calls
let cachedAccessToken: string | null = null;
let tokenExpiresAt: number = 0;

// Get fresh access token using refresh token
async function getAccessToken(): Promise<string> {
  // Return cached token if still valid (with 5 min buffer)
  if (cachedAccessToken && Date.now() < tokenExpiresAt - 300000) {
    return cachedAccessToken;
  }

  const response = await fetch("https://accounts.zoho.com/oauth/v2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: ZOHO_CLIENT_ID,
      client_secret: ZOHO_CLIENT_SECRET,
      refresh_token: ZOHO_REFRESH_TOKEN,
    }),
  });

  const data = (await response.json()) as ZohoTokenResponse;

  if (!data.access_token) {
    console.error("Zoho token error:", data);
    throw new Error("Failed to get access token from Zoho");
  }

  // Cache token for 55 minutes (tokens expire in 1 hour)
  cachedAccessToken = data.access_token;
  tokenExpiresAt = Date.now() + 55 * 60 * 1000;

  return data.access_token;
}

// Create lead in Zoho CRM
async function createZohoLead(
  leadData: LeadData,
  accessToken: string
): Promise<ZohoLeadResponse> {
  const response = await fetch("https://www.zohoapis.com/crm/v2/Leads", {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          Last_Name: leadData.name,
          Email: leadData.email,
          Company: leadData.company || "Not provided",
          Description: leadData.message,
          Lead_Source: "Website",
          // Custom fields - ensure these exist in your Zoho CRM
          Project_Type: leadData.projectType,
          Budget_Range: leadData.budget,
        },
      ],
      trigger: ["workflow"],
    }),
  });

  const result = (await response.json()) as ZohoLeadResponse;

  if (!response.ok) {
    console.error("Zoho CRM error:", result);
    throw new Error(result.message || "Failed to create lead in Zoho CRM");
  }

  return result;
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Map business type to descriptive format
const BUSINESS_TYPE_MAP: Record<string, string> = {
  photographer: "Photography Services",
  videographer: "Videography Services",
  dj: "DJ Services",
  catering: "Catering Services",
  venue: "Event Venue",
  decor: "Decor & Styling",
  entertainment: "Entertainment Services",
  planning: "Event Planning",
  other: "Other Event Services",
};

// Create vendor waitlist lead in Zoho CRM
async function createVendorLead(
  data: VendorWaitlistData,
  accessToken: string
): Promise<ZohoLeadResponse> {
  const nameParts = data.name.trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || firstName;
  const serviceType = BUSINESS_TYPE_MAP[data.businessType] || data.businessType;

  const response = await fetch("https://www.zohoapis.com/crm/v2/Leads", {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          First_Name: firstName,
          Last_Name: lastName,
          Email: data.email,
          City: data.location,
          Company: data.businessName || `${serviceType} - ${data.location}`,
          Industry: "Event Services",
          Description: `Vendor Waitlist Signup - ${serviceType}\nLocation: ${data.location}\nBusiness Name: ${data.businessName || "Not provided"}\nSubmitted: ${new Date().toISOString()}`,
          Lead_Source: "RendezView Vendor Landing Page",
          Lead_Status: "Not Contacted",
          Rating: "Hot",
        },
      ],
      trigger: ["approval", "workflow", "blueprint"],
    }),
  });

  const result = (await response.json()) as ZohoLeadResponse;

  if (!response.ok) {
    console.error("Zoho CRM error:", result);
    throw new Error(result.message || "Failed to create lead in Zoho CRM");
  }

  return result;
}

// Contact form endpoint
app.post("/contact", async (c) => {
  try {
    const body = await c.req.json<LeadData>();

    // Validation
    if (!body.name || !body.email) {
      return c.json(
        { error: "Missing required fields: name, email" },
        400
      );
    }

    if (!isValidEmail(body.email)) {
      return c.json({ error: "Invalid email address" }, 400);
    }

    if (!body.projectType) {
      return c.json({ error: "Please select a project type" }, 400);
    }

    if (!body.budget) {
      return c.json({ error: "Please select a budget range" }, 400);
    }

    // Check if Zoho is configured
    if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
      console.error("Zoho CRM not configured - falling back to log only");
      console.log("New lead received:", {
        name: body.name,
        email: body.email,
        company: body.company,
        projectType: body.projectType,
        budget: body.budget,
        message: body.message || "(no message)",
      });

      return c.json({
        success: true,
        message: "Thank you! We'll be in touch within 24 hours.",
        warning: "CRM integration pending setup",
      });
    }

    // Create lead in Zoho CRM
    const accessToken = await getAccessToken();
    const result = await createZohoLead(body, accessToken);

    console.log(`Lead created successfully: ${body.email}`);

    return c.json({
      success: true,
      message: "Thank you! We'll be in touch within 24 hours.",
      id: result.data?.[0]?.details?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return c.json(
      {
        error:
          "Failed to submit your message. Please email us directly at blacktagdevs@gmail.com",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      500
    );
  }
});

// RendezView Vendor Waitlist endpoint
app.post("/vendor-waitlist", async (c) => {
  try {
    const body = await c.req.json<VendorWaitlistData>();

    // Validation
    if (!body.name || body.name.trim().length < 2) {
      return c.json({ error: "Please enter your full name" }, 400);
    }

    if (!body.email || !isValidEmail(body.email)) {
      return c.json({ error: "Please enter a valid email address" }, 400);
    }

    if (!body.businessType) {
      return c.json({ error: "Please select your service type" }, 400);
    }

    if (!body.location || body.location.trim().length < 3) {
      return c.json({ error: "Please enter your city and state" }, 400);
    }

    // Check if Zoho is configured
    if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
      console.error("Zoho CRM not configured - falling back to log only");
      console.log("New vendor waitlist signup:", {
        name: body.name,
        email: body.email,
        businessType: body.businessType,
        location: body.location,
        businessName: body.businessName || "(not provided)",
      });

      return c.json({
        success: true,
        message: "Thank you for joining the waitlist! We'll be in touch soon.",
        warning: "CRM integration pending setup",
      });
    }

    // Create lead in Zoho CRM
    const accessToken = await getAccessToken();
    const result = await createVendorLead(body, accessToken);

    console.log(`Vendor lead created: ${body.email} (${body.businessType} in ${body.location})`);

    return c.json({
      success: true,
      message: "Thank you for joining the waitlist! We'll be in touch soon.",
      id: result.data?.[0]?.details?.id,
    });
  } catch (error) {
    console.error("Vendor waitlist error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return c.json(
      {
        error: "Unable to process your request. Please try again.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      500
    );
  }
});

// Start server
console.log(`🚀 BlackTagDevs API starting on port ${PORT}`);
console.log(`📧 CORS enabled for: ${ALLOWED_ORIGINS.join(", ")}`);
console.log(
  `🔗 Zoho CRM: ${ZOHO_CLIENT_ID ? "Configured" : "Not configured (leads will be logged only)"}`
);

serve({
  fetch: app.fetch,
  port: PORT,
});

console.log(`✅ Server running at http://localhost:${PORT}`);