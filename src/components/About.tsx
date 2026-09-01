import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  CheckCircle,
  Award,
  Users,
  Coffee,
  Linkedin,
  Mail,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ui/scroll-reveal";
import { AnimatedText } from "./ui/animated-text";
import teamMember2 from "../assets/jamar-headshot.webp";
import teamMember1 from "../assets/ef0aa281c074ace4d8649ac161335243834a735a.png";
import teamMember4 from "../assets/f6ff609e5d3599d4f547ec450bd350bf7a6299a0.png";
import teamMember3 from "../assets/daniel.jpeg";
import teamPhoto1 from "../assets/team-photo-1.webp";
import teamPhoto3 from "../assets/team-photo-3.webp";

export function About() {
  const values = [
    {
      title: "Innovation Without Limits",
      description:
        "We challenge the status quo, pushing technology beyond conventional boundaries.",
    },
    {
      title: "End-to-End Excellence",
      description:
        "From strategy to execution, we deliver seamless, high quality solutions.",
    },
    {
      title: "Collaboration & Community",
      description:
        "We grow together, sharing knowledge and uplifting those around us.",
    },
    {
      title: "Scalability & Impact",
      description:
        "Every solution we build is designed to evolve and drive real world value.",
    },
  ];

  const skills = [
    "FullStack Development",
    "AI Tools & Agents",
    "Secure By Design",
    "Product Strategy",
    "Data Engineering",
    "Cloud Platforms",
    "Machine Learning",
    "Cybersecurity",
  ];

  const achievements = [
    // {
    //   icon: Award,
    //   number: "15+",
    //   label: "Awards Won",
    // },
    {
      icon: Users,
      number: "4",
      label: "Core Team Members",
    },
    {
      icon: Coffee,
      number: "30+",
      label: "Combined Years of Experience",
    },
  ];

  const teamMembers = [
    {
      name: "Bosun Adepoju",
      role: "Chief Technology Officer",
      position: "Lead Software Engineer",
      image: teamMember1,
      bio: "Our Lead Software Engineer with expertise in building scalable enterprise applications.",
      linkedin: "https://www.linkedin.com/company/blacktagdevs/",
      email: "team@blacktagdevs.com",
    },
    {
      name: "Jamar Mitchell",
      role: "Chief Design & Interface Officer",
      position: "Software Engineer @ Microsoft",
      image: teamMember2,
      bio: "Software Engineer at Microsoft specializing in user interface design and development.",
      linkedin: "https://www.linkedin.com/in/jamar-mitchell-456b18b5/",
      email: "team@blacktagdevs.com",
    },
    {
      name: "Daniel Uyo",
      role: "Chief Product & Data Officer",
      position: "Product Manager Data & AI @ Google",
      image: teamMember3,
      bio: "Product Manager for Data & AI at Google, driving data-driven product strategies and AI implementations.",
      linkedin: "https://www.linkedin.com/in/daniel-uyo/",
      email: "team@blacktagdevs.com",
    },
    {
      name: "Cameron Johnson",
      role: "Chief Security & Compliance Officer",
      position: "Cybersecurity Manager @ NBC",
      image: teamMember4,
      bio: "Cybersecurity Manager at NBC with extensive experience in security frameworks and compliance.",
      linkedin: "https://www.linkedin.com/in/cameron-johnson-904878128/",
      email: "team@blacktagdevs.com",
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <ScrollReveal>
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand border border-brand/25">
                  About Us
                </div>

                <AnimatedText
                  text="We're BlackTagDevs"
                  tag="h2"
                  className="text-3xl lg:text-5xl font-bold"
                />

              <p className="text-muted-foreground">
                BlackTagDevs was founded by a team of highly skilled engineers
                with complementary expertise, united by a shared vision to push
                the boundaries of innovation. We don't just build products, we
                craft experiences, guiding our clients through every step of the
                journey from idealization to execution.
              </p>
            </div>

            {/* Values */}
            {/* <div className="space-y-4">
              <h3 className="font-semibold">Our Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="font-semibold">Our Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-bold text-lg">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <Button size="lg" className="group">
              Learn More About Us
              <CheckCircle className="ml-2 h-4 w-4" />
            </Button> */}
            </div>
          </ScrollReveal>

          {/* Right Column - Image */}
          <ScrollReveal delay={200}>
            <div className="relative pb-8 pr-8">
              {/* One hero frame rather than a four-up collage */}
              <div className="relative h-[420px] rounded-xl overflow-hidden border">
                <img
                  src={teamPhoto1}
                  alt="The BlackTagDevs team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/55 to-transparent" />
              </div>

              {/* Inset detail frame */}
              <div className="absolute bottom-0 right-0 w-52 h-36 rounded-xl overflow-hidden border-4 border-background shadow-lg">
                <img
                  src={teamPhoto3}
                  alt="BlackTagDevs team at work"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute bottom-16 -left-6 bg-card border rounded-xl px-6 py-5 shadow-lg">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 pt-24">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand border border-brand/25">
              Our Team
            </div>
            <AnimatedText
              text="Meet the People Behind BlackTagDevs"
              tag="h2"
              className="text-3xl lg:text-4xl font-bold"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              BlackTagDevs was founded by a team of highly skilled engineers with
              complementary expertise, united by a shared vision to push the
              boundaries of innovation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group flex flex-col gap-5">
                {/* Portrait — full colour, lifts slightly on hover */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-[3px] bg-brand" />

                  {/* Contact links reveal over the portrait */}
                  <div className="absolute right-4 top-4 flex gap-2 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-brand hover:border-brand transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-brand hover:border-brand transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-foreground font-medium text-sm">{member.role}</p>
                  <p className="text-muted-foreground text-sm">
                    {member.position}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
