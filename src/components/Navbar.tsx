import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Menu, X, Shield } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#9b87f5]/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield size={24} className="text-[#9b87f5]" />
            <span className="text-2xl font-mono font-bold text-white">ABACUS MARKET</span>
            <div className="hidden md:flex items-center px-2 py-1 bg-[#9b87f5]/10 rounded text-xs text-[#9b87f5]">
              v2.5.1
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-[#9b87f5] transition-colors font-mono">
              Home
            </Link>
            <Link to="/marketplace" className="text-gray-300 hover:text-[#9b87f5] transition-colors font-mono">
              Marketplace
            </Link>
            <Link to="/vendors" className="text-gray-300 hover:text-[#9b87f5] transition-colors font-mono">
              Vendors
            </Link>
            <Link to="/faq" className="text-gray-300 hover:text-[#9b87f5] transition-colors font-mono">
              FAQ
            </Link>
            <Link to="/support" className="text-gray-300 hover:text-[#9b87f5] transition-colors font-mono">
              Support
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-[#9b87f5]/20 font-mono">
              <User size={16} className="mr-1" /> Sign In
            </Button>
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-black font-mono">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={toggleMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 animate-fade-in">
            <Link to="/" className="block py-2 text-gray-300 hover:text-[#9b87f5] font-mono">
              Home
            </Link>
            <Link to="/marketplace" className="block py-2 text-gray-300 hover:text-[#9b87f5] font-mono">
              Marketplace
            </Link>
            <Link to="/vendors" className="block py-2 text-gray-300 hover:text-[#9b87f5] font-mono">
              Vendors
            </Link>
            <Link to="/faq" className="block py-2 text-gray-300 hover:text-[#9b87f5] font-mono">
              FAQ
            </Link>
            <Link to="/support" className="block py-2 text-gray-300 hover:text-[#9b87f5] font-mono">
              Support
            </Link>
            <div className="pt-3 flex space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-[#9b87f5]/20 font-mono">
                <User size={16} className="mr-1" /> Sign In
              </Button>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-black font-mono">
                Register
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;