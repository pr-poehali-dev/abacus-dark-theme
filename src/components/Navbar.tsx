import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Package, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-abacus-darker/80 backdrop-blur-md border-b border-abacus-accent/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-mono font-bold text-gradient">ABACUS</span>
            <div className="hidden md:flex items-center px-2 py-1 bg-abacus-accent/10 rounded text-xs text-abacus-accent">
              v2.0.1
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-abacus-text hover:text-abacus-accent transition-colors">
              Home
            </Link>
            <Link to="/marketplace" className="text-abacus-text hover:text-abacus-accent transition-colors">
              Marketplace
            </Link>
            <Link to="/vendors" className="text-abacus-text hover:text-abacus-accent transition-colors">
              Vendors
            </Link>
            <Link to="/faq" className="text-abacus-text hover:text-abacus-accent transition-colors">
              FAQ
            </Link>
            <Link to="/support" className="text-abacus-text hover:text-abacus-accent transition-colors">
              Support
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-abacus-text">
              <User size={16} className="mr-1" /> Sign In
            </Button>
            <Button className="bg-abacus-accent hover:bg-abacus-accent2 text-black">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-abacus-text"
            onClick={toggleMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 animate-fade-in">
            <Link to="/" className="block py-2 text-abacus-text hover:text-abacus-accent">
              Home
            </Link>
            <Link to="/marketplace" className="block py-2 text-abacus-text hover:text-abacus-accent">
              Marketplace
            </Link>
            <Link to="/vendors" className="block py-2 text-abacus-text hover:text-abacus-accent">
              Vendors
            </Link>
            <Link to="/faq" className="block py-2 text-abacus-text hover:text-abacus-accent">
              FAQ
            </Link>
            <Link to="/support" className="block py-2 text-abacus-text hover:text-abacus-accent">
              Support
            </Link>
            <div className="pt-3 flex space-x-3">
              <Button variant="ghost" size="sm" className="text-abacus-text">
                <User size={16} className="mr-1" /> Sign In
              </Button>
              <Button className="bg-abacus-accent hover:bg-abacus-accent2 text-black">
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
