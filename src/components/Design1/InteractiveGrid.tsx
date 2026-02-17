"use client";

import { useEffect, useRef, useState } from "react";

/**
 * THE GRID COMPONENT
 * Generates 1600 tiles for the interactive floor.
 */
export default function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  // We use standard React state to render the tiles to avoid direct DOM manipulation issues
  // 40x40 grid = 1600 tiles
  const tiles = Array.from({ length: 1600 });

  return (
    <div className="absolute inset-0 overflow-hidden perspective-container pointer-events-auto z-0">
      <div
        className="grid-plane"
        style={{
          // This tilts the plane to create the 3D floor effect
          transform: "perspective(1000px) rotateX(60deg) scale(2)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="grid grid-cols-[repeat(40,1fr)] w-full h-full">
          {tiles.map((_, i) => (
            <div
              key={i}
              className="w-full h-full border-[0.5px] border-white/5 transition-colors duration-500 hover:bg-green-500/80 hover:duration-0 hover:delay-0"
              style={{
                // Optional: add a slight fade delay for the "trail" effect
                transitionProperty: "background-color",
              }}
            />
          ))}
        </div>
      </div>

      {/* Internal CSS for this specific 3D effect */}
      <style jsx>{`
        .perspective-container {
          perspective: 1000px;
        }
        .grid-plane {
          width: 100%;
          height: 200%; /* Make it taller so it stretches into the horizon */
          position: absolute;
          top: -50%; /* Center the perspective */
          left: 0;
          transform-origin: center center;
        }
      `}</style>
    </div>
  );
}