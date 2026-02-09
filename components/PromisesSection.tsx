
import React from 'react';
import confetti from 'canvas-confetti';

const PromisesSection: React.FC = () => {
  const oaths = [
    { id: '01', title: 'Loyalty', desc: 'To remain your anchor amidst the rising tides of distance.', icon: '✧' },
    { id: '02', title: 'Presence', desc: 'To be there in spirit until the day I can be there in person.', icon: '✦' },
    { id: '03', title: 'Elevation', desc: 'To build a life that is worthy of the heart you’ve entrusted to me.', icon: '✶' },
    { id: '04', title: 'Sanctuary', desc: 'To ensure your happiness is the only metric that matters.', icon: '✷' }
  ];

  const triggerCelebrate = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#800020', '#FFF6E5', '#D4AF37']
    });
  };

  return (
    <section id="promises" className="py-40 bg-maroon-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_rgba(255,246,229,0.08),_transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 border-b border-cream-primary/20 pb-16">
          <div className="max-w-2xl">
             <span className="text-gold-accent font-bold text-[10px] uppercase tracking-[1em] mb-8 block">Project Manifest</span>
             <h2 className="font-playfair text-6xl md:text-9xl text-cream-primary font-bold tracking-tighter leading-none">
               The Four <br/><span className="italic text-gold-accent font-medium">Oaths.</span>
             </h2>
          </div>
          <button 
            onClick={triggerCelebrate}
            className="mt-10 md:mt-0 text-[10px] font-bold text-cream-primary uppercase tracking-[0.5em] border border-cream-primary/30 px-10 py-5 rounded-full hover:bg-cream-primary hover:text-maroon-primary transition-all duration-700"
          >
            Acknowledge Vows
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-primary/10 border border-cream-primary/20 shadow-2xl">
          {oaths.map((oath) => (
            <div key={oath.id} className="bg-maroon-primary p-16 group hover:bg-cream-primary transition-all duration-700 cursor-default">
              <span className="text-gold-accent font-bold text-[11px] mb-12 block group-hover:text-maroon-primary">[{oath.id}]</span>
              <div className="text-4xl text-cream-primary/30 mb-10 group-hover:text-maroon-primary transition-colors">{oath.icon}</div>
              <h3 className="font-playfair text-3xl font-bold text-cream-primary mb-6 group-hover:text-maroon-primary transition-colors">{oath.title}</h3>
              <p className="text-cream-primary/70 font-poppins font-light leading-relaxed group-hover:text-maroon-primary transition-colors">
                "{oath.desc}"
              </p>
              <div className="mt-12 w-8 h-px bg-luxury-rose group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromisesSection;
