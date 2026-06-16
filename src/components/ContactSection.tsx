import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Building2, CheckCircle2, Send, ShieldCheck, Zap, Globe2, User, Tag, MessageCircle, Loader2 } from 'lucide-react';
import founderImage from '../assets/founder.png';
import logoImage from '../assets/logo.png';

export const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission failed', error);
      setStatus('error');
    }
    
    // Reset status after a few seconds if successful or error
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };
  return (
    <section id="contact" className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-16 md:py-32 z-20 overflow-hidden">

      {/* Centered Header */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block py-1.5 px-5 rounded-full bg-indigo-50 text-[#5a4fcf] text-[13px] font-bold tracking-[0.2em] mb-6 border border-indigo-100/50"
        >
          CONTACT US
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight mb-6 max-w-4xl"
        >
          Let's Build the Future of Intelligence Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 text-base md:text-lg max-w-3xl leading-relaxed"
        >
          Whether you are interested in collaborations, research partnerships, enterprise solutions, or learning more about Evolutionary Computation Enterprises, we would love to hear from you.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">

        {/* Left Column (40%) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Contact Information Card */}
          <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-xl shadow-indigo-100/30">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=krishnabhargavaa@gmail.com&su=Inquiry%20from%20Evolutionary%20Computation%20Enterprises%20Website&body=Hello%20Evolutionary%20Computation%20Enterprises%20Team,%0A%0AI%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20opportunities%20for%20collaboration.%0A%0AName:%0AOrganization:%0AMessage:%0A%0ABest%20regards,"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#5a4fcf] flex-shrink-0 group-hover:bg-[#5a4fcf] group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#5a4fcf] transition-colors underline-offset-4 group-hover:underline break-all">
                    krishnabhargavaa@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#5a4fcf] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+910000000000" className="text-sm font-semibold text-gray-900 hover:text-[#5a4fcf] transition-colors">
                    +91 9480126779
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#5a4fcf] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-sm font-semibold text-gray-900">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#5a4fcf] flex-shrink-0 overflow-hidden">
                  <img src={logoImage} alt="ECE Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Enterprise</p>
                  <p className="text-sm font-semibold text-gray-900">
                    Evolutionary Computation Enterprises
                  </p>
                </div>
              </div>


            </div>
          </div>

          {/* Founder Profile Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50/50 border border-indigo-100/50 rounded-[2rem] p-6 shadow-lg shadow-indigo-100/20 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-br from-purple-400 to-blue-400 flex-shrink-0 shadow-md">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img src={founderImage} alt="Krishna Bhargava A" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#5a4fcf] uppercase tracking-wider mb-1">Founder & CEO</p>
              <h4 className="text-base font-bold text-gray-900 mb-2">Krishna Bhargava A</h4>
              <p className="text-xs text-gray-600 font-medium italic leading-relaxed">
                "Building intelligent systems that evolve beyond conventional boundaries."
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/krishna-bhargava-a-89b98371/"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
                label: "Instagram",
                url: "https://www.instagram.com/krishnabhargavaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>,
                label: "GitHub",
                url: "https://github.com/KrishnaBhargavaAnantharamaiah/"
              }

            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target={social.url.startsWith('mailto:') ? "_self" : "_blank"}
                rel={social.url.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#5a4fcf] hover:border-[#5a4fcf]/30 shadow-sm hover:shadow-lg hover:shadow-indigo-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </motion.div>

        {/* Right Column (60%) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Contact Form Card */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-indigo-100/30">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Send Us a Message</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Have a question, collaboration proposal, or inquiry? Fill out the form below, and our team will get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#5a4fcf] focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm text-gray-900 font-medium placeholder:text-gray-400 disabled:opacity-70"
                  placeholder="Your Name"
                  disabled={status === 'loading'}
                />
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#5a4fcf] focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm text-gray-900 font-medium placeholder:text-gray-400 disabled:opacity-70"
                  placeholder="Your Email"
                  disabled={status === 'loading'}
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#5a4fcf] focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm text-gray-900 font-medium placeholder:text-gray-400 disabled:opacity-70"
                  placeholder="Subject"
                  disabled={status === 'loading'}
                />
                <Tag className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#5a4fcf] focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm text-gray-900 resize-none font-medium placeholder:text-gray-400 disabled:opacity-70"
                  placeholder="Your Message"
                  disabled={status === 'loading'}
                ></textarea>
                <MessageCircle className="absolute right-4 top-4 w-4 h-4 text-gray-400" />
              </div>

              {status === 'success' && (
                <div className="p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl font-medium text-center">
                  Message sent successfully! We'll be in touch soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl font-medium text-center">
                  Failed to send message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#5a4fcf] hover:bg-[#4a40b8] disabled:bg-indigo-300 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* No Trust Indicators */}
        </motion.div>

      </div>
    </section>
  );
};
