import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero"; 
import PortalsSection from "@/components/PortalsSection";
import MaterialsSection from "@/components/MaterialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page metadata for SEO
    document.title = "Laegna - Bridging Mathematics, Logic, and Wisdom";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Discover Laegna: revolutionary mathematics (Logecs), mind-body growth theory, and essential theorems uniting religions, sciences, and spiritualities for human flourishing."
      );
    }
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Portals Section */}
      <PortalsSection />
      
      {/* Materials Section */}
      <MaterialsSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;