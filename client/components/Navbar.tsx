import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-pf-dark h-[72px] px-8 lg:px-16 flex items-center justify-center sticky top-0 z-50">
      <div className="flex items-center gap-8 w-full max-w-container">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="w-[84px] h-8 bg-white rounded"></div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          <a href="#features" className="text-white text-body hover:text-pf-green transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-white text-body hover:text-pf-green transition-colors">
            Pricing
          </a>
          <a href="#blog" className="text-white text-body hover:text-pf-green transition-colors">
            Blog
          </a>
          <button className="flex items-center gap-1 text-white text-body hover:text-pf-green transition-colors">
            Resources
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
          <button className="px-[10px] py-1 bg-pf-green text-pf-dark text-body font-medium rounded-md border border-pf-green hover:bg-pf-green/90 transition-colors">
            Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden ml-auto text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-pf-dark border-t border-white/20 py-6 px-8">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-white text-body hover:text-pf-green transition-colors py-2">
              Features
            </a>
            <a href="#pricing" className="text-white text-body hover:text-pf-green transition-colors py-2">
              Pricing
            </a>
            <a href="#blog" className="text-white text-body hover:text-pf-green transition-colors py-2">
              Blog
            </a>
            <button className="flex items-center gap-1 text-white text-body hover:text-pf-green transition-colors py-2 justify-start">
              Resources
              <ChevronDown className="w-6 h-6" />
            </button>
            <button className="mt-4 px-[10px] py-1 bg-pf-green text-pf-dark text-body font-medium rounded-md border border-pf-green hover:bg-pf-green/90 transition-colors w-full">
              Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
