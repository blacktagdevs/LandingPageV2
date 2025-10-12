import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const projects = [
    {
      title: "Stemposure",
      description:
        "Built a dynamic platform connecting thousands of Black & Brown STEM professionals with career opportunities and industry insights.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      tags: ["React", "Node.js", "Community Platform", "Event Management"],
      category: "Community Platform",
      metrics: ["300+ Event RSVPs", "20% MoM Growth", "Thousands Connected"],
    },
    {
      title: "DrunkenBee",
      description:
        "E-commerce platform with multi-channel sales integration and optimized for search visibility and customer retention.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
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
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
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
    {
      title: "Holm",
      description:
        "Modern platform with user authentication, gallery features, and subscription-based services designed for creative professionals.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      tags: ["Authentication", "Gallery", "Subscription", "Modern Design"],
      category: "Creative Platform",
      metrics: ["User Authentication", "Gallery System", "Subscription Model"],
    },
    {
      title: "Render Atlanta",
      description:
        "Provided comprehensive IT services and technical infrastructure support for Atlanta's premier tech conference with 10,000+ attendees and 120+ speakers.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center",
      tags: [
        "IT Services",
        "Event Infrastructure",
        "Large Scale",
        "Tech Support",
      ],
      category: "Event Technology",
      metrics: ["10,000+ Attendees", "120+ Speakers", "2-Day Conference"],
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
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
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
