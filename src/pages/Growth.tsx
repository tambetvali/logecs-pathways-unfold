import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, ExternalLink, ArrowLeft, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Growth = () => {
  useEffect(() => {
    document.title = "Mind & Body Growth Theory | Laegna";
  }, []);

  const theorems = [
    {
      title: "The Material-Heavenly Rhythm",
      description: "We rhythmically cycle between Material (Negative/Yin) and Heavenly (Positive/Yang) states. Understanding this natural oscillation prevents spiritual bypassing and enables genuine growth.",
      application: "Embrace both light and shadow phases as necessary for evolution"
    },
    {
      title: "The Imperfection Principle", 
      description: "Growth requires killing current ideas and ideals. Attachment to being 'perfect' prevents transformation and creates defensive reactions to new truths.",
      application: "Cultivate comfort with uncertainty and continuous learning"
    },
    {
      title: "Personal Truth vs Universal Dogma",
      description: "Truth is personal yet not merely opinion. We must be certain about our tested truths while remaining open to others' equally valid but different truths.",
      application: "Hold beliefs firmly yet flexibly, without imposing them universally"
    },
    {
      title: "Negative Thinking Power",
      description: "Conscious engagement with 'negative' thoughts and emotions provides crucial information for growth, unlike toxic positivity that suppresses natural cycles.",
      application: "Use contemplative practices to extract wisdom from difficult experiences"
    }
  ];

  const practices = [
    {
      name: "Material Meditation",
      description: "Grounding practices that integrate spiritual insights with physical reality",
      techniques: ["Root chakra focus", "Earth element work", "Physical sensation awareness"]
    },
    {
      name: "Karmic Pattern Recognition",
      description: "Identifying and transforming repetitive life patterns through conscious awareness",
      techniques: ["Life pattern analysis", "Ancestral healing", "Conscious choice-making"]
    },
    {
      name: "Yin-Yang Balancing",
      description: "Harmonizing opposing forces within consciousness and daily life",
      techniques: ["Complementary breathing", "Shadow integration", "Dynamic equilibrium"]
    },
    {
      name: "Material Alchemy",
      description: "Transforming base consciousness into enlightened awareness through earthly experience",
      techniques: ["Conscious suffering", "Sacred mundane", "Embodied wisdom"]
    }
  ];

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
            
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
              <Brain className="w-10 h-10 text-secondary" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
              Mind & Body <span className="gradient-text">Growth</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Essential theorems for holistic human development, integrating ancient wisdom with modern insights 
              for authentic transformation that honors both material and spiritual dimensions.
            </p>
          </div>
        </section>

        {/* Core Theorems */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">
              Essential <span className="gradient-text">Theorems</span>
            </h2>
            
            <div className="space-y-8">
              {theorems.map((theorem, index) => (
                <Card key={theorem.title} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                        {theorem.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {theorem.description}
                      </p>
                      <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                        <p className="text-sm font-medium text-accent-foreground">
                          Application: {theorem.application}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Practices */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">
              Transformative <span className="gradient-text">Practices</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practices.map((practice, index) => (
                <Card key={practice.name} className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-secondary" />
                    <h3 className="text-lg font-semibold text-foreground">{practice.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {practice.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Techniques:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {practice.techniques.map((technique, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-secondary rounded-full" />
                          {technique}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">
              Foundational <span className="gradient-text">Insights</span>
            </h2>
            
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-4">The Dark Night of the Soul</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Periods of spiritual darkness are not failures but necessary phases in consciousness evolution. 
                  The "Dark Night" represents the material, negative aspect of existence that must be integrated 
                  rather than transcended. This synthesis of light and shadow creates authentic spiritual maturity.
                </p>
              </Card>
              
              <Card className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-4">Beyond Toxic Positivity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Genuine growth requires embracing the full spectrum of human experience. Forcing positivity 
                  creates stagnation and defensiveness. True wisdom emerges from the conscious integration 
                  of both positive and negative experiences into a unified understanding.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Original Materials */}
        <section className="py-16 px-6 bg-card/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">
              Source <span className="gradient-text">Materials</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">The Power of Negative Thinking</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Exploring how conscious engagement with negative thoughts serves growth and wisdom.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://spireason.neocities.org/The%20Power%20of%20Negative%20Thinking.pdf" 
                         target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-1">
                        Read PDF <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Karma and Material Meditation</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Practical approaches to understanding karmic patterns through embodied awareness.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://spireason.neocities.org/Karma%20and%20Material%20Meditation.pdf" 
                         target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-1">
                        Read PDF <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Material Alchemy and Root Chakra</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Buddhist theorems applied to grounding practice and material transformation.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://spireason.neocities.org/Material%20Alchemy%20and%20Root%20Chakra.pdf" 
                         target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-1">
                        Read PDF <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Yin and Yang in Meditation</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Balancing complementary forces within consciousness and practice.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://spireason.neocities.org/Yin%20and%20Yang%20in%20Meditation.pdf" 
                         target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-1">
                        Read PDF <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Growth;