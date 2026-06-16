import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  RadioTower, 
  Cpu, 
  Monitor, 
  Plane, 
  Helicopter, 
  Rocket, 
  Cog, 
  Zap, 
  Car, 
  ShieldCheck 
} from 'lucide-react';

export const FeaturesSection = () => {
  const firstRow = [
    {
      nic: 'NIC 26201',
      title: 'Advanced Computing Systems',
      description: 'Design and manufacture of desktops, laptops, handheld computing devices, and enterprise servers.',
      icon: <Server className="w-6 h-6 text-white" />
    },
    {
      nic: 'NIC 26302',
      title: 'Communication Systems',
      description: 'Development and manufacturing of communication devices and telecommunication technologies.',
      icon: <RadioTower className="w-6 h-6 text-white" />
    },
    {
      nic: 'NIC 26107',
      title: 'Semiconductor Technologies',
      description: 'Development of microprocessors and electronic components supporting intelligent systems.',
      icon: <Cpu className="w-6 h-6 text-white" />
    },
    {
      nic: 'NIC 26209',
      title: 'Computing Infrastructure',
      description: 'Manufacture of specialized computer peripherals and supporting technologies.',
      icon: <Monitor className="w-6 h-6 text-white" />
    }
  ];

  const secondRow = [
    {
      nic: 'NIC 30301',
      title: 'Aerospace Engineering',
      description: 'Development and manufacturing capabilities for aircraft systems and aviation technologies.',
      icon: <Plane className="w-6 h-6 text-white" />
    },
    {
      nic: 'NIC 30302',
      title: 'Helicopter Technologies',
      description: 'Specialized engineering solutions for rotorcraft design and manufacturing.',
      icon: <Helicopter className="w-6 h-6 text-white" />
    },
    {
      nic: 'NIC 30304',
      title: 'Space Systems',
      description: 'Research and development for spacecraft, satellites, and launch vehicle technologies.',
      icon: <Rocket className="w-6 h-6 text-white" />
    },
    {
      nic: 'NIC 30305',
      title: 'Aerospace Components',
      description: 'Manufacturing of aircraft assemblies, propulsion systems, and aerospace components.',
      icon: <Cog className="w-6 h-6 text-white" />
    }
  ];

  const thirdRow = [
    {
      nic: 'NIC 35104',
      title: 'Energy Technologies',
      description: 'Advanced engineering solutions for electric power generation and secure energy transmission, specializing in nuclear power plant technologies.',
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      nic: 'NIC 29101',
      title: 'Automotive Engineering',
      description: 'Capabilities in passenger vehicle technologies and automotive innovation.',
      icon: <Car className="w-6 h-6 text-white" />
    },
    {
      nic: 'NIC 69100',
      title: 'Strategic & Legal Advisory',
      description: 'Governance, compliance, and strategic advisory capabilities supporting enterprise operations.',
      icon: <ShieldCheck className="w-6 h-6 text-white" />
    }
  ];

  const renderCard = (domain: any, idx: number) => (
    <motion.div
      key={domain.nic}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group bg-white/60 backdrop-blur-xl border border-gray-100 p-8 rounded-[28px] shadow-xl shadow-indigo-100/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-200/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
    >
      {/* Soft Glow Effect behind the icon */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/10 blur-3xl rounded-full transform group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

      <div className="w-14 h-14 rounded-2xl bg-[#5a4fcf] flex items-center justify-center mb-6 shadow-lg shadow-indigo-200 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        {domain.icon}
      </div>
      
      <div className="inline-flex items-center w-fit px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold tracking-wider mb-4 border border-gray-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors duration-300">
        {domain.nic}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#5a4fcf] transition-colors duration-300">
        {domain.title}
      </h3>
      
      <p className="text-gray-500 leading-relaxed text-sm flex-grow">
        {domain.description}
      </p>
    </motion.div>
  );

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white">
      {/* Abstract Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent pointer-events-none"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none"></div>
      <div className="absolute right-0 bottom-40 w-96 h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#f4effc] text-[#5a4fcf] font-bold text-xs tracking-[0.2em] uppercase mb-6"
          >
            FEATURES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#1a1f2c] mb-6 tracking-tight"
          >
            Engineering & Manufacturing Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            Government-recognized expertise spanning computing, aerospace, communications,
            <br className="hidden md:block" /> energy, and intelligent systems.
          </motion.p>
        </div>

        {/* 4-4-3 Responsive Grid */}
        <div className="flex flex-col gap-6">
          {/* First Row (4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {firstRow.map((domain, idx) => renderCard(domain, idx))}
          </div>

          {/* Second Row (4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondRow.map((domain, idx) => renderCard(domain, idx))}
          </div>

          {/* Third Row (3 Cards Centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-[75%] lg:mx-auto w-full">
            {thirdRow.map((domain, idx) => renderCard(domain, idx))}
          </div>
        </div>

      </div>
    </section>
  );
};
