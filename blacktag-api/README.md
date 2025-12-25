# BlackTagDevs Contact API

Hono microservice that handles contact form submissions and creates leads in Zoho CRM.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```

   Then add your Zoho CRM credentials to `.env`

3. **Get Zoho Credentials:**

   a. Go to https://api-console.zoho.com/

   b. Create a "Self Client"

   c. Generate a grant token with scopes:
      ```
      ZohoCRM.modules.leads.CREATE,ZohoCRM.modules.leads.READ
      ```

   d. Exchange grant token for refresh token:
      ```bash
      curl -X POST "https://accounts.zoho.com/oauth/v2/token" \
        -d "grant_type=authorization_code" \
        -d "client_id=YOUR_CLIENT_ID" \
        -d "client_secret=YOUR_CLIENT_SECRET" \
        -d "code=YOUR_GRANT_TOKEN"
      ```

   e. Save the `refresh_token` from the response

4. **Create custom fields in Zoho CRM:**

   Go to Settings → Customization → Modules and Fields → Leads and add:
   - `Project_Type` (Picklist)
   - `Budget_Range` (Picklist)

## Development

```bash
npm run dev
```

Server runs at http://localhost:3001

## Production

Build and start:
```bash
npm run build
npm start
```

## Deploy to Railway

1. Push to GitHub
2. Connect repo in Railway dashboard
3. Add environment variables:
   - `ZOHO_CLIENT_ID`
   - `ZOHO_CLIENT_SECRET`
   - `ZOHO_REFRESH_TOKEN`
   - `PORT=3001`
   - `ALLOWED_ORIGINS=https://blacktagdevs.com,https://www.blacktagdevs.com`

## API Endpoints

### `GET /health`
Health check endpoint.

### `POST /contact`
Create a new lead in Zoho CRM.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "projectType": "Full-Stack Development",
  "budget": "$25k - $50k",
  "message": "Description of the project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you! We'll be in touch within 24 hours.",
  "id": "zoho_lead_id"
}
```