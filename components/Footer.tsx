
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-20 bg-maroon-primary text-center border-t border-maroon-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 mb-10">
          <span className="font-playfair text-2xl font-bold text-cream-primary italic">Yuki & Lyraa</span>
          <div className="w-10 h-px bg-gold-accent opacity-30"></div>
        </div>
        
        <p className="font-poppins text-cream-primary/70 text-[9px] tracking-[0.5em] uppercase mb-8">
          EST. 2025 • JAKARTA 2030
        </p>

        <div className="flex flex-col items-center gap-2 opacity-60">
          <span className="text-[9px] font-bold text-cream-primary/70 uppercase tracking-[0.4em]">
            Dhaka • Indonesia
          </span>
          <span className="text-[10px] font-medium text-cream-primary/60 font-poppins">
            © {new Date().getFullYear()} Yuki Digital Production
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
