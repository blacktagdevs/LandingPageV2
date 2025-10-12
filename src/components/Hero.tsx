import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// import logoImage from "figma:asset/3da411c0a3b644d5c8195b1ab622779ebc2cbb9e.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Company Branding */}
              <div className="flex items-center space-x-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    BlackTagDevs
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Technical Innovation Studio
                  </p>
                </div>
                <img
                  src={logoImage}
                  alt="BlackTagDevs Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Pioneering Technical Innovations
              </div> */}

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Building Efficient{" "}
                <span className="text-primary">Scalable</span> End-to-End
                Solutions
              </h1>

              <p className="text-muted-foreground max-w-lg">
                We build efficient, scalable, end-to-end tech solutions across
                software, data, AI, and design, while empowering our community
                by sharing knowledge and fostering growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={scrollToContact}>
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              {/* <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold">25+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=600&fit=crop&crop=faces"
                alt="Design workspace with modern laptop and design tools"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-8 -left-8 z-20 bg-card border rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <div>
                  <div className="font-semibold">UI/UX Design</div>
                  <div className="text-sm text-muted-foreground">
                    User-Centered
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 z-20 bg-card border rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold">Development</div>
                  <div className="text-sm text-muted-foreground">
                    Pixel Perfect
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl -rotate-6 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
