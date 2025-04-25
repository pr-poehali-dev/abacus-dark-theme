import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MarketplaceSection from "@/components/MarketplaceSection";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-abacus-dark text-white">
      <Navbar />
      <Hero />
      <Features />
      <MarketplaceSection />
      <SecuritySection />
      <Footer />
    </div>
  );
};

export default Index;
