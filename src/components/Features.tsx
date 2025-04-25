import React from "react";
import { Shield, Users, Award, Server, UserCheck, Lock, Eye, MessageSquareX } from "lucide-react";

const Features = () => {
  return (
    <div className="bg-abacus-darker py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Why <span className="text-gradient">ABACUS</span> Leads Among Darknet Platforms</h2>
          <p className="text-abacus-text text-lg">
            Our platform combines cutting-edge security technology with ease of use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Lock />}
            title="Multi-layer Authentication"
            description="2FA with PGP, biometrics, and other modern identity verification methods for maximum protection."
          />
          
          <FeatureCard 
            icon={<Shield />}
            title="Advanced Encryption"
            description="All communications are protected by military-grade encryption. Not a single byte of information is accessible to outsiders."
          />
          
          <FeatureCard 
            icon={<MessageSquareX />}
            title="Self-destructing Messages"
            description="Automatic deletion of all correspondence after reading or upon expiration of time."
          />
          
          <FeatureCard 
            icon={<Eye />}
            title="No Logs Policy"
            description="We do not store your activity history, IP addresses, data, or transaction history after operations are completed."
          />
          
          <FeatureCard 
            icon={<Users />}
            title="Fraud Protection"
            description="Multi-stage verification of vendors and reviews, transaction confirmation, and reputation system."
          />
          
          <FeatureCard 
            icon={<Award />}
            title="Transparent Rating System"
            description="Verified review mechanisms with protection against manipulation and verification of purchase authenticity."
          />
          
          <FeatureCard 
            icon={<Server />}
            title="Distributed Infrastructure"
            description="Servers located in different jurisdictions to ensure uninterrupted operation and protection against blockages."
          />
          
          <FeatureCard 
            icon={<UserCheck />}
            title="Advanced Verification System"
            description="Vendor verification through test purchases and a multi-step confirmation system."
          />
          
          <FeatureCard 
            icon={<Shield />}
            title="Anti-phishing Protection"
            description="Personal authenticity code to protect against fake versions of the site and cloning attempts."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-abacus-dark border border-abacus-accent/10 rounded-lg p-6 card-hover">
      <div className="bg-abacus-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <div className="text-abacus-accent">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-abacus-text">{description}</p>
    </div>
  );
};

export default Features;
