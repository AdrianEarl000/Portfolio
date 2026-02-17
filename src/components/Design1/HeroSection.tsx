"use client";

import Link from "next/link";
import InteractiveGrid from "./InteractiveGrid"; // <--- Import the component

/**
 * MAIN HERO SECTION
 */
export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen bg-[#050505] overflow-hidden flex items-center">
      
      {/* 1. THE INTERACTIVE GRID (Background) */}
      <InteractiveGrid />

      {/* 2. FADE OVERLAY (Horizon) */}
      {/* This gradient hides the top edge of the grid to make it look infinite */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none"></div>

      {/* 3. YOUR CONTENT (Foreground) */}
      {/* pointer-events-none ensures the mouse passes through the text wrapper to hit the grid below */}
      <div className="container mx-auto px-8 relative z-20 grid grid-cols-1 md:grid-cols-2 h-full items-center pointer-events-none">
        
        {/* LEFT: Typography */}
        <div className="flex flex-col justify-center mt-16 md:mt-0 ">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-wide text-white mb-2">
            I<span className="text-green-500">'</span>M
          </h2>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-wider uppercase text-white leading-none pointer-events-none">
            ADRIAN <br />
            EARL <span className="text-green-500"> .</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl tracking-[0.2em] text-gray-400 font-light uppercase pointer-events-none">
            Web Developer
          </p>
          
          {/* Optional CTA Button if you want one */}
          <div className="mt-8">
             <Link href="#portfolio" className="inline-block border border-green-500 text-green-500 px-6 py-3 text-sm font-bold tracking-widest hover:bg-green-500 hover:text-black transition-colors pointer-events-auto">
                VIEW WORK
             </Link>
          </div>
        </div>

        {/* RIGHT: Image Area */}
        <div className="hidden md:block absolute right-0 bottom-0 h-[90%] w-[55%] z-20 pointer-events-none">
           <img
             src="/images/formalPicture.jpg" 
             alt="Adrian Earl Abade"
             className="w-full h-full object-contain object-bottom"
             style={{
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
             }}
           />
        </div>
      </div>
    </section>
  );
}