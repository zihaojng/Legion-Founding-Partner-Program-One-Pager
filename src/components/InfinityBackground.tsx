import { useEffect } from 'react';

import React from 'react';

export default function InfinityBackground({ children }: { children: React.ReactNode }) {
  // Base64 background data
  const bgUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC";

  // Animation style as a CSS-in-JS object
  const animationStyle = {
    backgroundImage: `url(${bgUrl})`,
    backgroundRepeat: 'repeat',
    backgroundPosition: '0 0',
    animation: 'bgScrollingReverse 1.84s infinite linear',
  };

  // Add the keyframes animation to the document
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes bgScrollingReverse {
        100% { background-position: 50px 50px; }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div 
      className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-400"
      style={animationStyle}
    >
      {children}
    </div>
  );
}
