import React from 'react';
import { motion } from 'framer-motion';
import { Server, Plane, PlaneTakeoff, Rocket, Settings, Zap, Radio, Cpu, Car, Monitor, ArrowRight } from 'lucide-react';

export const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Advanced Computing Systems",
      nic: "NIC 26201",
      desc: "Design and manufacture of desktops, laptops, handheld computing devices, and enterprise servers.",
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "Aerospace Engineering",
      nic: "NIC 30301",
      desc: "Development and manufacturing capabilities for aircraft systems and aviation technologies.",
      icon: <Plane className="w-8 h-8" />
    },
    {
      title: "Helicopter Technologies",
      nic: "NIC 30302",
      desc: "Specialized engineering solutions for rotorcraft design and manufacturing.",
      icon: <PlaneTakeoff className="w-8 h-8" />
    },
    {
      title: "Space Systems",
      nic: "NIC 30304",
      desc: "Research and development for spacecraft, satellites, and launch vehicle technologies.",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: "Aerospace Components",
      nic: "NIC 30305",
      desc: "Manufacturing of aircraft assemblies, propulsion systems, and aerospace components.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Energy Technologies",
      nic: "NIC 35104",
      desc: "Advanced power generation and energy transmission solutions.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Communication Systems",
      nic: "NIC 26302",
      desc: "Manufacturing of communication devices and telecommunication equipment.",
      icon: <Radio className="w-8 h-8" />
    },
    {
      title: "Semiconductor Technologies",
      nic: "NIC 26107",
      desc: "Development of microprocessors and electronic components for intelligent systems.",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Automotive Engineering",
      nic: "NIC 29101",
      desc: "Capabilities in passenger vehicle technologies and automotive innovation.",
      icon: <Car className="w-8 h-8" />
    },
    {
      title: "Computing Infrastructure",
      nic: "NIC 26209",
      desc: "Manufacture of specialized computer peripherals and supporting technologies.",
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  return (
    <section id="features" className="relative max-w-[1400px] mx-auto px-4 sm:px-8 py-16 md:py-24 z-20">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block py-1.5 px-5 rounded-full bg-purple-50 text-[#5a4fcf] text-[13px] font-bold tracking-[0.2em] mb-6 border border-purple-100/50"
        >
          FEATURES
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight mb-6"
        >
          Engineering & Manufacturing Capabilities
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 text-base md:text-lg max-w-3xl leading-relaxed"
        >
          Government-recognized expertise spanning computing, aerospace, communications, energy, and intelligent systems.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className="group relative bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:shadow-purple-100/40 hover:border-purple-200 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
          >
            <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-[#5a4fcf] to-[#8b5cf6] flex items-center justify-center text-white mb-6 shadow-md shadow-indigo-200/50">
              {cap.icon}
            </div>
            
            <div className="flex flex-col flex-grow">
              <div className="mb-4">
                <span className="inline-block px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-500 text-[11px] font-bold uppercase tracking-wider rounded mb-4">
                  {cap.nic}
                </span>
                <h3 className="text-[17px] font-bold text-gray-900 leading-snug mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
