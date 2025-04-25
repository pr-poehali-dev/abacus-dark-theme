import React from "react";
import { Link } from "react-router-dom";
import { Shield, MessageSquare, LifeBuoy, ExternalLink, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-abacus-darker pt-16 pb-8 border-t border-abacus-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-mono font-bold text-gradient">ABACUS</span>
              <div className="flex items-center px-2 py-1 bg-abacus-accent/10 rounded text-xs text-abacus-accent">
                v2.0.1
              </div>
            </div>
            <p className="text-abacus-text mb-6">
              The most secure and anonymous marketplace platform on the darknet, built with advanced security and privacy technologies.
            </p>
            <div className="flex space-x-2">
              <Link to="/pgp" className="bg-abacus-darker border border-abacus-accent/20 rounded p-2 text-abacus-accent hover:bg-abacus-accent/10 transition-colors">
                PGP Key
              </Link>
              <Link to="/verify" className="bg-abacus-darker border border-abacus-accent/20 rounded p-2 text-abacus-accent hover:bg-abacus-accent/10 transition-colors">
                Verify
              </Link>
              <Link to="/onion-links" className="bg-abacus-darker border border-abacus-accent/20 rounded p-2 text-abacus-accent hover:bg-abacus-accent/10 transition-colors">
                Mirror Links
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink to="/marketplace">Marketplace</FooterLink>
              <FooterLink to="/vendors">Vendors</FooterLink>
              <FooterLink to="/escrow">Escrow Service</FooterLink>
              <FooterLink to="/security">Security Features</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/support">Support</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal & Security</h4>
            <ul className="space-y-2">
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/security-policy">Security Policy</FooterLink>
              <FooterLink to="/pgp-guide">PGP Guide</FooterLink>
              <FooterLink to="/2fa">2FA Setup</FooterLink>
              <FooterLink to="/vendor-terms">Vendor Terms</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <FooterLink to="/help">Help Center</FooterLink>
              <FooterLink to="/tickets">Support Tickets</FooterLink>
              <FooterLink to="/disputes">Dispute Resolution</FooterLink>
              <FooterLink to="/bug-bounty">Bug Bounty Program</FooterLink>
              <FooterLink to="/status">Service Status</FooterLink>
            </ul>
            
            <div className="mt-6 p-4 bg-abacus-dark border border-abacus-accent/10 rounded-lg">
              <div className="flex items-center mb-2">
                <Shield size={18} className="text-abacus-accent mr-2" />
                <span className="text-white font-bold">Verified Platform</span>
              </div>
              <p className="text-xs text-abacus-text mb-3">
                Always verify our onion address and PGP signature to avoid phishing.
              </p>
              <button className="w-full py-2 px-3 bg-abacus-accent/10 hover:bg-abacus-accent/20 text-abacus-accent text-sm rounded flex justify-between items-center transition-colors">
                Verify Authenticity <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-abacus-accent/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-abacus-text mb-4 md:mb-0">
              © 2025 ABACUS Marketplace. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/pgp" className="text-abacus-text hover:text-abacus-accent text-sm flex items-center">
                <Shield size={14} className="mr-1" /> PGP: A12C F3E4...
              </Link>
              <Link to="/support" className="text-abacus-text hover:text-abacus-accent text-sm flex items-center">
                <MessageSquare size={14} className="mr-1" /> Contact
              </Link>
              <Link to="/help" className="text-abacus-text hover:text-abacus-accent text-sm flex items-center">
                <LifeBuoy size={14} className="mr-1" /> Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  return (
    <li>
      <Link to={to} className="text-abacus-text hover:text-abacus-accent transition-colors flex items-center">
        <ChevronRight size={14} className="mr-1 text-abacus-accent/50" />
        {children}
      </Link>
    </li>
  );
};

export default Footer;
