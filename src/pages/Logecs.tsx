import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, BookOpen, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Logecs = () => {
  useEffect(() => {
    document.title = "Logecs - New Mathematics and Logic | Laegna";
  }, []);

  const principles = [
    {
      title: "Truth Value Tables",
      description: "Revolutionary approach to logic that incorporates material and spiritual dimensions, moving beyond binary true/false to include degrees of manifestation and consciousness."
    },
    {
      title: "E Factor Analysis", 
      description: "Mathematical framework examining the effects of positive affirmations and thought patterns on material reality, bridging psychology and physics."
    },
    {
      title: "Infinity Mathematics",
      description: "New mathematical concepts dealing with infinities in material, spiritual and mental worlds, providing tools for consciousness studies."
    },
    {
      title: "Frequential Analysis",
      description: "Mathematical approach to understanding chakra systems, energy frequencies, and their relationship to Buddhist philosophy."
    }
  ];

  const applications = [
    {
      area: "Consciousness Studies",
      description: "Quantifying subjective experience and mapping states of awareness"
    },
    {
      area: "Material Magic",
      description: "Mathematical foundations for understanding mind-matter interactions"
    },
    {
      area: "Spiritual Evolution", 
      description: "Modeling karmic patterns and consciousness development over time"
    },
    {
      area: "Unified Field Theory",
      description: "Bridging quantum physics with consciousness research"
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
            
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Calculator className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
              <span className="gradient-text">Logecs</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Revolutionary mathematics and logic that transcends traditional binary thinking, 
              incorporating consciousness, materiality, and spirituality into unified mathematical frameworks.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">
              Core <span className="gradient-text">Principles</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <Card key={principle.title} className="p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Concepts */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">
              Key <span className="gradient-text">Insights</span>
            </h2>
            
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-4">Beyond Binary Logic</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Traditional logic operates on binary true/false states, but consciousness and reality exhibit 
                  continuous gradients. Logecs introduces mathematical frameworks that can handle:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Degrees of truth and manifestation</li>
                  <li>Paradoxical states that are simultaneously true and false</li>
                  <li>Temporal logic that accounts for consciousness evolution</li>
                  <li>Multi-dimensional truth values incorporating material and spiritual aspects</li>
                </ul>
              </Card>
              
              <Card className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-4">Mathematical Spirituality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Logecs provides mathematical tools for understanding spiritual phenomena, including karma as 
                  mathematical sequences, reincarnation as consciousness state transitions, and enlightenment 
                  as asymptotic approaches to infinite awareness states.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">
              Practical <span className="gradient-text">Applications</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <Card key={app.area} className="p-6 border-l-4 border-l-primary/30">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{app.area}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{app.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Original Materials */}
        <section className="py-16 px-6 bg-card/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">
              Original <span className="gradient-text">Materials</span>
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Truth Value Tables, Matter and Mind</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Foundational text exploring the big concepts in Logics and Alchemistry, 
                      examining the relationship between logical systems and consciousness.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://spireason.neocities.org/Truth%20Value%20Tables,%20Matter%20and%20Mind.pdf" 
                         target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-1">
                        Read Original PDF <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Logecs and E Factor</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Analysis of positive affirmations through mathematical lens, exploring why 
                      traditional positive thinking approaches often fail and how to transcend them.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://spireason.neocities.org/Logecs%20and%20E%20factor%20%E2%80%93%20what%20is%20bad%20in%20positive%20affirmations.pdf" 
                         target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-1">
                        Read Original PDF <ExternalLink className="w-3 h-3" />
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

export default Logecs;