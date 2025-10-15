import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "figma:asset/3da411c0a3b644d5c8195b1ab622779ebc2cbb9e.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <h1 className="font-bold">BlackTagDevs</h1>
            <img
              src={logoImage}
              alt="BlackTagDevs Logo"
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "home")}
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "services")}
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "about")}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "portfolio")}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button asChild>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              <a
                href="#home"
                className="block px-3 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={(e) => handleNavClick(e, "services")}
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={(e) => handleNavClick(e, "portfolio")}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
              <div className="px-3 pt-2">
                <Button className="w-full" asChild>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "contact")}
                  >
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
