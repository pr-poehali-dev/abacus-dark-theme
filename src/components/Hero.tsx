import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Lock, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-abacus-dark">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 bg-grid-pattern bg-grid-8 opacity-20"
        style={{ backgroundPosition: "center" }}
      />
      
      <div className="container px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-abacus-accent/20 text-abacus-accent text-sm font-mono animate-pulse-slow">
            <Lock size={14} className="inline mr-1.5" /> Security • Anonymity • Reliability
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gradient glow-effect">ABACUS</span>
            <span className="block mt-2 text-white">Modern Darknet Marketplace</span>
          </h1>
          
          <p className="text-lg md:text-xl text-abacus-text mb-8 leading-relaxed">
            A secure and anonymous trading platform with advanced encryption systems,
            tracking protection, and multi-level vendor verification
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-abacus-accent hover:bg-abacus-accent2 text-black text-base px-6 py-6 h-auto">
              Start Trading <ChevronRight size={18} />
            </Button>
            <Button variant="outline" className="border-abacus-accent/30 hover:bg-abacus-accent/10 text-abacus-text text-base px-6 py-6 h-auto">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-abacus-darker/50 backdrop-blur-sm border border-abacus-accent/10 rounded-lg p-4">
              <div className="bg-abacus-accent/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Shield size={20} className="text-abacus-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Complete Anonymity</h3>
              <p className="text-abacus-text text-sm">Multi-layered data protection system and encrypted transactions without traces.</p>
            </div>
            
            <div className="bg-abacus-darker/50 backdrop-blur-sm border border-abacus-accent/10 rounded-lg p-4">
              <div className="bg-abacus-accent/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Lock size={20} className="text-abacus-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Escrow Service</h3>
              <p className="text-abacus-text text-sm">Transaction protection with guaranteed fund escrow until goods are received.</p>
            </div>
            
            <div className="bg-abacus-darker/50 backdrop-blur-sm border border-abacus-accent/10 rounded-lg p-4">
              <div className="bg-abacus-accent/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <Zap size={20} className="text-abacus-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Instant Transactions</h3>
              <p className="text-abacus-text text-sm">Fast and secure transfers with support for Bitcoin, Monero, and other cryptocurrencies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
