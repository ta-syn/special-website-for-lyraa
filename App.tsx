
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromisesSection from './components/PromisesSection';
import MemoryTimeline from './components/MemoryTimeline';
import FuturePlans from './components/FuturePlans';
import PhotoGallery from './components/PhotoGallery';
import LoveLetter from './components/LoveLetter';
import GrandFinal from './components/GrandFinal';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative bg-cream-primary selection:bg-maroon-primary selection:text-cream-primary">
      {loading && <Preloader />}
      
      {!loading && (
        <>
          <MusicToggle />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            
            {/* Connection Bridge Section */}
            <div className="py-24 md:py-32 bg-cream-primary flex flex-col items-center overflow-hidden border-y border-cream-dark">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
                  <div className="text-center">
                    <h3 className="font-playfair text-6xl md:text-9xl font-black text-maroon-primary opacity-[0.08]">Y</h3>
                    <p className="font-poppins text-[9px] font-bold text-maroon-light tracking-[0.5em] uppercase -mt-6 md:-mt-10">DHAKA</p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-8 w-full max-w-sm md:max-w-md">
                    <div className="w-full h-[1px] bg-cream-dark relative overflow-hidden">
                      <div className="absolute inset-0 bg-maroon-primary animate-slide-right"></div>
                    </div>
                    <span className="text-[10px] font-bold text-maroon-primary uppercase tracking-[0.6em] text-center">Across The Ocean</span>
                  </div>

                  <div className="text-center">
                    <h3 className="font-playfair text-6xl md:text-9xl font-black text-maroon-primary opacity-[0.1]">L</h3>
                    <p className="font-poppins text-[9px] font-bold text-maroon-light tracking-[0.5em] uppercase -mt-6 md:-mt-10">INDONESIA</p>
                  </div>
                </div>
              </div>
            </div>

            <PromisesSection />
            <MemoryTimeline />
            <PhotoGallery />
            <FuturePlans />
            <LoveLetter />
            <GrandFinal />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
