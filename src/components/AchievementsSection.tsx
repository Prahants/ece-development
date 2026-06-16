import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, FileText, CheckCircle2, ChevronRight, Expand, X, Download } from 'lucide-react';
import certificatePdf from '../assets/Udyam_Registration_Certificate.pdf';
import logoImage from '../assets/logo.png';
import udyamImage from '../assets/msme-udyam-registration.jpeg';
import msmeImage from '../assets/MSME.svg';

const activities = [
  "Manufacture of desktop computers, laptops, handheld computers, mainframe computers and computer servers.",
  "Manufacture of airplanes.",
  "Manufacture of helicopters.",
  "Manufacture of spacecraft, launch vehicles, satellites and orbital systems.",
  "Manufacture of aircraft and spacecraft parts and accessories.",
  "Electric power generation using nuclear power system and transmission systems.",
  "Manufacture of communication equipment.",
  "Manufacture of microprocessors and electronic components.",
  "Manufacture of passenger motor vehicles.",
  "Manufacture of computers and peripheral equipment.",
  "Strategic & Legal Advisory for enterprise governance and compliance."
];

export const AchievementsSection = () => {
  const [showAllActivities, setShowAllActivities] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedActivities = showAllActivities ? activities : activities.slice(0, 4);

  return (
    <section id="achievements" className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-16 md:py-32 z-20">

      {/* Centered Header */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block py-1.5 px-5 rounded-full bg-indigo-50 text-[#5a4fcf] text-[13px] font-bold tracking-[0.2em] mb-6 border border-indigo-100/50"
        >
          ACHIEVEMENTS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight mb-6"
        >
          Official Recognitions & Milestones
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 text-base md:text-lg max-w-3xl leading-relaxed"
        >
          Recognitions and accomplishments that reflect our commitment to advancing intelligent systems through innovation, research, and engineering excellence.
        </motion.p>
      </div>

      {/* Main Achievement Card */}
      <div className="relative group">

        <div className="relative bg-white border border-gray-100 rounded-[2rem] shadow-xl shadow-indigo-100/30 overflow-hidden flex flex-col-reverse lg:grid lg:grid-cols-12">

          {/* Left Column: Details (lg:col-span-5) */}
          <div className="p-6 sm:p-10 lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-r border-gray-100 bg-gradient-to-br from-white to-gray-50/50">
            <div className="inline-flex items-center gap-2.5 py-1.5 px-3.5 rounded-full bg-indigo-50 text-[#5a4fcf] text-xs sm:text-sm font-bold mb-6 border border-indigo-100 w-fit">
              <img src={msmeImage} alt="MSME Logo" className="w-8 h-8 object-contain rounded -translate-y-0.5" />
              Government Recognized Enterprise
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">UDYAM Registration Certificate</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              Official recognition under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Enterprise Name</span>
                <span className="text-sm font-semibold text-gray-900">Evolutionary Computation Enterprises</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">UDYAM Number</span>
                  <span className="text-sm font-semibold text-[#5a4fcf] bg-purple-50 px-2 py-1 rounded w-fit">UDYAM-KR-03-0660650</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Classification</span>
                  <span className="text-sm font-medium text-gray-900">Micro Enterprise</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Incorporation</span>
                  <span className="text-sm font-medium text-gray-900">28 August 2025</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Registration Date</span>
                  <span className="text-sm font-medium text-gray-900">16 February 2026</span>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Manufacturing Activities</span>
                {activities.length > 4 && (
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setShowAllActivities(!showAllActivities); }}
                    className="text-xs font-bold text-[#5a4fcf] hover:text-[#4a40b8] transition-colors flex items-center gap-1 cursor-pointer relative z-20"
                  >
                    {showAllActivities ? "Show Less" : "View All"}
                    <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${showAllActivities ? 'rotate-90' : ''}`} />
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <AnimatePresence>
                  {displayedActivities.map((activity, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-3 py-2 rounded-lg bg-white border border-gray-100 text-xs text-gray-600 shadow-sm flex gap-2 items-start"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                      <span className="leading-[1.6]">{activity}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              {showAllActivities && (
                <button onClick={() => setShowAllActivities(false)} className="text-xs font-bold text-gray-500 hover:text-gray-700 transition-colors mt-4">
                  Show Less
                </button>
              )}
            </div>

          </div>

          {/* Right Column: Certificate Preview (lg:col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col items-center justify-center bg-gray-50/50 relative">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 bg-white px-2.5 py-1 rounded-full shadow-sm border border-gray-100">Page 1 of 3</span>
            </div>

            <div
              className="relative z-20 w-full max-w-lg aspect-[1/1.4] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden group cursor-pointer"
              onClick={() => window.open(certificatePdf, '_blank')}
            >
              {/* Iframe to render PDF preview without toolbars */}
              <iframe
                src={`${certificatePdf}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                title="UDYAM Certificate Preview"
                className="w-full h-full border-none pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity"
              />

              {/* Overlay for interaction */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button type="button" className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Expand className="w-4 h-4" /> View Full Certificate
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => window.open(certificatePdf, '_blank')}
              className="mt-8 relative z-20 flex items-center gap-2 bg-[#5a4fcf] hover:bg-[#4a40b8] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <FileText className="w-4 h-4" /> View Full Certificate
            </button>
          </div>
        </div>
      </div>

      {/* Achievement Timeline */}
      <div className="mt-20 md:mt-32 max-w-4xl mx-auto">
        <div className="relative flex flex-col md:flex-row justify-between">
          {/* Connecting Line */}
          <div className="absolute left-4 md:left-0 md:top-4 bottom-0 md:bottom-auto w-[2px] md:w-full h-full md:h-[2px] bg-gradient-to-b md:bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100 z-0"></div>

          {/* Timeline Items */}
          {[
            { date: "28 Aug 2025", title: "Evolutionary Computation Enterprises Founded", icon: <img src={logoImage} alt="Logo" className="w-full h-full object-contain p-[2px]" /> },
            { date: "16 Feb 2026", title: "Official UDYAM Registration Received", icon: <img src={udyamImage} alt="UDYAM" className="w-full h-full object-contain p-[2px] rounded-full" /> },
            { date: "MSME Recognition", title: "Recognized as a Government Registered Micro Enterprise", icon: <img src={msmeImage} alt="MSME" className="w-full h-full object-contain p-[2px]" /> }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex md:flex-col items-start md:items-center gap-4 md:gap-3 mb-8 md:mb-0 md:flex-1 text-left md:text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center text-[#5a4fcf] group-hover:border-[#5a4fcf] group-hover:bg-indigo-50 transition-colors shadow-sm ml-[1px] md:ml-0 flex-shrink-0 overflow-hidden">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-[#5a4fcf] mb-1">{item.date}</p>
                <h4 className="text-sm font-semibold text-gray-900 px-2 leading-snug">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">UDYAM Registration Certificate</h3>
                    <p className="text-[11px] text-gray-500 font-medium">Evolutionary Computation Enterprises</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={certificatePdf}
                    download="UDYAM_Certificate_ECE.pdf"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" /> Download PDF
                  </a>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Native PDF Viewer */}
              <div className="flex-1 w-full h-full bg-gray-100">
                <iframe
                  src={certificatePdf}
                  title="Full UDYAM Certificate"
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
