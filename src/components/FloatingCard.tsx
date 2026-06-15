import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  delay?: number;
}

export const FloatingCard = ({ icon, title, subtitle, className, delay = 0 }: FloatingCardProps) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 pr-6 rounded-2xl shadow-xl shadow-indigo-100/50 border border-white/50 ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-800 leading-tight">{title}</h4>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>
    </motion.div>
  );
};
