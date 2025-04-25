import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, ShieldCheck, Clock } from "lucide-react";

const MarketplaceSection = () => {
  return (
    <div className="bg-abacus-dark py-20 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-abacus-darker to-abacus-dark opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Extensive <span className="text-gradient">Product Catalog</span></h2>
          <p className="text-abacus-text text-lg">
            Our platform features thousands of offerings from verified vendors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Category cards */}
          <CategoryCard
            name="Digital Goods"
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500"
            listings={1240}
            rating={4.9}
          />
          
          <CategoryCard
            name="Educational Materials"
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500"
            listings={876}
            rating={4.7}
          />
          
          <CategoryCard
            name="IT Services"
            image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=500"
            listings={625}
            rating={4.8}
          />
          
          <CategoryCard
            name="Private Access"
            image="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=500"
            listings={412}
            rating={4.6}
          />
          
          <CategoryCard
            name="Information Security"
            image="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=500"
            listings={320}
            rating={4.9}
          />
          
          <CategoryCard
            name="Consulting"
            image="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=500"
            listings={290}
            rating={4.5}
          />
        </div>

        <div className="text-center">
          <Button className="bg-abacus-accent hover:bg-abacus-accent2 text-black">
            View All Categories <ChevronRight size={16} />
          </Button>
        </div>
        
        <div className="border-t border-abacus-accent/10 mt-20 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Vendors Choose <span className="text-gradient">ABACUS</span></h3>
              <p className="text-abacus-text mb-6">
                Our platform provides vendors with a secure and reliable environment for conducting business,
                with protection against fraud and guaranteed confidentiality.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-abacus-accent/20 rounded-full p-1 mr-3 mt-0.5">
                    <ShieldCheck size={16} className="text-abacus-accent" />
                  </div>
                  <div className="text-abacus-text">
                    <span className="font-bold text-white">Reputation Protection</span> - a system of reviews and ratings
                    that confirms the quality of your services.
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-abacus-accent/20 rounded-full p-1 mr-3 mt-0.5">
                    <Clock size={16} className="text-abacus-accent" />
                  </div>
                  <div className="text-abacus-text">
                    <span className="font-bold text-white">Fast Payouts</span> - receive funds
                    immediately after confirming product delivery.
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-abacus-accent/20 rounded-full p-1 mr-3 mt-0.5">
                    <Star size={16} className="text-abacus-accent" />
                  </div>
                  <div className="text-abacus-text">
                    <span className="font-bold text-white">VIP Status</span> - additional privileges
                    available for vendors with high ratings.
                  </div>
                </li>
              </ul>
              
              <Button variant="outline" className="border-abacus-accent/30 hover:bg-abacus-accent/10 text-abacus-text">
                Become a Vendor
              </Button>
            </div>
            
            <div className="bg-abacus-darker rounded-lg border border-abacus-accent/10 p-6">
              <div className="text-right mb-2 text-sm text-abacus-text">Platform Statistics</div>
              <div className="space-y-4">
                <StatsItem label="Active Vendors" value="12,421" />
                <StatsItem label="Monthly Transactions" value="86,500+" />
                <StatsItem label="Average Service Rating" value="4.88 / 5" />
                <StatsItem label="Successful Transaction Rate" value="99.7%" />
                <StatsItem label="Daily Visitors" value="62,000+" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ name, image, listings, rating }: { name: string, image: string, listings: number, rating: number }) => {
  return (
    <div className="bg-abacus-darker border border-abacus-accent/10 rounded-lg overflow-hidden card-hover">
      <div className="h-36 w-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
        <div className="flex justify-between text-sm">
          <span className="text-abacus-text">{listings} listings</span>
          <span className="flex items-center text-abacus-accent">
            <Star size={14} className="mr-1 fill-abacus-accent" />
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

const StatsItem = ({ label, value }: { label: string, value: string }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b border-abacus-accent/10">
      <span className="text-abacus-text">{label}</span>
      <span className="text-lg font-mono font-bold text-white">{value}</span>
    </div>
  );
};

export default MarketplaceSection;
