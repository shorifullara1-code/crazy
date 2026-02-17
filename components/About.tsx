import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Who We Are
          </h2>
          <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg leading-relaxed">
            Crazy Soul Solution is a dynamic software development company driven by passion and innovation. 
            We specialize in creating intuitive management systems for educational institutions and crafting 
            beautiful, high-performance websites for businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-8 h-8 text-blue-400" />,
              title: "Our Mission",
              desc: "To simplify complex academic processes through automated software solutions."
            },
            {
              icon: <Zap className="w-8 h-8 text-yellow-400" />,
              title: "Our Vision",
              desc: "To become the leading provider of digital transformation tools for the education sector."
            },
            {
              icon: <Users className="w-8 h-8 text-pink-400" />,
              title: "Our Team",
              desc: "A crazy talented group of developers, designers, and strategists working for your success."
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-brand-accent/50 transition-all duration-300 group hover:-translate-y-2 reveal delay-${(idx + 1) * 100}`}
            >
              <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;