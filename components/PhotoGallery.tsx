
import React, { useState } from 'react';

interface GalleryImage {
  id: string;
  url: string;
  size: string;
  title: string;
  location: string;
  date: string;
  description: string;
}

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    { 
      id: 'EXH-01',
      // High-end gaming aesthetic for the 2025 MLBB encounter
      url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1600', 
      size: 'md:col-span-8 md:row-span-2', 
      title: 'The Land of Dawn',
      location: 'Digital Space',
      date: 'May 2025',
      description: 'The genesis of us. Amidst the chaos of competitive gaming, two souls found a rhythm that transcended the screen. This frame represents the neon pulse of our beginning in 2025.'
    },
    { 
      id: 'EXH-02',
      // REAL IMAGE: Dhaka Skyline at Night (Direct Wikimedia Link)
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Dhaka_Skyline_at_Night.jpg', 
      size: 'md:col-span-4', 
      title: 'Dhaka Twilight',
      location: 'Dhaka, Bangladesh',
      date: 'Archive 2026',
      description: 'The real night view of Dhaka. Representing the quiet moments of longing when the city lights reflect the distance between my heart and yours.'
    },
    { 
      id: 'EXH-03',
      // REAL IMAGE: Jakarta Skyline at Night (Direct Wikimedia Link)
      url: 'https://images.pexels.com/photos/35239459/pexels-photo-35239459.jpeg', 
      size: 'md:col-span-4', 
      title: 'Jakarta Skyline',
      location: 'Jakarta, Indonesia',
      date: 'Destiny 2030',
      description: 'The Sudirman Business District at night. A symbol of the vibrant metropolis where our paths will finally converge for good.'
    },
    { 
      id: 'EXH-04',
      // Visualizing digital connection/voice waves
      url: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1600', 
      size: 'md:col-span-6 md:row-span-2', 
      title: 'Echoes of Voices',
      location: 'Tele-Connection',
      date: 'Perpetual',
      description: 'The invisible thread. Thousands of hours of audio, waves of laughter, and the shared silence that made the distance feel like just a number.'
    },
    { 
      id: 'EXH-05',
      // High-end airport/departure aesthetic
      url: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&q=80&w=1600', 
      size: 'md:col-span-6', 
      title: 'The Final Boarding',
      location: 'Departure Hub',
      date: 'Scheduled 2030',
      description: 'The physical bridge. This exhibit captures the anticipation of the final flight that turns a long-distance promise into a local reality.'
    },
  ];

  return (
    <section id="gallery" className="py-40 bg-cream-primary relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-32 text-center">
          <span className="text-gold-accent font-bold text-[10px] uppercase tracking-[1.2em] mb-8 block">Curated Archive</span>
          <h2 className="font-playfair text-6xl md:text-9xl text-maroon-primary font-bold tracking-tighter leading-none">
            Frames of <br/><span className="italic text-gold-accent font-medium">Devotion.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          {images.map((img) => (
            <div 
              key={img.id} 
              onClick={() => setSelectedImage(img)}
              className={`${img.size} relative group overflow-hidden bg-cream-primary shadow-xl cursor-none hover:shadow-2xl transition-all duration-1000`}
            >
              <img 
                src={img.url} 
                className="w-full h-full min-h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" 
                alt={img.title}
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-maroon-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-between p-10">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-bold text-cream-primary uppercase tracking-[0.5em]">{img.id}</span>
                  <div className="w-10 h-10 rounded-full border border-cream-primary/30 flex items-center justify-center">
                    <span className="text-cream-primary text-xs">+</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gold-accent uppercase tracking-[0.6em] mb-3 block">{img.location}</span>
                  <p className="font-playfair text-3xl text-cream-primary italic font-medium">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Detail Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 md:p-12 lg:p-20">
          <div 
            className="absolute inset-0 bg-maroon-primary/95 backdrop-blur-2xl transition-all duration-700"
            onClick={() => setSelectedImage(null)}
          ></div>
          
          <div className="relative w-full max-w-7xl h-full flex flex-col lg:flex-row bg-cream-primary overflow-hidden shadow-[0_50px_100px_rgba(128,0,32,0.3)] animate-reveal">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 z-50 group"
            >
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-cream-primary/70 group-hover:text-maroon-primary transition-colors">Close Exhibit</span>
              <div className="w-10 h-px bg-cream-primary/30 mt-2 group-hover:bg-gold-accent transition-all"></div>
            </button>

            <div className="lg:w-2/3 h-2/3 lg:h-full overflow-hidden bg-cream-primary">
              <img 
                src={selectedImage.url} 
                className="w-full h-full object-cover" 
                alt={selectedImage.title}
              />
            </div>

            <div className="lg:w-1/3 h-1/3 lg:h-full p-10 md:p-16 flex flex-col justify-center bg-cream-primary">
              <span className="text-gold-accent font-bold text-[10px] uppercase tracking-[0.8em] mb-10 block">[{selectedImage.id}]</span>
              
              <div className="mb-12">
                <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-black text-maroon-primary leading-tight tracking-tighter mb-4">
                  {selectedImage.title}
                </h3>
                <div className="flex gap-4 items-center">
                  <span className="text-[10px] font-bold text-maroon-primary/60 uppercase tracking-[0.3em]">{selectedImage.location}</span>
                  <div className="w-4 h-px bg-maroon-primary/20"></div>
                  <span className="text-[10px] font-bold text-maroon-primary/60 uppercase tracking-[0.3em]">{selectedImage.date}</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 top-0 w-px h-full bg-gold-accent/30"></div>
                <p className="font-poppins text-maroon-primary/80 text-lg lg:text-xl font-light leading-relaxed italic">
                  "{selectedImage.description}"
                </p>
              </div>

              <div className="mt-16 flex flex-col items-start opacity-30">
                 <span className="text-[9px] font-bold uppercase tracking-[0.5em] mb-2 text-maroon-primary/60">Authenticated By</span>
                 <span className="font-playfair italic text-xl text-maroon-primary/70">Yuki & Lyraa Studio</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
