
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date('May 30, 2030 00:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((diff % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center bg-cream-primary px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Monumental Letters */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.015]">
        <h2 className="font-playfair font-black text-[35vw] leading-none select-none">OPUS</h2>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 border-b border-maroon-primary/10 pb-10">
          <div className="text-left animate-reveal">
            <span className="text-[10px] font-bold tracking-[0.6em] text-maroon-primary uppercase mb-4 block">International Edition • Vol. 05</span>
            <h1 className="font-playfair text-6xl sm:text-7xl md:text-[11rem] lg:text-[14rem] font-black text-maroon-primary leading-[0.8] tracking-tighter">
              YUKI<span className="italic text-maroon-light font-medium">&</span><br/>LYRAA
            </h1>
          </div>
          <div className="text-left md:text-right mt-8 md:mt-0">
            <p className="font-poppins text-[10px] font-bold tracking-[0.4em] text-maroon-light uppercase leading-relaxed">
              DHAKA, BD <br className="hidden md:block"/> JAKARTA, ID
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16 items-start">
          <div className="md:col-span-5 animate-reveal" style={{ animationDelay: '0.3s' }}>
            <p className="font-poppins text-base md:text-xl text-maroon-light font-light leading-relaxed max-w-md">
              A digital manifest celebrating the journey that began in 2025. A promise that transcends the Indian Ocean, waiting for May 30, 2030.
            </p>
            <div className="mt-10 flex flex-wrap gap-8">
                <a href="#promises" className="text-[10px] font-bold uppercase tracking-[0.3em] text-maroon-primary border-b border-maroon-light pb-2 hover:text-maroon-light transition-colors">The Vows</a>
                <a href="#plans" className="text-[10px] font-bold uppercase tracking-[0.3em] text-maroon-light hover:text-maroon-primary transition-colors">Itinerary</a>
            </div>
          </div>

          <div className="md:col-span-7 flex justify-start md:justify-end animate-reveal" style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
              {[
                { label: 'Days', val: timeLeft.days },
                { label: 'Hrs', val: timeLeft.hours },
                { label: 'Min', val: timeLeft.mins },
                { label: 'Sec', val: timeLeft.secs },
              ].map(t => (
                <div key={t.label} className="flex flex-col items-start md:items-center">
                  <span className="font-playfair text-4xl sm:text-5xl md:text-7xl font-black text-luxury-onyx tabular-nums">{String(t.val).padStart(2, '0')}</span>
                  <span className="text-[9px] font-bold text-luxury-rose uppercase tracking-[0.4em] mt-3">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-20 hover:opacity-100 transition-opacity">
        <div className="w-px h-12 bg-luxury-onyx"></div>
      </div>
    </section>
  );
};

export default Hero;
