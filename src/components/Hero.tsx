import React from 'react';
import { motion } from 'framer-motion';
import { Star, Dna, BrainCircuit, ShieldCheck, Rocket } from 'lucide-react';
import { FloatingCard } from './FloatingCard';
import heroImage from '../assets/heroHead.png';

export const Hero = () => {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 pt-6 pb-20 md:pt-10 md:pb-32 z-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="w-full min-w-0 flex flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-[1.15] mb-6 md:mb-8 tracking-tight"
          >
            Bringing <br className="hidden sm:block" />
            <span className="text-[#5a4fcf]">
              Artificial Intelligence
            </span> <br className="hidden sm:block" />
            to <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-500">Life.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            <p className="font-semibold mb-3 text-lg sm:text-xl">
              To bring Artificial Intelligence to <span className="text-primary">Life</span>, <br className="hidden sm:block" />
              using the power of <span className="text-primary">Evolutionary Computation</span>!
            </p>
            <p className="text-gray-500 text-sm sm:text-base max-w-md">
              We evolve intelligent, adaptive, and conscious AI systems
              that learn, adapt, and grow beyond imagination
            </p>
          </motion.div>
        </div>

        {/* Right Column: Illustration & Floating Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full min-w-0 flex justify-center lg:justify-center min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] mt-8 lg:mt-0"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-md flex items-center justify-center">
            {/* Multi-layer glow behind the head */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-br from-indigo-300/50 via-purple-300/40 to-blue-200/30 blur-[60px] sm:blur-[80px]"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full bg-gradient-to-br from-violet-300/40 to-indigo-200/30 blur-[40px] sm:blur-[50px]"></div>
            </div>
            {/* Neck area glow */}
            <div className="absolute bottom-[0px] sm:bottom-[-20px] right-[20%] w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-[#5a4fcf]/50 blur-[50px] sm:blur-[70px] rounded-full pointer-events-none z-10"></div>

            <img
              src={heroImage}
              alt="Futuristic Neural Network Head"
              className="relative w-full sm:w-[90%] max-w-[280px] sm:max-w-[380px] h-auto object-contain mix-blend-multiply"
              style={{
                filter: 'contrast(1.05) brightness(1.03)',
                maskImage: 'radial-gradient(ellipse 80% 82% at 50% 46%, black 60%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 82% at 50% 46%, black 60%, transparent 95%)',
              }}
            />

            <FloatingCard
              icon={<Dna />}
              title="Evolutionary"
              subtitle="Computation"
              className="top-0 sm:top-4 -left-4 sm:-left-6 lg:-left-32 scale-[0.75] sm:scale-100 origin-top-left"
              delay={0}
            />
            <FloatingCard
              icon={<BrainCircuit />}
              title="Conscious"
              subtitle="Intelligence"
              className="top-10 sm:top-14 -right-4 sm:-right-8 lg:-right-32 scale-[0.75] sm:scale-100 origin-top-right"
              delay={1.5}
            />
            <FloatingCard
              icon={<ShieldCheck />}
              title="Adaptive"
              subtitle="AI Systems"
              className="bottom-20 sm:bottom-28 -left-4 sm:-left-8 lg:-left-32 scale-[0.75] sm:scale-100 origin-bottom-left"
              delay={0.8}
            />
            <FloatingCard
              icon={<Rocket />}
              title="Transformative"
              subtitle="Outcomes"
              className="bottom-4 sm:bottom-12 -right-4 sm:-right-10 lg:-right-28 scale-[0.75] sm:scale-100 origin-bottom-right"
              delay={2.2}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
