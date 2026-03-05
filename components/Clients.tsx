import React from 'react';
import { Crown, GraduationCap, BookOpen, Award } from 'lucide-react';
import { Reveal } from './Reveal';

const Clients: React.FC = () => {
  const clients = [
    {
      name: "Legend College",
      location: "Savar, Dhaka",
      icon: <GraduationCap className="w-8 h-8 text-red-500" />,
      color: "text-white"
    },
    {
      name: "Maestrocrown",
      sub: "College",
      location: "Savar",
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      color: "text-yellow-100"
    },
    {
      name: "Future Scholars",
      sub: "Academy",
      location: "International",
      icon: <BookOpen className="w-8 h-8 text-purple-400" />,
      color: "text-purple-100"
    },
    {
      name: "Elite Education",
      sub: "Systems",
      location: "BD",
      icon: <Award className="w-8 h-8 text-brand-accent" />,
      color: "text-indigo-100"
    }
  ];

  // Double the list to ensure it covers wider screens before the loop
  const seamlessList = [...clients, ...clients];

  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      <Reveal width="100%" className="container mx-auto px-6 mb-8 text-center">
        <p className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2">
          Trusted Partners
        </p>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
          Our Valued Clients
        </h2>
      </Reveal>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        
        {/* Gradient Fade Effects on Sides */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track - We use two identical sets for seamless looping */}
        {/* Set 1 */}
        <div className="flex animate-marquee-fast shrink-0 gap-12 px-6 min-w-full items-center justify-around">
          {seamlessList.map((client, idx) => (
            <div 
              key={`list1-${idx}`} 
              className="flex items-center gap-3 bg-slate-800/50 px-8 py-4 rounded-xl border border-slate-700/50 hover:border-brand-accent/50 transition-colors backdrop-blur-sm min-w-[260px]"
            >
              <div className="bg-slate-900 p-2 rounded-lg shadow-inner">
                {client.icon}
              </div>
              <div className="flex flex-col">
                <h3 className={`font-heading font-bold text-lg leading-tight ${client.color}`}>
                  {client.name} {client.sub && <span className="font-light opacity-80">{client.sub}</span>}
                </h3>
                <span className="text-xs text-slate-500 uppercase tracking-wider">{client.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Set 2 (Duplicate) */}
        <div className="flex animate-marquee-fast shrink-0 gap-12 px-6 min-w-full items-center justify-around" aria-hidden="true">
          {seamlessList.map((client, idx) => (
            <div 
              key={`list2-${idx}`} 
              className="flex items-center gap-3 bg-slate-800/50 px-8 py-4 rounded-xl border border-slate-700/50 hover:border-brand-accent/50 transition-colors backdrop-blur-sm min-w-[260px]"
            >
              <div className="bg-slate-900 p-2 rounded-lg shadow-inner">
                {client.icon}
              </div>
              <div className="flex flex-col">
                <h3 className={`font-heading font-bold text-lg leading-tight ${client.color}`}>
                  {client.name} {client.sub && <span className="font-light opacity-80">{client.sub}</span>}
                </h3>
                <span className="text-xs text-slate-500 uppercase tracking-wider">{client.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;