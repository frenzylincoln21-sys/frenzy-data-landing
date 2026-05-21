import React from 'react';
import { Wifi, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 bg-[#00050d] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Wifi className="text-background w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white uppercase tracking-tighter">
                Frenzy <span className="text-primary">Data Hub</span>
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              The leading digital services provider in Ghana. We offer cheap, fast, and reliable data bundles for all major networks.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl glass-morphism flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Our Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>PayPal Account Creation</li>
              <li>Graphic Design (Flyers, Banners)</li>
              <li>Posters & Posters</li>
              <li>Business Cards</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>0597222464</span>
              </li>
              <li className="flex items-center gap-3 text-primary font-bold">
                <span className="w-4 h-4 flex items-center justify-center text-[10px] border border-primary rounded-full">WA</span>
                <span>WhatsApp: 0597222464</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@frenzydata.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © 2024 Frenzy Data Hub. All rights reserved. Professional Telecom Landing Page.
          </p>
          <div className="flex gap-8 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;