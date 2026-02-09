
import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-pearl z-[9999] flex flex-col items-center justify-center">
      <div className="w-16 h-16 relative mb-10">
        <div className="absolute inset-0 border-[1px] border-gray-100 rounded-full"></div>
        <div className="absolute inset-0 border-t-[1px] border-luxury-rose rounded-full animate-spin"></div>
      </div>
      <div className="overflow-hidden">
        <h2 className="font-playfair text-xl tracking-[0.4em] uppercase text-gray-800 animate-reveal-text">
          Y&L STUDIO
        </h2>
      </div>
      <p className="mt-4 font-poppins text-[9px] text-gray-300 uppercase tracking-[0.6em] animate-pulse">
        Initializing Premium Experience
      </p>
    </div>
  );
};

export default Preloader;
