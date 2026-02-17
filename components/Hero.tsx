import React from 'react';
import { ChevronRight, Code2, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content - Safe mode: removed opacity-0 */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-brand-accent text-sm font-semibold mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              Innovating Future Education
            </div>
            
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transforming Ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We are <strong>Crazy Soul Solution</strong>. We build world-class College Management Software and stunning websites to help your business grow in the digital era.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#products" 
                className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-indigo-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1"
              >
                <Rocket className="w-5 h-5" />
                Explore Products
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all border border-slate-700 hover:border-slate-600"
              >
                Get a Quote
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visual/Image */}
          <div className="lg:w-1/2 relative animate-fade-in-up-delay" style={{ animationFillMode: 'forwards' }}>
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-float">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent rounded-full opacity-20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Digital Solutions" 
                className="rounded-xl w-full h-auto object-cover shadow-inner"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-4 animate-float-delayed">
                 <div className="bg-green-500/10 p-3 rounded-lg">
                    <Code2 className="w-8 h-8 text-green-500" />
                 </div>
                 <div>
                    <p className="text-slate-400 text-xs">Expert Team</p>
                    <p className="text-white font-bold text-lg">100% Secure</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;