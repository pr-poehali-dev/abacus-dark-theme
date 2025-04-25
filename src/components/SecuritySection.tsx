import React from "react";
import { 
  Shield, 
  LockKeyhole, 
  Ban, 
  AlertTriangle,
  ServerCrash,
  FileWarning,
  Info 
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SecuritySection = () => {
  return (
    <div className="bg-black py-20 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')] bg-center bg-cover opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C]/50 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text text-transparent">
              Security Protocol
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our multi-layered security approach ensures maximum protection and anonymity for all marketplace participants
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="mb-10 bg-black border border-[#9b87f5]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center font-mono">
                <Shield className="text-[#9b87f5] mr-2" size={24} />
                Threat Protection Systems
              </h3>
              
              <div className="space-y-6">
                <ThreatDefenseItem 
                  icon={<LockKeyhole size={20} />}
                  title="Intrusion Detection"
                  status="Active"
                  statusColor="emerald"
                  description="Real-time monitoring and blocking of unauthorized access attempts and suspicious activities"
                />
                
                <ThreatDefenseItem 
                  icon={<Ban size={20} />}
                  title="DDOS Protection"
                  status="Active"
                  statusColor="emerald"
                  description="Advanced traffic filtering with distributed network architecture to mitigate attack vectors"
                />
                
                <ThreatDefenseItem 
                  icon={<AlertTriangle size={20} />}
                  title="Honeypot Detection"
                  status="Enhanced"
                  statusColor="amber"
                  description="Automated scanning for law enforcement honeypots and fraudulent marketplace mirrors"
                />
                
                <ThreatDefenseItem 
                  icon={<ServerCrash size={20} />}
                  title="Failsafe System"
                  status="Standby"
                  statusColor="blue"
                  description="Contingency protocols for immediate marketplace backup and relocation if compromised"
                />
                
                <ThreatDefenseItem 
                  icon={<FileWarning size={20} />}
                  title="Malware Scanning"
                  status="Active"
                  statusColor="emerald"
                  description="All uploaded files undergo thorough scanning for malicious code and tracking elements"
                />
              </div>
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <Accordion type="single" collapsible className="bg-black border border-[#9b87f5]/20 rounded-lg">
                <AccordionItem value="item-1" className="border-b border-[#9b87f5]/10">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-[#9b87f5] font-mono">
                    PGP Encryption Requirements
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">
                    <p className="mb-3">
                      All vendors and buyers must use PGP encryption for sensitive communications. Our system will not process messages 
                      containing addresses or personal details unless properly encrypted.
                    </p>
                    <div className="bg-[#1A1F2C] p-3 rounded font-mono text-xs text-gray-300 mb-2 overflow-x-auto">
                      <pre>-----BEGIN PGP PUBLIC KEY BLOCK-----<br/>
mQINBGUe2ZoBEAC9QSf4t6aHkC3+..<br/>
...<br/>
=ABCD<br/>
-----END PGP PUBLIC KEY BLOCK-----</pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b border-[#9b87f5]/10">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-[#9b87f5] font-mono">
                    Multi-Signature Transactions
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">
                    <p className="mb-3">
                      Our escrow system uses 2-of-3 multi-signature transactions requiring authorization from multiple parties before funds release.
                      This prevents marketplace exit scams and protects both buyers and sellers.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Buyer signature (1)</li>
                      <li>Seller signature (1)</li>
                      <li>Market escrow signature (1)</li>
                      <li>Required for release: 2 signatures</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b border-[#9b87f5]/10">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-[#9b87f5] font-mono">
                    Anonymous Communication Channels
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">
                    <p className="mb-3">
                      All platform communications utilize double-layered encryption with perfect forward secrecy.
                      Messages are encrypted both in transit and at rest with automatic purging after set timeframes.
                    </p>
                    <p>
                      The system uses ephemeral keys for each session with no persistent identifiers linking conversations
                      to specific marketplace accounts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-b border-[#9b87f5]/10">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-[#9b87f5] font-mono">
                    Cryptocurrency Security Measures
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">
                    <p className="mb-3">
                      All cryptocurrency transactions undergo automatic coin mixing and tumbling through multiple wallets
                      with varying time delays to prevent blockchain analysis and transaction tracing.
                    </p>
                    <div className="flex items-center mt-4 bg-[#1A1F2C] p-3 rounded">
                      <Info size={16} className="text-[#9b87f5] mr-2 flex-shrink-0" />
                      <span className="text-xs text-gray-300">For maximum security, we recommend using Monero (XMR) for all marketplace transactions</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-[#9b87f5] font-mono">
                    Canary System & Transparency Reports
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">
                    <p className="mb-3">
                      Our warrant canary is updated every 24 hours with cryptographically signed messages containing 
                      recent news headlines, confirming the marketplace has not been compromised or subject to legal action.
                    </p>
                    <div className="bg-[#1A1F2C] p-3 rounded font-mono text-xs text-gray-300 mb-3 overflow-x-auto">
                      <pre>Date: 2025-04-24<br/>
No searches, seizures or legal actions have been<br/>
taken against ABACUS Market infrastructure.<br/>
Hash: a4e92f6b7d18c3f948b0...</pre>
                    </div>
                    <p>
                      All transparency reports are PGP signed and can be verified against our public key.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-[#1A1F2C] border border-[#9b87f5]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-5 font-mono">Security Recommendations</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#9b87f5]/20 rounded-full p-1 mr-3 mt-0.5">
                    <Shield size={16} className="text-[#9b87f5]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Use Tails OS or Whonix</h4>
                    <p className="text-gray-400 text-sm">Privacy-focused operating systems that route all traffic through Tor and leave no traces</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#9b87f5]/20 rounded-full p-1 mr-3 mt-0.5">
                    <Shield size={16} className="text-[#9b87f5]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Enable 2FA Authentication</h4>
                    <p className="text-gray-400 text-sm">Additional security layer requiring PGP verification for account access</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#9b87f5]/20 rounded-full p-1 mr-3 mt-0.5">
                    <Shield size={16} className="text-[#9b87f5]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Use Monero for Payments</h4>
                    <p className="text-gray-400 text-sm">Offers superior privacy protections compared to Bitcoin through ring signatures and stealth addresses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#9b87f5]/20 rounded-full p-1 mr-3 mt-0.5">
                    <Shield size={16} className="text-[#9b87f5]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Verify PGP Signatures</h4>
                    <p className="text-gray-400 text-sm">Always verify marketplace URLs and vendor messages with published PGP keys</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThreatDefenseItem = ({ 
  icon, 
  title, 
  status, 
  statusColor, 
  description 
}: { 
  icon: React.ReactNode, 
  title: string, 
  status: string, 
  statusColor: string, 
  description: string 
}) => {
  const getStatusColor = (color: string) => {
    switch (color) {
      case 'emerald': return 'bg-emerald-900/30 text-emerald-500';
      case 'amber': return 'bg-amber-900/30 text-amber-500';
      case 'blue': return 'bg-blue-900/30 text-blue-500';
      default: return 'bg-gray-900/30 text-gray-500';
    }
  };

  return (
    <div className="flex items-start">
      <div className="bg-[#9b87f5]/20 rounded-full p-2 mr-4 mt-1">
        <div className="text-[#9b87f5]">{icon}</div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-white font-medium">{title}</h4>
          <span className={`text-xs py-1 px-2 rounded-full ${getStatusColor(statusColor)}`}>
            {status}
          </span>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SecuritySection;