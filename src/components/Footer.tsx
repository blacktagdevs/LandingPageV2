import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";
import logoImage from "figma:asset/3da411c0a3b644d5c8195b1ab622779ebc2cbb9e.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    services: [
      { name: "Web Design", href: "#services" },
      { name: "Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Consulting", href: "#services" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#portfolio" },
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <h3 className="font-bold text-xl">BlackTagDevs</h3>
                <img
                  src={logoImage}
                  alt="BlackTagDevs Logo"
                  className="w-8 h-8 object-contain"
                  style={{ filter: "invert(1) brightness(2)" }}
                />
              </div>
              <p className="text-primary-foreground/80 max-w-md">
                We're a creative digital agency that helps businesses transform
                their digital presence through innovative design and
                development.
              </p>
            </div>

            {/* Newsletter */}
            {/* <div className="space-y-4">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div> */}
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80">
            © 2025 BlackTagDevs. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Back to Top */}
          <Button
            variant="secondary"
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            <ArrowUp className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
