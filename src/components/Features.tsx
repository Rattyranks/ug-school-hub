import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  GraduationCap, 
  Calendar, 
  FileText, 
  Smartphone, 
  CreditCard,
  MessageSquare,
  MapPin 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Student Management",
      description: "Complete student records, enrollment tracking, attendance monitoring, and performance analytics.",
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      title: "Teacher Portal",
      description: "Staff management, class assignments, performance evaluation, and leave management system.",
      color: "text-success"
    },
    {
      icon: Calendar,
      title: "Smart Timetabling",
      description: "Auto-generate conflict-free schedules, room allocation, and resource management.",
      color: "text-accent"
    },
    {
      icon: FileText,
      title: "UNEB Report Cards",
      description: "Automated report generation with UNEB grading, comments, and digital signatures.",
      color: "text-ugandan-red"
    },
    {
      icon: Smartphone,
      title: "Parent Portal",
      description: "Real-time access to student progress, attendance, fees, and direct communication.",
      color: "text-primary"
    },
    {
      icon: CreditCard,
      title: "Mobile Money Integration",
      description: "Seamless payments via MTN MoMo and Airtel Money with automated receipts.",
      color: "text-success"
    },
    {
      icon: MessageSquare,
      title: "SMS Communication",
      description: "Bulk messaging for announcements, alerts, and emergency notifications.",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Uganda Localization",
      description: "Local language support, currency handling, and education system compliance.",
      color: "text-ugandan-red"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">
            Everything Your School
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text block">
              Needs in One Place
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive features designed specifically for Ugandan schools, 
            from rural primary schools to urban secondary institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-background to-muted ${feature.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Integration Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-card rounded-2xl p-8 shadow-lg border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">UNEB</div>
              <div className="text-sm text-muted-foreground">Compliant</div>
            </div>
            
            <div className="w-px h-12 bg-border"></div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-success">MoMo</div>
              <div className="text-sm text-muted-foreground">Integrated</div>
            </div>
            
            <div className="w-px h-12 bg-border"></div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">SMS</div>
              <div className="text-sm text-muted-foreground">Enabled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;