import React from 'react';
import { CheckCircle2, GraduationCap, LayoutDashboard, Smartphone, Users2, ShieldCheck } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 reveal">
             <span className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2 block">Our Flagship Product</span>
             <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
               College Management <br /> 
               <span className="text-brand-accent">Software System</span>
             </h2>
             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
               Streamline your institution's operations with our all-in-one management suite. 
               From admission to alumni, we handle the data so you can focus on education.
             </p>

             <div className="grid sm:grid-cols-2 gap-4 mb-10">
               {[
                 "Student Admission & Records",
                 "Fee Management & Invoicing",
                 "Exam & Result Processing",
                 "Staff & Payroll Management",
                 "Library Management System",
                 "SMS & Email Alerts"
               ].map((feature, idx) => (
                 <div key={idx} className={`flex items-center gap-3 reveal delay-${(idx + 1) * 100}`}>
                   <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                   <span className="text-slate-300">{feature}</span>
                 </div>
               ))}
             </div>

             <button className="bg-white text-slate-900 hover:bg-slate-200 px-8 py-3 rounded-xl font-bold transition-colors hover:scale-105 duration-200">
               Request a Free Demo
             </button>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
               {/* Feature Cards Grid */}
               <div className="space-y-4 mt-8">
                 <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-brand-accent transition-all hover:translate-x-1 reveal delay-200">
                    <LayoutDashboard className="w-10 h-10 text-brand-accent mb-4" />
                    <h3 className="font-bold text-white text-lg">Admin Dashboard</h3>
                    <p className="text-slate-400 text-sm mt-2">Real-time insights and complete control over campus activities.</p>
                 </div>
                 <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-brand-accent transition-all hover:translate-x-1 reveal delay-400">
                    <Smartphone className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="font-bold text-white text-lg">Mobile App</h3>
                    <p className="text-slate-400 text-sm mt-2">Apps for Parents, Students, and Teachers to stay connected.</p>
                 </div>
               </div>
               
               <div className="space-y-4">
                 <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-brand-accent transition-all hover:translate-x-1 reveal delay-300">
                    <GraduationCap className="w-10 h-10 text-yellow-400 mb-4" />
                    <h3 className="font-bold text-white text-lg">Academic Module</h3>
                    <p className="text-slate-400 text-sm mt-2">Manage syllabus, lesson plans, and grading effortlessly.</p>
                 </div>
                 <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-brand-accent transition-all hover:translate-x-1 reveal delay-500">
                    <ShieldCheck className="w-10 h-10 text-green-400 mb-4" />
                    <h3 className="font-bold text-white text-lg">Secure Data</h3>
                    <p className="text-slate-400 text-sm mt-2">Cloud-based backups with role-based access control.</p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;