import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink, ArrowLeft, FileText, Lightbulb, Heart, Brain, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const MaterialsLibrary = () => {
  useEffect(() => {
    document.title = "Complete Materials Library | Laegna";
  }, []);

  const introductoryTexts = [
    {
      title: "Simply about Infinities",
      description: "A simple introduction to infinities in material, spiritual and mental worlds - the perfect starting point for understanding Laegna concepts.",
      url: "https://spireason.neocities.org/Simply%20about%20Infinities.pdf",
      readTime: "15 min",
      difficulty: "Beginner",
      category: "Philosophy"
    },
    {
      title: "Holy War", 
      description: "Understanding the spiritual battles we face in human life and practical approaches for spiritual warriors in the modern world.",
      url: "https://spireason.neocities.org/Holy%20War.pdf",
      readTime: "20 min",
      difficulty: "Intermediate",
      category: "Spirituality"
    },
    {
      title: "Principles of Material Magic - Short Version",
      description: "Essential Buddhist principles for Material Awakening in condensed form. The same principles guide you from beginning to enlightenment.",
      url: "https://spireason.neocities.org/Principles%20of%20Material%20Magic%20%E2%80%93%20short%20version.pdf",
      readTime: "12 min",
      difficulty: "Beginner",
      category: "Practice"
    }
  ];

  const coreTexts = [
    {
      title: "Principles of Material Magic",
      description: "Complete guide to Buddhist principles adapted for material awakening and consciousness transformation in everyday life.",
      url: "https://spireason.neocities.org/Principles%20of%20Material%20Magic.pdf",
      readTime: "45 min",
      difficulty: "Advanced",
      category: "Practice"
    },
    {
      title: "The Power of Negative Thinking",
      description: "Revolutionary approach to working with difficult emotions and thoughts as tools for growth rather than obstacles to avoid.",
      url: "https://spireason.neocities.org/The%20Power%20of%20Negative%20Thinking.pdf",
      readTime: "30 min", 
      difficulty: "Intermediate",
      category: "Psychology"
    },
    {
      title: "The Material Laws of Truth",
      description: "Fundamental principles governing how truth manifests in material reality and consciousness evolution.",
      url: "https://spireason.neocities.org/The%20Material%20Laws%20of%20Truth.pdf",
      readTime: "35 min",
      difficulty: "Advanced",
      category: "Philosophy"
    },
    {
      title: "Tuning into Material Reality", 
      description: "Practical methods for grounding spiritual insights in daily life and physical experience.",
      url: "https://spireason.neocities.org/Tuning%20into%20Material%20Reality.pdf",
      readTime: "25 min",
      difficulty: "Intermediate", 
      category: "Practice"
    }
  ];

  const specializedTexts = [
    {
      title: "Truth Value Tables, Matter and Mind",
      description: "The mathematical foundations of Logecs - bridging logic, consciousness, and material reality through new mathematical frameworks.",
      url: "https://spireason.neocities.org/Truth%20Value%20Tables,%20Matter%20and%20Mind.pdf",
      readTime: "40 min",
      difficulty: "Expert",
      category: "Mathematics"
    },
    {
      title: "Frequential Analysis of System of Chakras in Buddhism",
      description: "Mathematical approach to understanding chakra systems, energy frequencies, and their relationship to Buddhist philosophy.",
      url: "https://spireason.neocities.org/Frequential%20Analysis%20of%20System%20of%20Chakras%20in%20Buddhism.pdf",
      readTime: "50 min",
      difficulty: "Expert",
      category: "Mathematics"
    },
    {
      title: "Logecs and E Factor", 
      description: "Deep analysis of positive affirmations through mathematical lens, exploring why traditional approaches fail and better alternatives.",
      url: "https://spireason.neocities.org/Logecs%20and%20E%20factor%20%E2%80%93%20what%20is%20bad%20in%20positive%20affirmations.pdf",
      readTime: "35 min",
      difficulty: "Advanced",
      category: "Mathematics"
    },
    {
      title: "Magic as Mental Image",
      description: "Theoretical framework for understanding how consciousness shapes reality through focused intention and visualization.",
      url: "https://spireason.neocities.org/Magic%20as%20Mental%20Image.pdf", 
      readTime: "30 min",
      difficulty: "Advanced",
      category: "Consciousness"
    }
  ];

  const practicalTexts = [
    {
      title: "Meditation and Position",
      description: "Physical postures and their relationship to consciousness states in meditation practice.",
      url: "https://spireason.neocities.org/Meditation%20and%20Position.pdf",
      readTime: "20 min",
      difficulty: "Beginner",
      category: "Practice"
    },
    {
      title: "Karma and Material Meditation",
      description: "Understanding karmic patterns through embodied awareness and grounded meditation techniques.",
      url: "https://spireason.neocities.org/Karma%20and%20Material%20Meditation.pdf",
      readTime: "25 min",
      difficulty: "Intermediate", 
      category: "Practice"
    },
    {
      title: "Yin and Yang in Meditation",
      description: "Balancing complementary forces within consciousness through specific meditation approaches.",
      url: "https://spireason.neocities.org/Yin%20and%20Yang%20in%20Meditation.pdf",
      readTime: "22 min",
      difficulty: "Intermediate",
      category: "Practice"
    },
    {
      title: "Material Alchemy and Root Chakra",
      description: "Grounding spiritual work through root chakra activation and material alchemy principles.",
      url: "https://spireason.neocities.org/Material%20Alchemy%20and%20Root%20Chakra.pdf",
      readTime: "28 min",
      difficulty: "Intermediate",
      category: "Practice"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-accent/10 text-accent";
      case "Intermediate": return "bg-secondary/10 text-secondary"; 
      case "Advanced": return "bg-primary/10 text-primary";
      case "Expert": return "bg-destructive/10 text-destructive";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Mathematics": return Calculator;
      case "Philosophy": return Lightbulb;
      case "Practice": return Heart;
      case "Psychology": return Brain;
      case "Spirituality": return Lightbulb;
      case "Consciousness": return Brain;
      default: return FileText;
    }
  };

  const renderTextGrid = (texts: any[], title: string, subtitle?: string) => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-semibold mb-3">
          {title.split(' ').map((word, i) => 
            i === title.split(' ').length - 1 ? 
            <span key={i} className="gradient-text">{word}</span> : 
            word + ' '
          )}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {texts.map((text, index) => {
          const IconComponent = getCategoryIcon(text.category);
          return (
            <Card key={text.title} className="p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge className={getDifficultyColor(text.difficulty)}>{text.difficulty}</Badge>
                    <Badge variant="outline">{text.category}</Badge>
                    <span className="text-xs text-muted-foreground">{text.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {text.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {text.description}
                  </p>
                  
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={text.url} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center justify-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Read PDF
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        {/* Header */}
        <section className="py-16 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
              Complete <span className="gradient-text">Materials Library</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              A comprehensive collection of texts bridging mathematics, logic, spirituality, and practical wisdom. 
              Each text is designed to be readable independently while contributing to a unified understanding.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span>Beginner Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span>Intermediate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span>Advanced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <span>Expert Level</span>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-6">
          {/* Introductory Texts */}
          {renderTextGrid(introductoryTexts, "Start Here", 
            "Essential introductory texts that provide foundation for understanding Laegna concepts.")}

          {/* Core Texts */}
          {renderTextGrid(coreTexts, "Core Teachings",
            "Fundamental texts exploring the main principles of Material Magic and spiritual development.")}

          {/* Specialized/Mathematical */}
          {renderTextGrid(specializedTexts, "Advanced Theory",
            "Mathematical and theoretical foundations including Logecs and consciousness research.")}

          {/* Practical Applications */}
          {renderTextGrid(practicalTexts, "Practical Applications",
            "Hands-on guides for meditation, energy work, and consciousness transformation.")}

          {/* External Resources */}
          <section className="py-16">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">
              Extended <span className="gradient-text">Resources</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">HuggingFace Dataset</h3>
                <p className="text-muted-foreground mb-6">
                  Curated collection of Laegna materials formatted for AI and research applications.
                </p>
                <Button asChild>
                  <a href="https://huggingface.co/datasets/tvaeli/LaegnaSpi" 
                     target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Dataset
                  </a>
                </Button>
              </Card>
              
              <Card className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">GitHub Repositories</h3>
                <p className="text-muted-foreground mb-6">
                  Technical implementations and code related to Logecs and consciousness research.
                </p>
                <Button asChild>
                  <a href="https://github.com/tambetvali/" 
                     target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Repositories  
                  </a>
                </Button>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MaterialsLibrary;