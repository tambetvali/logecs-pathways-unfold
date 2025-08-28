import PortalCard from "./PortalCard";
import { Brain, Calculator, Heart, Globe, Lightbulb, TreePine } from "lucide-react";
import { Link } from "react-router-dom";

const PortalsSection = () => {
  const portals = [
    {
      title: "Logecs",
      description: "Discover the revolutionary mathematics and logic that bridge quantitative reasoning with qualitative wisdom, opening new dimensions of understanding.",
      icon: Calculator,
      color: "primary" as const,
      href: "logecs"
    },
    {
      title: "Mind & Body Growth", 
      description: "Essential theorems for personal development, integrating ancient wisdom with modern insights for holistic human flourishing.",
      icon: Brain,
      color: "secondary" as const,
      href: "growth"
    },
    {
      title: "Sacred Sciences",
      description: "Where empirical methodology meets spiritual inquiry, revealing the underlying unity of material and transcendent realms.",
      icon: Lightbulb,
      color: "accent" as const,
      href: "materials"
    },
    {
      title: "Universal Harmony",
      description: "Explore how religions, philosophies, and worldviews converge into a unified understanding of existence and purpose.",
      icon: Globe,
      color: "primary" as const,
      href: "materials"
    },
    {
      title: "Practical Wisdom",
      description: "Applied teachings for daily life, transforming abstract insights into concrete steps toward personal and collective betterment.",
      icon: Heart,
      color: "secondary" as const,
      href: "materials"
    },
    {
      title: "Natural Philosophy",
      description: "Reconnecting with the fundamental patterns and principles that govern both inner consciousness and outer reality.",
      icon: TreePine,
      color: "accent" as const,
      href: "materials"
    }
  ];

  return (
    <section id="portals" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            <span className="gradient-text">Portals of Discovery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each portal opens a unique pathway to understanding, designed to enrich different aspects 
            of human experience and contribute to our collective evolution.
          </p>
        </div>

        {/* Portal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portals.map((portal, index) => (
          <div 
            key={portal.title} 
            className="animate-in fade-in-0 slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Link to={`/${portal.href.replace('/', '')}`}>
              <PortalCard {...portal} />
            </Link>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default PortalsSection;