import React from 'react';
import SmoothReveal from '../animations/SmoothReveal';
import GrowthMetrics from '../charts/GrowthMetrics';
import EcommerceMetrics from '../charts/EcommerceMetrics';

export default function ProductShowcase() {
  return (
    <div className="bg-black/90 backdrop-blur-sm py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-24">
          <SmoothReveal delay={200}>
            <GrowthMetrics />
          </SmoothReveal>

          <SmoothReveal delay={400}>
            <EcommerceMetrics />
          </SmoothReveal>
        </div>
      </div>
    </div>
  );
}