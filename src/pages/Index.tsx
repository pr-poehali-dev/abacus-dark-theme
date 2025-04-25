import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MarketplaceSection from "@/components/MarketplaceSection";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-abacus-dark text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <MarketplaceSection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
