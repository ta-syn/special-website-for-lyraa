
import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const LoveLetter: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [generatedPromise, setGeneratedPromise] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.7 },
      colors: ['#800020', '#FFF6E5', '#D4AF37']
    });
    }
  };

  const generateAIPromise = () => {
    setIsGenerating(true);
    
    // Static romantic promises instead of AI-generated
    const promises = [
      "I promise that every mile between us is just a reason to love you more.",
      "I promise to hold you until the stars forget how to shine.",
      "I promise to build a future where distance is just a memory.",
      "I promise that my love for you will outlast every sunset we're apart.",
      "I promise to cherish every moment with you like it's our first and last."
    ];
    
    // Simulate loading delay
    setTimeout(() => {
      const randomPromise = promises[Math.floor(Math.random() * promises.length)];
      setGeneratedPromise(randomPromise);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <section id="letter" className="py-40 bg-cream-primary relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-24 max-w-xl">
          <h2 className="font-playfair text-5xl md:text-7xl text-maroon-primary font-bold italic tracking-tighter">The Letter</h2>
          <div className="w-12 h-px bg-maroon-primary/30 mx-auto mt-6"></div>
        </div>

        {!isRevealed ? (
          /* Premium Sealed Envelope */
          <div 
            onClick={handleReveal}
            className="w-full max-w-2xl aspect-[16/10] bg-cream-primary rounded-lg border border-maroon-primary/20 flex flex-col items-center justify-center cursor-pointer hover:scale-[1.01] transition-all duration-1000 shadow-[0_40px_100px_-20px_rgba(128,0,32,0.08)] group relative overflow-hidden"
          >
            <div className="w-24 h-24 bg-maroon-primary rounded-full flex items-center justify-center border-4 border-cream-primary shadow-2xl z-10 transform group-hover:scale-110 transition-transform">
              <span className="text-cream-primary font-playfair font-black text-3xl">Y&L</span>
            </div>
            <p className="font-playfair italic text-xl text-maroon-primary/70 mt-8">For your eyes only, Lyraa.</p>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-maroon-primary/10 to-transparent"></div>
          </div>
        ) : (
          /* High-End Stationery */
          <div className="w-full max-w-4xl bg-cream-primary shadow-[0_50px_150px_-30px_rgba(128,0,32,0.1)] p-12 md:p-24 rounded-sm animate-fade-up relative overflow-hidden border border-maroon-primary/20">
            {/* Subtle Texture Layer */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
            
            <div className="relative z-10 font-serif">
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-maroon-primary mb-16 border-b border-maroon-primary/20 pb-8">Dearest Lyraa,</h3>
              
              <div className="space-y-10 text-lg md:text-xl text-maroon-primary/80 leading-relaxed font-light">
                <p>
                  Distance is merely a test to see how far love can travel. In our case, it has traveled across continents and oceans only to find a permanent home in you.
                </p>
                <p>
                  Every promise I make today is not just a word; it is a brick in the foundation of our future. I promise to be the man you deserve—consistent, kind, and ever-present, even when I am physically miles away.
                </p>
              </div>

              {/* Minimalist AI Promise */}
              <div className="my-20 p-12 border-l-2 border-maroon-primary bg-cream-primary/50 italic text-maroon-primary text-2xl font-playfair">
                {generatedPromise ? (
                  <p className="animate-fade-up">"{generatedPromise}"</p>
                ) : (
                  <button 
                    onClick={generateAIPromise}
                    disabled={isGenerating}
                    className="text-maroon-primary hover:text-maroon-dark transition-colors uppercase text-[11px] font-bold tracking-[0.3em]"
                  >
                    {isGenerating ? 'Drawing from the soul...' : '✨ Create a unique promise'}
                  </button>
                )}
              </div>

              <p className="text-lg md:text-xl text-maroon-primary/80 font-light leading-relaxed">
                I am counting the days, the hours, and the breaths until I can tell you this in person. Until then, hold these promises close.
              </p>

              <div className="mt-20 flex flex-col items-end">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-4">Yours, with everything I am,</p>
                <span className="text-7xl md:text-9xl font-dancing text-luxury-rose">Yuki</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoveLetter;
