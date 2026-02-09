
import React from 'react';

interface BucketItem {
  id: string;
  title: string;
  desc: string;
}

const FuturePlans: React.FC = () => {
  const bucketList: BucketItem[] = [
    { id: "A-01", title: "The Jakarta Arrival", desc: "The sensory overload of seeing you for the first time outside of a screen. A physical reality after years of digital waiting." },
    { id: "A-02", title: "The Sanctuary Hug", desc: "A silence that speaks volumes. Holding you tight enough to bridge every single mile that once separated us." },
    { id: "A-03", title: "Tangible Connection", desc: "Feeling the warmth of your hand. No pixels, no lag, just the simple, human magic of being present." },
    { id: "A-04", title: "Midnight Reflections", desc: "A real conversation under the Indonesian stars, finally sharing the same oxygen and the same silence." },
  ];

  return (
    <section id="plans" className="py-40 bg-pearl relative overflow-hidden">
      {/* Structural Decor */}
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gray-100 hidden md:block"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/3 sticky top-32 h-fit">
            <span className="text-luxury-rose font-bold text-[10px] uppercase tracking-[0.8em] mb-8 block">Project 2030</span>
            <h2 className="font-playfair text-6xl md:text-8xl text-luxury-slate font-bold tracking-tighter leading-[0.8]">
              The Reunion <br/> <span className="italic font-medium text-luxury-rose">Ledger.</span>
            </h2>
            <p className="mt-12 font-poppins font-light text-gray-400 leading-relaxed text-lg max-w-sm">
              Our shared aspirations, meticulously archived for the moment the distance becomes zero.
            </p>
            <div className="mt-16 pt-16 border-t border-gray-100">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-luxury-rose/30 flex items-center justify-center text-xs font-bold text-luxury-rose">09</div>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em]">Milestones Scheduled</span>
               </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-px bg-gray-100 border border-gray-100 shadow-2xl overflow-hidden">
            {bucketList.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-12 md:p-16 hover:bg-gray-50 transition-colors group cursor-default"
              >
                <div className="flex items-start gap-10">
                  <span className="text-[10px] font-bold text-luxury-rose mt-1 tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity">
                    [{item.id}]
                  </span>
                  <div>
                    <h3 className="font-playfair text-3xl md:text-4xl text-luxury-slate mb-6 font-bold group-hover:translate-x-2 transition-transform duration-700">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-poppins font-light leading-relaxed text-lg max-w-xl">
                      "{item.desc}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* The Final Commitment Block */}
            <div className="bg-luxury-slate p-16 text-center overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#C19A9B20,_transparent_70%)]"></div>
              <h4 className="font-playfair text-3xl md:text-4xl text-white mb-6 relative z-10 italic">
                "Distance is the cost of a priceless future."
              </h4>
              <p className="text-luxury-rose font-bold text-[9px] uppercase tracking-[0.8em] relative z-10">
                Jakarta • May 30, 2030
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;
