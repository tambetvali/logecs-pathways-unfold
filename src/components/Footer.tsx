import { Sparkles, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold gradient-text">
              Laegna
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Bridging mathematics, logic, and wisdom for human flourishing. 
              Where science meets spirit in the pursuit of unified understanding.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Explore
            </h4>
            <nav className="space-y-2">
              <a href="#portals" className="block text-muted-foreground hover:text-primary transition-colors">
                Portals of Discovery
              </a>
              <a href="#materials" className="block text-muted-foreground hover:text-primary transition-colors">
                Materials & Resources  
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Laegna
              </a>
            </nav>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Our Mission  
            </h4>
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                To unite religions, sciences, materialisms and spiritualities into paths 
                of enrichment for both individual and collective evolution.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Laegna. Sharing wisdom for the betterment of all.
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-primary" /> for human flourishing
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;