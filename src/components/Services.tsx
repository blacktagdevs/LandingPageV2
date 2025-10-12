import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Palette, Code, Smartphone, Globe, Zap, Shield, Database } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Code,
      title: "FullStack Development",
      description: "We design and build robust, scalable applications from front to back, ensuring seamless functionality, intuitive user experiences, and optimized performance.",
      features: ["React & Next.js", "Node.js & Python", "Database Design", "API Development"]
    },
    {
      icon: Zap,
      title: "AI Tools & Agents",
      description: "We develop AI-driven solutions, from chatbots to automated decision making systems, enhancing efficiency and unlocking new possibilities for businesses.",
      features: ["Custom AI Models", "Chatbot Development", "Process Automation", "Machine Learning"]
    },
    {
      icon: Shield,
      title: "Secure By Design",
      description: "We provide cutting edge security frameworks, risk assessments, and control implementation strategies to protect digital assets, ensuring compliance and resilience against cyber threats.",
      features: ["Security Audits", "Compliance Frameworks", "Risk Assessment", "Incident Response"]
    },
    {
      icon: Globe,
      title: "Product Strategy & Launch",
      description: "We guide businesses from concept to market, offering strategic planning, technical roadmaps, and go-to-market execution to ensure successful product lifecycles.",
      features: ["Market Research", "Technical Roadmaps", "Go-to-Market Strategy", "Product Analytics"]
    },
    {
      icon: Database,
      title: "Data Tools & Engineering",
      description: "We build and optimize data pipelines, analytics platforms, and machine learning integrations to help businesses harness data for smarter decision-making.",
      features: ["Data Pipelines", "Analytics Platforms", "Data Visualization", "Business Intelligence"]
    },
    {
      icon: Smartphone,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services that modernize your business processes and technology stack for improved efficiency and growth.",
      features: ["Process Optimization", "Technology Modernization", "Change Management", "Performance Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            Services
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Our <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We build efficient, scalable, end-to-end tech solutions across software, 
            data, AI, and design to drive innovation and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}