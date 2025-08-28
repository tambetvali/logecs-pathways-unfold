import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface PortalCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "primary" | "secondary" | "accent";
  href?: string;
}

const PortalCard = ({ title, description, icon: Icon, color, href }: PortalCardProps) => {
  const colorClasses = {
    primary: "border-primary/30 hover:border-primary/50 hover:shadow-primary/20",
    secondary: "border-secondary/30 hover:border-secondary/50 hover:shadow-secondary/20", 
    accent: "border-accent/30 hover:border-accent/50 hover:shadow-accent/20"
  };

  const iconColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent"
  };

  return (
    <Card className={`portal-card p-8 ${colorClasses[color]} group cursor-pointer`}>
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-${color}/10 border border-${color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-8 h-8 ${iconColors[color]}`} />
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
            {description}
          </p>
        </div>
        
        {/* Action */}
        <Button 
          variant="ghost" 
          className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 justify-between"
        >
          Enter Portal
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
};

export default PortalCard;