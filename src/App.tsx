/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { countries } from './data';
import { ArrowRight } from 'lucide-react';
import { trackLinkClick, trackPageView } from './lib/analytics';

export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    trackPageView();
  }, []);

  // Brandbook specifies using hard edges WITH round edges.
  const shapeClasses = [
    "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-none rounded-bl-none",
    "rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-none rounded-br-none",
    "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-none rounded-bl-none",
  ];

  return (
    <div className="h-screen w-screen bg-brand-light text-brand-dark flex flex-col p-4 md:p-8 relative selection:bg-brand-tangerine selection:text-white">
      {/* Brand Header */}
      <header className="flex justify-center z-50">
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center">
            <img src="/logo.png" alt="Mojaa" className="h-10 md:h-12 object-contain" />
          </div>
          <h1 className="mt-4 text-sm md:text-lg font-title font-normal tracking-[0.16em] lowercase max-w-xl">
            choose your store
          </h1>
        </div>
      </header>

      {/* Main Content - No Scroll Viewport Grid */}
      <main className="flex-1 flex flex-col md:flex-row gap-3 md:gap-6 mt-6 mb-6 relative z-10 w-full max-w-[1400px] mx-auto">
        {countries.map((country, idx) => {
          const isHovered = hoveredIndex === idx;
          const isDimmed = hoveredIndex !== null && hoveredIndex !== idx;

          return (
            <motion.a
              key={country.code}
              href={country.url}
              className={`relative flex-1 block overflow-hidden group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${shapeClasses[idx]} ${
                isHovered ? 'md:flex-[1.5]' : isDimmed ? 'md:flex-[0.75] opacity-50 grayscale' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => trackLinkClick({ label: country.name, destination: country.url })}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            >
              {/* Vibrant Background Image */}
              <div 
                className={`absolute inset-0 bg-cover transition-transform duration-1000 ease-out ${country.bgClass} ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
                style={{ 
                  backgroundImage: `url(${country.image})`
                }}
              />
              
              {/* Gradient overlay for readability */}
              <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-b from-black/20 via-transparent to-black/80 ${
                isHovered ? 'bg-black/10' : 'bg-black/30'
              }`} />

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-3xl md:text-4xl block mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      {country.flag}
                    </span>
                    <h2 className="text-2xl md:text-5xl font-header font-black uppercase tracking-tight">
                      {country.name}
                    </h2>
                  </div>
                  
                  {/* Action Button - Hard/Round edges */}
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-tangerine text-white flex items-center justify-center rounded-tl-2xl rounded-br-2xl transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 shadow-xl">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="z-50 flex justify-between items-center text-[10px] md:text-xs font-bold tracking-widest text-black/40 uppercase">
        <span>© {new Date().getFullYear()} Mojaa</span>
        <div className="flex gap-4 md:gap-8">
          <a href="/privacy.html" className="hover:text-brand-tangerine transition-colors" rel="noopener">Privacy</a>
          <a href="/terms.html" className="hover:text-brand-tangerine transition-colors" rel="noopener">Terms</a>
        </div>
      </footer>
    </div>
  );
}
