import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <Reveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Have a project in mind or want a demo of our College Management Software? 
                Drop us a message and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-accent/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Phone</h4>
                    <p className="text-slate-400">+880 1938-041064</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-accent/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Email</h4>
                    <p className="text-slate-400">shorifulyt8@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-accent/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Office</h4>
                    <p className="text-slate-400">Arapara, Savar, Dhaka</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <Reveal delay={0.2} width="100%">
              <form className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-slate-300 text-sm font-bold mb-2">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-bold mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-slate-300 text-sm font-bold mb-2">Subject</label>
                  <select className="w-full bg-slate-900 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors">
                    <option>Software Demo Inquiry</option>
                    <option>Website Development</option>
                    <option>General Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-slate-300 text-sm font-bold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project..." 
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-brand-accent hover:bg-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-indigo-500/50">
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;