import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Check, AlertTriangle } from "lucide-react";

const MarketplaceSection = () => {
  const categories = [
    {
      name: "Digital Goods",
      description: "Accounts, software, guides, ebooks",
      listings: 2547,
      verified: true
    },
    {
      name: "Financial Services",
      description: "Cryptocurrency, banking, trading",
      listings: 1283,
      verified: true
    },
    {
      name: "Security & Privacy",
      description: "VPN, secure communication, encryption",
      listings: 976,
      verified: true
    },
    {
      name: "Electronics",
      description: "Devices, components, hardware",
      listings: 1450,
      verified: false
    },
    {
      name: "Premium Services",
      description: "Custom programming, design, consultation",
      listings: 842,
      verified: true
    },
    {
      name: "Educational Content",
      description: "Courses, tutorials, research papers",
      listings: 1203,
      verified: false
    }
  ];

  return (
    <div className="bg-[#1A1F2C] py-20 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002')] bg-center bg-cover opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text text-transparent">
              Browse the Marketplace
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore thousands of listings across various categories, all with our secure escrow protection and vendor verification system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-black border border-[#9b87f5]/10 hover:border-[#9b87f5]/30 rounded-md p-6 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="flex justify-between items-start mb-4">
                <div className="text-[#9b87f5]">
                  <Package size={28} />
                </div>
                {category.verified ? (
                  <div className="bg-emerald-900/30 text-emerald-500 text-xs py-1 px-2 rounded-full flex items-center">
                    <Check size={12} className="mr-1" /> Verified
                  </div>
                ) : (
                  <div className="bg-amber-900/30 text-amber-500 text-xs py-1 px-2 rounded-full flex items-center">
                    <AlertTriangle size={12} className="mr-1" /> Caution
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 font-mono">{category.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{category.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-mono">{category.listings} active listings</span>
                <Button variant="ghost" size="sm" className="text-[#9b87f5] hover:bg-[#9b87f5]/10 p-0 h-auto">
                  Browse <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black/80 backdrop-blur-sm border border-[#9b87f5]/20 rounded-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">Become a Verified Vendor</h3>
              <p className="text-gray-400 mb-6">
                Join our network of trusted sellers and gain access to our growing customer base. 
                Our vendor program includes premium placement, reduced fees, and priority support.
              </p>
              <ul className="space-y-3 text-gray-400 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="text-[#9b87f5] mr-2 mt-1 flex-shrink-0" />
                  <span>Access to 100,000+ monthly active users</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#9b87f5] mr-2 mt-1 flex-shrink-0" />
                  <span>Advanced analytics and sales optimization tools</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#9b87f5] mr-2 mt-1 flex-shrink-0" />
                  <span>Competitive commission rates starting at just 3%</span>
                </li>
              </ul>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-black font-mono">
                Apply for Vendor Status
              </Button>
            </div>
            <div className="bg-[#1A1F2C] border border-[#9b87f5]/10 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-4 font-mono">Marketplace Statistics</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Active Vendors</span>
                    <span className="text-white">738</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-[#9b87f5] h-2 rounded-full" style={{ width: "73.8%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Total Listings</span>
                    <span className="text-white">12,847</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-[#9b87f5] h-2 rounded-full" style={{ width: "85.6%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Successful Transactions</span>
                    <span className="text-white">156,392</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-[#9b87f5] h-2 rounded-full" style={{ width: "92.4%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Dispute Ratio</span>
                    <span className="text-white">0.47%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-[#9b87f5] h-2 rounded-full" style={{ width: "0.47%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceSection;