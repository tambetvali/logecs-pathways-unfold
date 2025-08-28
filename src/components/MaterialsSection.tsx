import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, BookOpen, Users } from "lucide-react";

const MaterialsSection = () => {
  const materials = [
    {
      title: "Essential Theorems",
      description: "Foundational insights that form the bedrock of unified understanding",
      type: "Theory",
      icon: FileText,
      readTime: "15 min"
    },
    {
      title: "Practical Applications", 
      description: "Real-world implementations of Laegna principles for daily transformation",
      type: "Guide",
      icon: BookOpen,
      readTime: "12 min"
    },
    {
      title: "Case Studies",
      description: "Stories of individuals and communities applying these teachings",
      type: "Stories", 
      icon: Users,
      readTime: "8 min"
    }
  ];

  const externalLinks = [
    {
      title: "Spireason Collection",
      description: "Complete philosophical foundation and theoretical framework",
      url: "https://spireason.neocities.org/",
      type: "Website"
    },
    {
      title: "LaegnaSpi Repository",
      description: "Curated datasets and collected works on HuggingFace",
      url: "https://huggingface.co/datasets/tvaeli/LaegnaSpi", 
      type: "Dataset"
    },
    {
      title: "Thematic Repositories",
      description: "GitHub collections of specialized implementations",
      url: "https://github.com/tambetvali/",
      type: "Code"
    },
    {
      title: "AI-Oriented Overview", 
      description: "Complete theory synthesis on Notion",
      url: "https://www.notion.so/Laegna-1a575bfc115480a38129e9a9787ab565",
      type: "Documentation"
    }
  ];

  return (
    <section id="materials" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Materials for <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Carefully crafted resources designed to meet you wherever you are on your journey 
            of understanding and transformation.
          </p>
        </div>

        {/* Featured Materials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {materials.map((material, index) => (
            <Card key={material.title} className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <material.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{material.type}</span>
                  <div className="text-sm text-muted-foreground">• {material.readTime}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                {material.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {material.description}
              </p>
              
              <Button variant="outline" className="w-full">
                Read Now
              </Button>
            </Card>
          ))}
        </div>

        {/* External Resources */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-center mb-12">
            Extended <span className="gradient-text">Resources</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {externalLinks.map((link, index) => (
              <Card key={link.title} className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                        {link.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {link.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {link.description}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary/80 p-0 h-auto"
                      asChild
                    >
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Visit Resource
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                  
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;