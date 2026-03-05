import React from 'react';
import { Check, Info, Server } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './Reveal';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter Package",
      studentLimit: "Up to 300 Students",
      price: "5,000",
      installation: "10,000",
      description: "Essential modules for small colleges to digitize records and exams.",
      features: [
        "Student & Staff Database",
        "Fees Collection & Receipts",
        "Manual Attendance System",
        "Exam Marks Entry & Result",
        "Basic Reports & ID Cards"
      ],
      color: "border-slate-700"
    },
    {
      name: "Standard Package",
      studentLimit: "300 - 600 Students",
      price: "8,000",
      installation: "15,000",
      isPopular: true,
      description: "Advanced automation with Mobile App and SMS for growing campuses.",
      features: [
        "All Starter Features",
        "Android App (Student/Parent)",
        "SMS Notification Gateway",
        "Library Management System",
        "Payroll & Leave Management",
        "Accounts Income/Expense"
      ],
      color: "border-brand-accent shadow-brand-accent/20"
    },
    {
      name: "Premium Package",
      studentLimit: "600 - 800 Students",
      price: "15,000",
      installation: "20,000",
      description: "Full-scale ERP with website integration and specialized modules.",
      features: [
        "All Standard Features",
        "Dynamic College Website",
        "Online Admission System",
        "Inventory & Asset Management",
        "Hostel & Transport Manager",
        "Priority 24/7 Support"
      ],
      color: "border-purple-500/50"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Reveal width="100%" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2 block">Transparent Pricing</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            College Management Software Pricing
          </h2>
          <p className="text-slate-400 text-lg">
            Affordable monthly subscription plans tailored for your institution's size and needs.
          </p>
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <StaggerItem 
              key={idx} 
              className={`relative bg-slate-800 rounded-2xl p-8 border-2 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.isPopular ? 'border-brand-accent shadow-xl shadow-indigo-500/10' : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="inline-block bg-slate-900/50 px-3 py-1 rounded-lg border border-slate-700 mb-4">
                  <span className="text-sm font-semibold text-slate-300">{plan.studentLimit}</span>
                </div>
                <p className="text-slate-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-2xl font-bold text-slate-400">৳</span>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-500 text-sm self-end mb-1">/mo</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-2 border-t border-slate-700/50 pt-2">
                  <Server className="w-3 h-3" />
                  Installation Charge: ৳{plan.installation} (One-time)
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-slate-300 text-sm">
                    <Check className="w-5 h-5 text-brand-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-brand-accent hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/25' 
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                Choose {plan.name}
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal width="100%" delay={0.4} className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700">
            <Info className="w-5 h-5 text-blue-400" />
            <p className="text-slate-400 text-sm">
              Need a custom plan for <strong>800+ students</strong>? <a href="#contact" className="text-brand-accent font-bold hover:underline">Contact us</a> for enterprise pricing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;