import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Quote } from 'lucide-react';
import founderImage from '../assets/founder.png';

export const AboutSection = () => {
  return (
    <section id="about" className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-16 md:py-32 z-20">

      
      <div className="flex flex-col items-center text-center mb-16 md:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block py-1.5 px-5 rounded-full bg-purple-50 text-[#5a4fcf] text-[13px] font-bold tracking-[0.2em] mb-6 border border-purple-100/50"
        >
          ABOUT US
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight"
        >
          Engineering Intelligence That Evolves
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left Column: Founder Spotlight */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[2.5rem] p-4 sm:p-6 bg-white border border-gray-100 shadow-xl shadow-indigo-100/40 group mt-2"
        >
          {/* Subtle lavender background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-[2.5rem]"></div>

          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
            {/* Founder Portrait */}
            <img
              src={founderImage}
              alt="Krishna Bhargava A"
              className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-700"
            />

            {/* Image overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent"></div>
          </div>

          {/* Founder Info Card (Glassmorphism overlapping the image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 right-8 sm:right-12 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg shadow-indigo-900/10"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">Krishna Bhargava A</h3>
              <p className="text-sm font-semibold text-[#5a4fcf] uppercase tracking-wide">Founder & CEO</p>
              <p className="text-xs text-gray-500 font-medium">Evolutionary Computation Enterprises</p>
            </div>
            <div className="flex gap-3 items-start border-t border-gray-100 pt-4">
              <Quote className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 font-medium italic leading-relaxed">
                "Leading ECE with a vision to bring Artificial Intelligence to Life through the principles of Evolutionary Computation."
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Content */}
        <div className="flex flex-col items-start text-left pt-2">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-gray-600 text-base sm:text-lg leading-[1.8] mb-8 max-w-[65ch]"
          >
            <p>
              <strong className="text-gray-900 font-semibold">Evolutionary Computation Enterprises (ECE)</strong> is an emerging technology and engineering enterprise dedicated to advancing the future of Artificial Intelligence through the principles of Evolutionary Computation. Founded by Krishna Bhargava A on 28 August 2025, ECE explores the intersection of intelligent systems, adaptive computation, advanced computer technologies, and next-generation AI architectures.
            </p>
            <p>
              At ECE, we believe that intelligence should not merely be programmed—it should evolve. Inspired by the adaptive processes of nature, we focus on building computational systems that can learn, transform, and continuously improve. Our work spans Artificial Intelligence, Evolutionary Computation, intelligent automation, advanced engineering, and future-oriented technological research.
            </p>
            <p>
              Through innovation, research, and engineering-driven exploration, we aim to contribute to the development of transformative AI systems, future computing infrastructure, and intelligent technologies designed to address real-world challenges across industries.
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-white border border-purple-50/50 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-purple-100/40 hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-[#5a4fcf] flex items-center justify-center text-white shadow-md shadow-purple-200/50 flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Our Mission</h3>
              </div>
              <div className="text-[13px] text-gray-500 leading-[1.6] space-y-2 flex-grow">
                <p>
                  To bring Artificial Intelligence to Life using the power of Evolutionary Computation.
                </p>
                <p>
                  We develop intelligent, adaptive, and transformative technologies that go beyond conventional approaches to AI, enabling the next generation of computational innovation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4a90e2] to-[#5a4fcf] flex items-center justify-center text-white shadow-md shadow-blue-200/50 flex-shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-[13px] text-gray-500 leading-[1.6] flex-grow mt-1">
                To pioneer evolutionary and biologically inspired computational systems that bridge the gap between artificial intelligence and the living world, shaping a future where intelligent technologies evolve alongside human needs and aspirations.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
