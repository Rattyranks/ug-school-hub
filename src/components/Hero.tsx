import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2 text-sm font-medium text-accent-foreground">
                <span className="w-2 h-2 bg-success rounded-full"></span>
                <span>Built for Ugandan Schools</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
                Modern School
                <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text block">
                  Management
                </span>
                Made Simple
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Streamline student records, automate report cards, integrate mobile money payments, 
                and keep parents connected with a comprehensive system designed for Uganda's education sector.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-primary">
                  <Users className="h-5 w-5" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Schools Served</p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-success">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-2xl font-bold">50K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Students Managed</p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-accent">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-2xl font-bold">99%</span>
                </div>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>✓ UNEB Integration</span>
              <span>✓ Mobile Money</span>
              <span>✓ SMS Alerts</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Modern Ugandan classroom with students using technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card border rounded-lg p-4 shadow-lg hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-sm font-medium">98% Attendance Rate</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border rounded-lg p-4 shadow-lg hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">Real-time Reports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;