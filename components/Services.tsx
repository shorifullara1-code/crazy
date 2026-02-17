import React from 'react';
import { Globe, ShoppingCart, Smartphone, Database, Search, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      desc: "Custom websites built with React, Next.js, and modern technologies tailored to your brand.",
      color: "text-blue-400"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      desc: "Scalable online stores with secure payment gateways and inventory management.",
      color: "text-green-400"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      desc: "Native and Cross-platform mobile applications for iOS and Android.",
      color: "text-purple-400"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Custom Software",
      desc: "Bespoke software solutions to automate your specific business workflows.",
      color: "text-red-400"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Marketing",
      desc: "Improve your ranking on Google and reach more customers with digital marketing.",
      color: "text-yellow-400"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      desc: "User-centered design that looks great and converts visitors into customers.",
      color: "text-pink-400"
    },
  ];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Our Premium Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Beyond our management software, we offer a full suite of digital services to elevate your brand presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/50 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 group border border-transparent hover:border-slate-700 reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;