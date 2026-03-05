import React from 'react';
import { Zap } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const VisionPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-900 min-h-screen">
      <div className="container mx-auto px-6">
        <Reveal width="100%" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 mb-6">
            <Zap className="w-8 h-8 text-brand-accent" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Our Vision
          </h1>
          <div className="h-1 w-24 bg-brand-accent mx-auto rounded-full mb-8"></div>
          <p className="text-slate-300 text-xl leading-relaxed mb-8">
            "To become the leading provider of digital transformation tools for the education sector, empowering institutions worldwide with seamless, intelligent, and user-centric technology."
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            We envision a future where educational management is effortless, data-driven, and accessible to all. By bridging the gap between traditional administration and modern technology, we aim to revolutionize how schools and colleges operate, fostering an environment where educators can focus on what matters most: teaching and inspiring the next generation.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default VisionPage;
