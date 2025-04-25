import React from "react";
import { Button } from "@/components/ui/button";
import { Lock, ShieldAlert, Eye, FileCheck, Key, Fingerprint } from "lucide-react";

const SecuritySection = () => {
  return (
    <div className="bg-abacus-dark py-24 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.6) 0%, transparent 50%)`,
          filter: "blur(60px)"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Security at <span className="text-gradient">Military-Grade</span> Standards
            </h2>
            <p className="text-abacus-text text-lg">
              We use a multi-layered security architecture to protect your data and transactions
            </p>
          </div>
          
          <div className="bg-abacus-darker p-6 md:p-8 rounded-lg border border-abacus-accent/10 mb-10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-abacus-accent/10 rounded-full p-3 shrink-0">
                <ShieldAlert size={24} className="text-abacus-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Protection Against Hacker Attacks</h3>
                <p className="text-abacus-text mb-4">
                  Our infrastructure is protected against all known attack vectors, including DDoS, brute force,
                  SQL injections, and XSS. We regularly conduct pentests with world-class specialists.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center text-sm text-abacus-text">
                    <div className="w-2 h-2 bg-abacus-accent rounded-full mr-2"></div>
                    DDoS Attack Protection
                  </div>
                  <div className="flex items-center text-sm text-abacus-text">
                    <div className="w-2 h-2 bg-abacus-accent rounded-full mr-2"></div>
                    Web Application Firewall
                  </div>
                  <div className="flex items-center text-sm text-abacus-text">
                    <div className="w-2 h-2 bg-abacus-accent rounded-full mr-2"></div>
                    Intrusion Detection Systems
                  </div>
                  <div className="flex items-center text-sm text-abacus-text">
                    <div className="w-2 h-2 bg-abacus-accent rounded-full mr-2"></div>
                    Continuous Security Monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <SecurityFeatureCard 
            icon={<Lock />}
            title="End-to-End Encryption"
            description="All communications are protected by AES-256 and RSA-4096 level encryption, inaccessible even to platform administrators."
          />
          
          <SecurityFeatureCard 
            icon={<Key />}
            title="Multi-signature Transactions"
            description="All transactions require multiple confirmations to ensure security and reduce the risk of fraud."
          />
          
          <SecurityFeatureCard 
            icon={<Eye />}
            title="No Activity Traces"
            description="We don't store logs, action history, or information that could compromise users."
          />
          
          <SecurityFeatureCard 
            icon={<Fingerprint />}
            title="Biometric Authentication"
            description="Optional additional protection using biometric data without storing it on servers."
          />
          
          <SecurityFeatureCard 
            icon={<FileCheck />}
            title="Blockchain Smart Contracts"
            description="All financial operations are secured by the reliability and transparency of blockchain technologies."
          />
          
          <SecurityFeatureCard 
            icon={<ShieldAlert />}
            title="Anomaly Detection"
            description="The system automatically identifies suspicious activity and blocks potential security threats."
          />
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-6 bg-gradient-to-r from-abacus-accent/20 to-abacus-accent2/20 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Our Approach to Security</h3>
            <p className="text-abacus-text">
              We view security not as a separate component, but as the foundation of our entire architecture.
              Every decision, from user interface to backend infrastructure,
              is made with the highest standards of security and confidentiality in mind.
            </p>
          </div>
          
          <Button className="bg-abacus-accent hover:bg-abacus-accent2 text-black">
            More About Our Security System
          </Button>
        </div>
      </div>
    </div>
  );
};

const SecurityFeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-abacus-darker p-5 rounded-lg border border-abacus-accent/10 card-hover">
      <div className="bg-abacus-accent/10 rounded-full w-10 h-10 flex items-center justify-center mb-4">
        <div className="text-abacus-accent">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-abacus-text text-sm">{description}</p>
    </div>
  );
};

export default SecuritySection;
