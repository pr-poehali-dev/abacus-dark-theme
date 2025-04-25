import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Shield, Star, AlertCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029')] bg-center bg-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      <div className="container px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[#9b87f5]/30 text-[#9b87f5] text-sm font-mono">
            <Shield size={14} className="inline mr-1.5" /> SECURED BY DUAL ENCRYPTION
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6">
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text text-transparent">
              ABACUS MARKET
            </span>
            <span className="block mt-2 text-white">The Next Generation Darknet Exchange</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 font-mono leading-relaxed max-w-3xl mx-auto">
            A secure, anonymous and encrypted marketplace with multi-sig escrow system, 
            hardware backed authentication, and advanced PGP communication channels.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-black text-base px-6 py-6 h-auto font-mono">
              Browse Marketplace <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="outline" className="border-[#9b87f5]/30 hover:bg-[#9b87f5]/10 text-gray-300 text-base px-6 py-6 h-auto font-mono">
              Vendor Application
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/80 backdrop-blur-sm border border-[#9b87f5]/10 hover:border-[#9b87f5]/30 rounded-md p-6 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="text-[#9b87f5] mb-4">
                <Lock size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-mono">Military-Grade Encryption</h3>
              <p className="text-gray-400 text-sm">Advanced AES-256 encryption protocol secures all communications and transactions from interception.</p>
            </div>
            
            <div className="bg-black/80 backdrop-blur-sm border border-[#9b87f5]/10 hover:border-[#9b87f5]/30 rounded-md p-6 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="text-[#9b87f5] mb-4">
                <Shield size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-mono">Multi-Signature Escrow</h3>
              <p className="text-gray-400 text-sm">Revolutionary 2-of-3 multi-signature security system ensures funds stay protected until delivery confirmation.</p>
            </div>
            
            <div className="bg-black/80 backdrop-blur-sm border border-[#9b87f5]/10 hover:border-[#9b87f5]/30 rounded-md p-6 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="text-[#9b87f5] mb-4">
                <Star size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-mono">Verified Vendors</h3>
              <p className="text-gray-400 text-sm">All vendors undergo thorough verification process with manual review and performance monitoring.</p>
            </div>
          </div>

          <div className="mt-10 py-3 px-4 bg-[#1A1F2C] border border-[#9b87f5]/10 rounded-md inline-flex items-center">
            <AlertCircle size={16} className="text-[#9b87f5] mr-2" />
            <span className="text-sm text-gray-300">Verify marketplace URL: <span className="text-[#9b87f5] font-mono">abacus27ddxezmb2zr7kqmgstb75uxh5qsm3grpucsqmwhnnwf74xid.onion</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;