import React from 'react';
import { motion } from 'framer-motion';

export const StatsSection = () => {
  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.9/5', label: 'Rating' },
    { value: '25+', label: 'Countries' },
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-12 z-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-gray-100 p-8 lg:p-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center pt-6 md:pt-0">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
