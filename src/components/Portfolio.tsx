import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ui/scroll-reveal";
import { AnimatedText } from "./ui/animated-text";

// Import project images
import stemposureImg from "../assets/stemposure.png";
import drunkenBeeImg from "../assets/drunkenbee.webp";
import rendezviewImg from "../assets/rendezview-text-logo.svg";
import holmImg from "../assets/holm.png";
import renderAtlImg from "../assets/RenderATL_Logo.jpg";
import hbcuMadeImg from "../assets/hbcumade.png";
import backroomImg from "../assets/backroom-logo.svg";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  metrics?: string[];
  link?: string;
};

// Per-logo tile backgrounds. Most logos are black artwork and use the
// default light plate; these need something specific behind them.
const tileBackgrounds: Record<string, string> = {
  DrunkenBee: "rgb(37, 35, 38)",
  BackRoom: "#000000",
  "Render Atlanta": "#ffffff",
};

function ProjectTile({
  project,
  className = "h-48",
}: {
  project: Project;
  className?: string;
}) {
  const bg = tileBackgrounds[project.title];
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${
        bg ? "" : "bg-gradient-to-br from-[#eef0f4] to-[#dfe3ea]"
      }`}
      style={bg ? { background: bg } : {}}
    >
      {project.title === "Holm" ? (
        <p
          className={`font-semibold text-center w-full flex items-center justify-center p-4 ${className}`}
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
          className={`w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105 ${className}`}
        />
      )}
    </div>
  );
}

export function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const projects = [
    {
      title: "BackRoom",
      description:
        "Members-only events platform for a private community of founders and executives, with ticketed checkout, age verification, and a full admin portal for event and guest management.",
      image: backroomImg,
      tags: ["React", "Stripe", "Ticketing", "Admin Portal"],
      category: "Membership Platform",
      metrics: [
        "Stripe Checkout",
        "Guest List Management",
        "Porsche Studio Partnership",
      ],
      link: "https://www.bkrm.io",
    },
    {
      title: "RendezView",
      description:
        "AI-powered event planning marketplace connecting hosts with vendors and venues, featuring an AI planning assistant, moodboards, and vendor bundles.",
      image: rendezviewImg,
      tags: ["AI/ML", "Marketplace", "Event Planning", "React", "FastAPI"],
      category: "AI-Powered Marketplace",
      metrics: [
        "40% User Interest",
        "$100K+ Potential Bookings",
        "25% Conversion Boost",
      ],
      link: "https://rendezview.app",
    },
    {
      title: "Holm",
      description:
        "Modern platform with user authentication, gallery features, and subscription-based services designed for creative professionals.",
      image: holmImg,
      tags: ["Authentication", "Gallery", "Subscription", "Modern Design"],
      category: "Creative Platform",
      metrics: ["User Authentication", "Gallery System", "Subscription Model"],
      link: "https://holm.site",
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
      link: "https://renderatl.com/",
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
      link: "https://www.hbcumade.app/",
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
      link: "https://drunkenbeegame.com/",
    },
  ];

  const [lead, ...rest] = projects;

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand border border-brand/25">
              Portfolio
            </div>
            <AnimatedText
              text="Our Recent Work"
              tag="h2"
              className="text-3xl lg:text-5xl font-bold"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our latest projects and see how we've helped
              businesses achieve their digital goals.
            </p>
          </div>
        </ScrollReveal>

        {/* Lead project — wide panel */}
        {lead && (
          <ScrollReveal>
            <Card className="group overflow-hidden border-border/60 hover:border-foreground/25 hover:shadow-[0_8px_30px_-6px_rgba(255,255,255,0.10)] transition-all duration-300 gap-0 mb-6 p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <ProjectTile project={lead} className="h-56 lg:h-full lg:min-h-[300px]" />
                <CardContent className="flex flex-col justify-center gap-4 p-8 lg:p-10">
                  <Badge variant="outline" className="self-start">
                    {lead.category}
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight">
                    {lead.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {lead.description}
                  </p>

                  {lead.metrics && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 border-t border-border/60 pt-5">
                      {lead.metrics.map((metric, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-[7px]" />
                          <span className="text-sm font-medium leading-snug">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {lead.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {lead.link && (
                    <a
                      href={lead.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-link hover:text-link/80 hover:underline font-medium"
                    >
                      Visit Site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </CardContent>
              </div>
            </Card>
          </ScrollReveal>
        )}

        {/* Supporting projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
          {rest
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border/60 hover:border-foreground/25 hover:shadow-[0_8px_30px_-6px_rgba(255,255,255,0.10)] transition-all duration-300 hover:-translate-y-2 gap-0 p-0 animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <ProjectTile project={project} />

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
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-link hover:text-link/80 hover:underline mt-3 font-medium"
                        >
                          Visit Site
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    {project.metrics && (
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 border-t border-border/60 pt-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <div
                            key={metricIndex}
                            className="flex items-center gap-1.5 text-xs text-muted-foreground"
                          >
                            <span className="w-1 h-1 rounded-full bg-brand shrink-0" />
                            {metric}
                          </div>
                        ))}
                      </div>
                    )}

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

        {/* Navigation Arrows */}
        {rest.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <span className="text-sm text-muted-foreground">
            Page {currentPage + 1} of{" "}
            {Math.ceil(rest.length / itemsPerPage)}
          </span>

          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentPage(
                Math.min(
                  Math.ceil(rest.length / itemsPerPage) - 1,
                  currentPage + 1
                )
              )
            }
            disabled={
              currentPage >= Math.ceil(rest.length / itemsPerPage) - 1
            }
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        )}

        {/* <div className="text-center mt-12">
          <Button size="lg">
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
}
