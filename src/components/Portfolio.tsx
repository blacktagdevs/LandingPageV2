import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import project images
import stemposureImg from "../assets/stemposure.png";
import drunkenBeeImg from "../assets/drunkenbee.JPG";
import tajaImg from "../assets/TAJA.png";
import holmImg from "../assets/holm.png";
import renderAtlImg from "../assets/RenderATL_Logo.jpg";
import hbcuMadeImg from "../assets/hbcumade.png";

export function Portfolio() {
  const projects = [
    {
      title: "Holm",
      description:
        "Modern platform with user authentication, gallery features, and subscription-based services designed for creative professionals.",
      image: holmImg,
      tags: ["Authentication", "Gallery", "Subscription", "Modern Design"],
      category: "Creative Platform",
      metrics: ["User Authentication", "Gallery System", "Subscription Model"],
    },
    {
      title: "Render Atlanta",
      description:
        "Provided comprehensive IT services and technical infrastructure support for Atlanta's premier tech conference with 10,000+ attendees and 120+ speakers.",
      image: renderAtlImg,
      tags: [
        "IT Services",
        "Event Infrastructure",
        "Large Scale",
        "Tech Support",
      ],
      category: "Event Technology",
      metrics: ["10,000+ Attendees", "120+ Speakers", "2-Day Conference"],
    },
    {
      title: "HBCUMade",
      description:
        "A digital marketplace celebrating and empowering HBCU entrepreneurs by connecting them with customers who value Black excellence and HBCU culture.",
      image: hbcuMadeImg,
      tags: ["E-Commerce", "Marketplace", "HBCU", "Community"],
      category: "Marketplace Platform",
      metrics: [
        "HBCU Entrepreneurs",
        "Digital Marketplace",
        "Cultural Commerce",
      ],
    },
    {
      title: "Stemposure",
      description:
        "Built a dynamic platform connecting thousands of Black & Brown STEM professionals with career opportunities and industry insights.",
      image: stemposureImg,
      tags: ["React", "Node.js", "Community Platform", "Event Management"],
      category: "Community Platform",
      metrics: ["300+ Event RSVPs", "20% MoM Growth", "Thousands Connected"],
    },
    {
      title: "DrunkenBee",
      description:
        "E-commerce platform with multi-channel sales integration and optimized for search visibility and customer retention.",
      image: drunkenBeeImg,
      tags: ["E-Commerce", "SEO", "Multi-Channel", "Analytics"],
      category: "E-Commerce",
      metrics: [
        "10K+ Search Impressions",
        "4+ Sales Channels",
        "35% Customer Retention",
      ],
    },
    {
      title: "Taja",
      description:
        "PCI-compliant payment processing system with real-time transaction capabilities and 99.99% uptime.",
      image: tajaImg,
      tags: ["FinTech", "PCI Compliance", "Real-time", "Security"],
      category: "FinTech",
      metrics: ["$500K+ Processed", "100+ Merchants", "99.99% Uptime"],
    },
    {
      title: "RendezView",
      description:
        "AI-powered event planning platform designed to improve vendor conversion rates through intelligent recommendations.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      tags: ["AI/ML", "Event Planning", "Recommendations", "Analytics"],
      category: "AI-Powered Platform",
      metrics: [
        "40% User Interest",
        "$100K+ Potential Bookings",
        "25% Conversion Boost",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            Portfolio
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold">Our Recent Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our latest projects and see how we've helped
            businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 gap-0"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                {project.title === "Holm" ? (
                  <p
                    className="font-semibold text-center"
                    style={{
                      fontFamily:
                        '"Inter Display", "Inter Display Placeholder", sans-serif',
                      fontSize: "40px",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      lineHeight: "0.8em",
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    holm
                  </p>
                ) : (
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button size="lg">
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
}
