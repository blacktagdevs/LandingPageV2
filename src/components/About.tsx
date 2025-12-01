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
import teamMember2 from "figma:asset/6cd55b63ea286021d9ee06be2562d4489fee84a0.png";
import teamMember1 from "figma:asset/ef0aa281c074ace4d8649ac161335243834a735a.png";
import teamMember4 from "figma:asset/f6ff609e5d3599d4f547ec450bd350bf7a6299a0.png";
import teamMember3 from "../assets/daniel.png";

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
      email: "blacktagdevs@gmail.com",
    },
    {
      name: "Jamar Mitchell",
      role: "Chief Design & Interface Officer",
      position: "Software Engineer @ Microsoft",
      image: teamMember2,
      bio: "Software Engineer at Microsoft specializing in user interface design and development.",
      linkedin: "https://www.linkedin.com/in/jamar-mitchell-456b18b5/",
      email: "blacktagdevs@gmail.com",
    },
    {
      name: "Daniel Uyo",
      role: "Chief Product & Data Officer",
      position: "Product Manager Data & AI @ Google",
      image: teamMember3,
      bio: "Product Manager for Data & AI at Google, driving data-driven product strategies and AI implementations.",
      linkedin: "https://www.linkedin.com/in/daniel-uyo/",
      email: "blacktagdevs@gmail.com",
    },
    {
      name: "Cameron Johnson",
      role: "Chief Security & Compliance Officer",
      position: "Cybersecurity Manager @ NBC",
      image: teamMember4,
      bio: "Cybersecurity Manager at NBC with extensive experience in security frameworks and compliance.",
      linkedin: "https://www.linkedin.com/in/cameron-johnson-904878128/",
      email: "blacktagdevs@gmail.com",
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                About Us
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold">
                We're <span className="text-primary">BlackTagDevs</span>
              </h2>

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

          {/* Right Column - Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=400&fit=crop&crop=faces"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover rounded-2xl"
                  style={{ filter: "grayscale(100%)" }}
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop&crop=center"
                  alt="Modern office space"
                  className="w-full h-48 object-cover rounded-2xl"
                  style={{ filter: "grayscale(100%)" }}
                />
              </div>
              <div className="space-y-6 pt-12">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop&crop=faces"
                  alt="Creative workspace"
                  className="w-full h-48 object-cover rounded-2xl"
                  style={{ filter: "grayscale(100%)" }}
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=400&fit=crop&crop=center"
                  alt="Design process"
                  className="w-full h-64 object-cover rounded-2xl"
                  style={{ filter: "grayscale(100%)" }}
                />
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-card border rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 pt-24">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            Our Team
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Meet the People Behind{" "}
            <span className="text-primary">BlackTagDevs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            BlackTagDevs was founded by a team of highly skilled engineers with
            complementary expertise, united by a shared vision to push the
            boundaries of innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-card border rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-28 h-28 lg:w-32 lg:h-32 object-cover rounded-full mx-auto border-4 border-primary/10"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg lg:text-xl font-bold">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm lg:text-base">
                      {member.role}
                    </p>
                    <p className="text-blue-600 font-medium text-xs lg:text-sm">
                      {member.position}
                    </p>
                    <p className="text-muted-foreground text-xs lg:text-sm">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
