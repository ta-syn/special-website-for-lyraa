
import React, { useState, useRef, useEffect } from 'react';

const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showNowPlaying, setShowNowPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Local audio sources
  const audioSources = [
    "song/Die With A Smile-(SambalpuriStar.In).mp3",
    "song/Stephen_Sanchez_-_Until_I_Found_You.mp3"
  ];
  const [sourceIndex, setSourceIndex] = useState(0);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        setHasError(false);
        setIsLoading(true);
        
        // Ensure audio is ready
        if (audioRef.current.readyState < 2) {
          audioRef.current.load();
        }
        
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
          setIsLoading(false);
          setShowNowPlaying(true);
          setTimeout(() => setShowNowPlaying(false), 8000);
        }
      } catch (e) {
        console.error("Playback failed, trying next source:", e);
        
        // Check if it's the autoplay policy error
        if (e.name === 'NotAllowedError' && e.message.includes('user didn\'t interact')) {
          // Show user-friendly message instead of trying other sources
          setHasError(true);
          setIsLoading(false);
          return;
        }
        
        handleAudioError();
      }
    }
  };

  const handleSongEnd = () => {
    // When song ends, move to next song and play automatically
    if (sourceIndex < audioSources.length - 1) {
      setSourceIndex(prev => prev + 1);
      setIsPlaying(true);
      // Small delay to ensure audio element updates
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(console.error);
        }
      }, 100);
    } else {
      // If it's the last song, just stop
      setIsPlaying(false);
    }
  };

  const handleAudioError = () => {
    setIsPlaying(false);
    setIsLoading(false);
    
    // If we have more sources, try the next one
    if (sourceIndex < audioSources.length - 1) {
      setSourceIndex(prev => prev + 1);
      // Small delay before retrying with new source
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load();
          togglePlay();
        }
      }, 500);
    } else {
      setHasError(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="fixed bottom-10 right-10 z-[5000] flex flex-col items-end gap-5 group">
      
      {/* "Now Playing" Notification Card */}
      <div className={`mb-4 transition-all duration-1000 transform ${showNowPlaying || (isPlaying && !showNowPlaying) || hasError ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="bg-white/80 backdrop-blur-3xl border border-white/50 px-6 py-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex items-center gap-5">
           <div className={`w-12 h-12 rounded-xl overflow-hidden relative flex items-center justify-center text-xl ${hasError ? 'bg-red-50' : 'bg-luxury-onyx'}`}>
              <div className={`absolute inset-0 bg-luxury-rose/20 ${isPlaying ? 'animate-pulse' : ''}`}></div>
              <span className="relative z-10">
                {hasError ? '❌' : isLoading ? '⌛' : '🎵'}
              </span>
           </div>
           <div className="flex flex-col">
              <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${hasError ? 'text-red-500' : 'text-luxury-rose'}`}>
                {hasError ? 'Link Blocked' : isLoading ? 'Connecting...' : 'Current Track'}
              </span>
              <span className="text-xs font-semibold text-luxury-onyx font-poppins pr-4">
                {hasError ? 'Please click to try alternative link' : 'Die With a Smile — Lady Gaga & Bruno Mars'}
              </span>
           </div>
           
           {hasError && (
             <button 
               onClick={() => { setSourceIndex(0); setHasError(false); togglePlay(); }}
               className="bg-luxury-rose text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest hover:bg-luxury-onyx transition-colors"
             >
               Retry
             </button>
           )}

           {isPlaying && !hasError && !isLoading && (
             <div className="flex gap-1 ml-2">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="w-[2px] h-3 bg-luxury-rose rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
               ))}
             </div>
           )}
        </div>
      </div>

      <div className="flex items-center gap-5">
        {/* Volume Controls */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/60 backdrop-blur-xl border border-white/40 px-6 py-4 rounded-full shadow-xl flex items-center gap-4 translate-x-4 pointer-events-none group-hover:pointer-events-auto group-hover:translate-x-0">
          <span className="text-[9px] font-bold text-maroon-primary uppercase tracking-tighter w-6">VOL</span>
          <div className="relative w-24 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-maroon-primary transition-all duration-300" 
              style={{ width: `${volume * 100}%` }}
            ></div>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Play Button */}
        <button
          onClick={togglePlay}
          className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-white/40 group/btn overflow-hidden ${
            isPlaying ? 'bg-luxury-onyx scale-110' : 'bg-white hover:bg-gray-50'
          } ${hasError ? 'border-red-300' : ''}`}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-luxury-rose border-t-transparent rounded-full animate-spin z-10"></div>
          ) : (
            <div className="flex items-center gap-[3px] h-6 relative z-10">
              {[1, 1, 1, 1, 1].map((_, i) => (
                <div 
                  key={i}
                  className={`w-[2px] rounded-full transition-all duration-500 ${
                    isPlaying ? 'bg-luxury-rose' : 'bg-gray-200 h-1'
                  }`}
                  style={{ 
                    animation: isPlaying ? `audioWave ${1 + i * 0.2}s ease-in-out infinite` : 'none',
                    height: isPlaying ? '100%' : '4px'
                  }}
                ></div>
              ))}
            </div>
          )}

          <div className="absolute inset-0 bg-luxury-rose/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700"></div>
          
          {isPlaying && (
            <div className="absolute inset-0 border-2 border-luxury-rose/20 rounded-full animate-[ping_3s_linear_infinite] opacity-50"></div>
          )}
        </button>
      </div>

      <audio 
        ref={audioRef} 
        preload="auto"
        src={audioSources[sourceIndex]} 
        onError={handleAudioError}
        onEnded={handleSongEnd}
      />

      <style>{`
        @keyframes audioWave {
          0%, 100% { height: 4px; transform: scaleY(1); }
          50% { height: 24px; transform: scaleY(1.2); }
        }
      `}</style>
    </div>
  );
};

export default MusicToggle;
