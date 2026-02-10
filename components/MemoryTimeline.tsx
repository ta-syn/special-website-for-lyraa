
import React from 'react';

const MemoryTimeline: React.FC = () => {
  const history = [
    { year: '2025', event: 'The Digital Genesis', loc: 'Land of Dawn', desc: 'Our first encounter in MLBB global chat. I followed you, you sent the first text, and destiny began writing our story.' },
    { year: '2026', event: 'The Bridge of Echoes', loc: 'Dhaka - Jakarta', desc: 'Transforming voices into reality. Navigating the initial miles through laughter and late-night calls.' },
    { year: '2028', event: 'The Golden Resolve', loc: 'Fortifying Dreams', desc: 'Building the professional and emotional foundations required to bridge the gap between two worlds.' },
    { year: '2030', event: 'The Realization', loc: 'Jakarta Arrival', desc: 'The moment the pixels turn into skin and bone. The end of the wait, the start of forever.' }
  ];

  return (
    <section id="timeline" className="section-padding bg-pearl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
            <span className="text-luxury-rose font-bold text-[10px] uppercase tracking-[0.8em] mb-6 block">Archive Log</span>
            <h2 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-luxury-onyx font-bold tracking-tighter leading-none mb-10">
              The Path to <br/><span className="italic text-luxury-rose font-medium">Us.</span>
            </h2>
            <p className="font-poppins text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-sm">
              Documenting the milestones of a journey that began in 2025, crossing borders and cultures.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col">
            {history.map((item, idx) => (
              <div key={idx} className="group border-b border-luxury-onyx/5 py-12 md:py-20 flex flex-col sm:flex-row gap-8 sm:gap-12 hover:bg-white/40 transition-all px-4 -mx-4">
                <div className="sm:w-1/4">
                  <span className="font-playfair text-5xl md:text-7xl font-black text-luxury-onyx/10 group-hover:text-luxury-rose transition-all duration-700">{item.year}</span>
                </div>
                <div className="sm:w-3/4">
                  <span className="text-luxury-rose font-bold text-[9px] uppercase tracking-[0.4em] mb-3 block">{item.loc}</span>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-luxury-onyx mb-4 group-hover:translate-x-2 transition-transform duration-500">{item.event}</h3>
                  <p className="font-poppins text-gray-400 group-hover:text-luxury-onyx transition-colors text-base md:text-lg font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
