
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const GrandFinal: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleFinalCelebrate = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C19A9B', '#FDFCF8', '#2D2D2D']
    });
  };

  return (
    <section className="relative min-h-screen bg-luxury-slate flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#C19A9B15,_transparent_70%)] opacity-40"></div>
      </div>

      <div className={`relative z-10 transition-all duration-[2500ms] ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="mb-24">
          <span className="text-luxury-rose font-bold text-[11px] uppercase tracking-[1em] mb-10 block">Final Destination</span>
          <h2 className="font-playfair text-7xl md:text-[12rem] text-white font-bold tracking-tighter mb-10 leading-tight">
            See You <br/> <span className="text-luxury-rose italic">In Jakarta.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32 px-6 max-w-6xl mx-auto">
          <div className="p-12 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col items-center group hover:bg-white/[0.04] transition-all">
            <p className="text-4xl font-playfair font-bold text-white mb-3 tracking-widest">DHAKA</p>
            <p className="text-[10px] font-bold text-luxury-rose uppercase tracking-[0.5em]">Departure</p>
          </div>
          <div className="p-12 rounded-3xl border border-luxury-rose/20 bg-luxury-rose/[0.03] scale-110 flex flex-col items-center shadow-2xl">
            <p className="text-5xl font-playfair font-bold text-white mb-3 tracking-widest">2030</p>
            <p className="text-[10px] font-bold text-luxury-rose uppercase tracking-[0.5em]">The Year of Us</p>
          </div>
          <div className="p-12 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col items-center group hover:bg-white/[0.04] transition-all">
            <p className="text-4xl font-playfair font-bold text-white mb-3 tracking-widest">JAKARTA</p>
            <p className="text-[10px] font-bold text-luxury-rose uppercase tracking-[0.5em]">Arrival</p>
          </div>
        </div>

        <button 
          onClick={handleFinalCelebrate}
          className="group relative bg-white text-luxury-slate font-poppins font-bold px-24 py-9 rounded-full text-[11px] tracking-[0.5em] uppercase shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:bg-luxury-rose hover:text-white transition-all duration-700 overflow-hidden"
        >
          <span className="relative z-10">Seal The Commitment</span>
          <div className="absolute inset-0 bg-luxury-rose -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        </button>

        <p className="mt-24 font-dancing text-4xl text-gray-400 max-w-2xl mx-auto italic opacity-60">
          "For Lyraa—the reason every mile is a gift."
        </p>
      </div>
    </section>
  );
};

export default GrandFinal;
