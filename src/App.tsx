import React from 'react';
import { Flyer } from './components/Flyer';
import InfinityBackground from './components/InfinityBackground';

export function App() {
  return (
    <InfinityBackground>
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-400">
        <Flyer />
      </div>
    </InfinityBackground>
  );
}
