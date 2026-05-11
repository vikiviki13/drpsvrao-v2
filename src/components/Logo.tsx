import React from 'react';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export default function Logo({ className = "w-8 h-8", isScrolled = true }: LogoProps) {
  const baseColor = isScrolled ? "text-maroon-600" : "text-white";
  const copperColor = "text-copper-500";

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} ${baseColor}`}>
      {/* Central spine */}
      <line x1="50" y1="25" x2="50" y2="85" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Geometric Head */}
      <polygon points="50,5 60,15 50,25 40,15" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      <circle cx="50" cy="15" r="2.5" className={copperColor} fill="currentColor" />

      {/* DNA Helix wrapping the spine */}
      <path d="M 40 35 C 65 45, 65 65, 40 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 60 35 C 35 45, 35 65, 60 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Circuit Arms (Copper) */}
      <path d="M 50 35 L 70 35 L 80 25" className={copperColor} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="80" cy="25" r="2.5" className={copperColor} fill="currentColor" />
      <circle cx="70" cy="35" r="1.5" className={copperColor} fill="currentColor" />

      <path d="M 50 35 L 30 35 L 20 25" className={copperColor} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="20" cy="25" r="2.5" className={copperColor} fill="currentColor" />
      <circle cx="30" cy="35" r="1.5" className={copperColor} fill="currentColor" />

      {/* Circuit Legs (Copper) */}
      <path d="M 50 75 L 65 75 L 75 85" className={copperColor} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="75" cy="85" r="2.5" className={copperColor} fill="currentColor" />

      <path d="M 50 75 L 35 75 L 25 85" className={copperColor} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="25" cy="85" r="2.5" className={copperColor} fill="currentColor" />

      {/* Nodes on the spine */}
      <circle cx="50" cy="35" r="3" fill="currentColor" />
      <circle cx="50" cy="55" r="3" fill="currentColor" />
      <circle cx="50" cy="75" r="3" fill="currentColor" />
    </svg>
  );
}
