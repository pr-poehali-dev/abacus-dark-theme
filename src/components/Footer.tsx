import React from "react";
import { Link } from "react-router-dom";
import { Shield, ExternalLink, AlertTriangle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#9b87f5]/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield size={24} className="text-[#9b87f5]" />
              <span className="text-xl font-mono font-bold text-white">ABACUS</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Secure, anonymous marketplace platform with advanced encryption and escrow systems.
            </p>
            <div className="bg-[#1A1F2C] border border-[#9b87f5]/20 rounded p-3 flex items-start">
              <AlertTriangle size={16} className="text-[#9b87f5] mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-300">
                Always verify marketplace URLs. Current onion address:<br/>
                <span className="font-mono text-[#9b87f5] break-all">abacus27ddxezmb2zr7kqmgstb75uxh5qsm3grpucsqmwhnnwf74xid.onion</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 font-mono">Marketplace</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Browse Categories
                </Link>
              </li>
              <li>
                <Link to="/vendors" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Verified Vendors
                </Link>
              </li>
              <li>
                <Link to="/escrow" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Escrow System
                </Link>
              </li>
              <li>
                <Link to="/disputes" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Dispute Resolution
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Review System
                </Link>
              </li>
              <li>
                <Link to="/vendor-application" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Become a Vendor
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 font-mono">Security</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pgp" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  PGP Key Verification
                </Link>
              </li>
              <li>
                <Link to="/security-guide" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Security Guidelines
                </Link>
              </li>
              <li>
                <Link to="/2fa" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Two-Factor Authentication
                </Link>
              </li>
              <li>
                <Link to="/canary" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Warrant Canary
                </Link>
              </li>
              <li>
                <Link to="/bug-bounty" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Bug Bounty Program
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5] text-sm flex items-center">
                  Security Audit Report <ExternalLink size={12} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 font-mono">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Support Ticket
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  User Guides
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Platform Rules
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#9b87f5] text-sm">
                  Contact Administration
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#9b87f5]/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-500 text-xs">
              ABACUS Market © {new Date().getFullYear()} | Last Security Update: April 25, 2025
            </p>
          </div>
          <div className="flex flex-wrap justify-center space-x-6">
            <span className="text-xs text-gray-500 flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span> System: Online
            </span>
            <span className="text-xs text-gray-500 flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span> Escrow: Active
            </span>
            <span className="text-xs text-gray-500 flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span> Support: Available
            </span>
            <span className="text-xs text-gray-500 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-500 mr-1"></span> Server Load: Moderate
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;