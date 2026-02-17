import React from 'react';
import { Facebook, Linkedin, Twitter, Zap, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-accent p-1.5 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-xl font-bold text-white">
                Crazy Soul <span className="text-brand-accent">Solution</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Empowering educational institutions and businesses with cutting-edge software solutions. 
              Innovation meets reliability at Crazy Soul Solution.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-brand-accent" />
                <span>Arapara, Savar, Dhaka</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-brand-accent" />
                <span>shorifulyt8@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>+880 1938-041064</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-accent hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">College Management Software</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#about" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 text-center text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Crazy Soul Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;