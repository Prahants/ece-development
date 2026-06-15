import React from 'react';
import { motion } from 'framer-motion';
import { Infinity as InfinityIcon, Dna, Cpu, Brain, Globe } from 'lucide-react';

export const VisionSection = () => {
  const visions = [
    { icon: <InfinityIcon className="w-8 h-8 text-green-500" />, text: "Evolution is\nInfinite." },
    { icon: <Dna className="w-8 h-8 text-gray-700" />, text: "Nature Inspires.\nWe Innovate." },
    { icon: <Cpu className="w-8 h-8 text-cyan-500" />, text: "Intelligence\nthat Evolves." },
    { icon: <Brain className="w-8 h-8 text-purple-500" />, text: "Consciousness\nthat Transforms." },
    { icon: <Globe className="w-8 h-8 text-blue-500" />, text: "Building a Better\nIntelligent Future." },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-8 -mt-8 md:-mt-16 mb-20 z-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-0 bg-white rounded-3xl lg:rounded-[2.5rem] border border-gray-100 shadow-xl shadow-indigo-100/40 p-4 sm:p-6 lg:p-8"
      >
        {visions.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-center gap-4 flex-1 justify-start lg:justify-center px-2 sm:px-4 w-full lg:w-auto pl-8 sm:pl-auto">
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-tight whitespace-pre-line text-left">
                {item.text}
              </p>
            </div>
            {/* Divider */}
            {idx < visions.length - 1 && (
              <div className="hidden lg:block w-px h-12 bg-gray-200"></div>
            )}
            {idx < visions.length - 1 && (
              <div className="block lg:hidden w-1/2 h-px bg-gray-200"></div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
};

