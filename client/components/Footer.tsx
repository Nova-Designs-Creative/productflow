import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pf-dark py-20 px-8 lg:px-16">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-16 mb-20">
          {/* Column 1 - Company Info */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="w-[84px] h-8 bg-white rounded"></div>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <p className="text-white font-semibold text-body-sm">Address</p>
                <p className="text-white text-body-sm">Level 2, 50 Bridge Street, Sydney NSW 2000</p>
              </div>
              
              <div className="flex flex-col gap-1">
                <p className="text-white font-semibold text-body-sm">Contact</p>
                <Link to="tel:1800567890" className="text-white text-body-sm underline hover:text-pf-green">1800 567 890</Link>
                <Link to="mailto:hello@productflow.com" className="text-white text-body-sm underline hover:text-pf-green">hello@productflow.com</Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <Facebook className="w-6 h-6 text-white" fill="currentColor" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                <Twitter className="w-6 h-6 text-white" fill="currentColor" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 text-white" fill="currentColor" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
                <Youtube className="w-6 h-6 text-white" fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Column 2 & 3 - Links */}
          <div className="flex-1 flex gap-6">
            <div className="flex-1 flex flex-col">
              <Link to="/" className="py-2 text-white font-semibold text-body-sm hover:text-pf-green">Home</Link>
              <Link to="#features" className="py-2 text-white font-semibold text-body-sm hover:text-pf-green">Features</Link>
              <Link to="#pricing" className="py-2 text-white font-semibold text-body-sm hover:text-pf-green">Pricing</Link>
              <Link to="#blog" className="py-2 text-white font-semibold text-body-sm hover:text-pf-green">Blog</Link>
              <Link to="#about" className="py-2 text-white font-semibold text-body-sm hover:text-pf-green">About us</Link>
            </div>
            
            <div className="flex-1 flex flex-col">
              <Link to="#contact" className="py-2 text-white font-semibold text-body-sm hover:text-pf-green">Contact</Link>
              <Link to="#security" className="py-2 text-white font-semibold text-body-sm hover:text-pf-green">Security</Link>
              <Link to="#status" className="py-2 text-white font-semibold text-body-sm hover:text-pf-green">Status</Link>
              <Link to="#changelog" className="py-2 text-white font-semibold text-body-sm hover:text-pf-green">Changelog</Link>
              <Link to="#careers" className="py-2 text-white font-semibold text-body-sm hover:text-pf-green">Careers</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-8">
          <div className="h-px bg-white/20"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-white text-body-sm">© 2025 ProductFlow Studio. All rights reserved.</p>
            
            <div className="flex gap-6">
              <Link to="#privacy" className="text-white text-body-sm underline hover:text-pf-green">Privacy policy</Link>
              <Link to="#terms" className="text-white text-body-sm underline hover:text-pf-green">Terms of service</Link>
              <Link to="#cookies" className="text-white text-body-sm underline hover:text-pf-green">Cookie settings</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
