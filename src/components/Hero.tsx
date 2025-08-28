import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-wisdom.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-md rounded-full border border-primary/20">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Where Science Meets Spirit</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6 leading-tight">
          <span className="gradient-text">Laegna</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-serif text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Bridging Mathematics, Logic, and Wisdom for Human Flourishing
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover Logecs - new mathematics and logic, mind-body growth theory, and essential theorems 
          that unite religions, sciences, materialisms and spiritualities into paths of enrichment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group">
            Explore the Portals
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg"
          >
            About Laegna
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-24 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse delay-700" />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;