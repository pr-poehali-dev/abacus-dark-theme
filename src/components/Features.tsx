import React from "react";
import { 
  Fingerprint, 
  ShieldAlert, 
  Wallet, 
  MessageSquareText, 
  TrendingUp, 
  BarChart4,
  Zap,
  Lock,
  Eye
} from "lucide-react";

const Features = () => {
  return (
    <div className="bg-black py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1F2C]/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text text-transparent">
              Advanced Security Features
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform integrates cutting-edge technologies to ensure maximum privacy, security and reliability for all marketplace participants
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Fingerprint size={32} />}
            title="Zero-Knowledge Authentication"
            description="Authentication system that verifies users without storing or transmitting actual credentials. Your identity remains protected even in case of server compromise."
          />
          
          <FeatureCard 
            icon={<ShieldAlert size={32} />}
            title="Dead Drop System"
            description="Physical transaction completion uses cryptographically secure location sharing only between verified parties, with automatic trace removal."
          />
          
          <FeatureCard 
            icon={<Wallet size={32} />}
            title="Cryptocurrency Tumbler"
            description="Integrated multi-chain mixing service separates transaction history through multiple wallets with varying time delays to ensure financial privacy."
          />
          
          <FeatureCard 
            icon={<MessageSquareText size={32} />}
            title="Encrypted Messaging"
            description="End-to-end encrypted communication with perfect forward secrecy and automatic message destruction. No logs or message history stored on servers."
          />
          
          <FeatureCard 
            icon={<TrendingUp size={32} />}
            title="Reputation System"
            description="Cryptographically verifiable review system prevents selective scamming through mathematical proof of transaction history and review authenticity."
          />
          
          <FeatureCard 
            icon={<BarChart4 size={32} />}
            title="Market Analysis Tools"
            description="Advanced analytics provides real-time market insights, price comparisons, and vendor performance metrics to make informed purchasing decisions."
          />
        </div>

        <div className="mt-16 p-6 border border-[#9b87f5]/10 bg-[#1A1F2C]/50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="text-[#9b87f5] mb-3">
                <Zap size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-mono">Lightning Fast</h4>
              <p className="text-gray-400 text-sm">Transactions process within seconds even through Tor network</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="text-[#9b87f5] mb-3">
                <Lock size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-mono">Bulletproof Security</h4>
              <p className="text-gray-400 text-sm">Multi-layered security approach prevents attacks and data breaches</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="text-[#9b87f5] mb-3">
                <Eye size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-mono">Complete Privacy</h4>
              <p className="text-gray-400 text-sm">Zero logs policy and no personal information requirements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-black border border-[#9b87f5]/10 hover:border-[#9b87f5]/30 rounded-md p-6 transition-all duration-300 hover:translate-y-[-4px]">
      <div className="text-[#9b87f5] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-3 font-mono">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default Features;