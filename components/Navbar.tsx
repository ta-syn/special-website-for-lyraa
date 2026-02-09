
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-1000 ${
        isScrolled ? 'bg-maroon-primary/90 backdrop-blur-xl py-5 shadow-sm border-b border-maroon-dark' : 'bg-transparent py-10'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="font-playfair text-xl md:text-2xl font-black tracking-tighter text-cream-primary group">
          Y&L <span className="text-gold-accent text-[10px] uppercase tracking-[0.4em] font-bold ml-3 opacity-60 group-hover:opacity-100 transition-opacity">Studio</span>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {[
            { name: 'Manifest', link: '#promises' },
            { name: 'History', link: '#timeline' },
            { name: 'Gallery', link: '#gallery' },
            { name: 'The Letter', link: '#letter' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-[10px] font-bold text-cream-primary hover:text-gold-accent uppercase tracking-[0.4em] transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block h-px w-8 bg-cream-primary/20"></div>
          <span className="text-[10px] font-bold text-gold-accent uppercase tracking-[0.4em]">Opus 2030</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
