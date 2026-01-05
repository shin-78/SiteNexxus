import React from 'react';
import { Rocket } from 'lucide-react';

const RocketAnimation = () => {
  return (
    <div className="absolute right-[10%] top-1/2 -translate-y-1/2 animate-float z-10">
      <Rocket className="h-96 w-96 text-purple-500 opacity-20" />
    </div>
  );
};

export default RocketAnimation;