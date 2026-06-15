import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisionSection } from './components/VisionSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-subtle relative flex flex-col font-sans overflow-x-hidden">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col relative z-10">
        <Hero />
        <VisionSection />
      </main>

      {/* Background decorations for a subtle premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </div>
  );
}

export default App;
