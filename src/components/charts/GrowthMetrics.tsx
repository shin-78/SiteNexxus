import React from 'react';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';
import { agencyMetrics } from '../../data/metrics';
import FadeIn from '../animations/FadeIn';

const iconMap = {
  TrendingUp,
  Users,
  Target,
  DollarSign
};

const GrowthMetrics = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Métricas Nexxus Digital
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agencyMetrics.map((metric, index) => (
          <FadeIn key={index} delay={200 + index * 100}>
            <div className="relative group bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl backdrop-blur-sm border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-500">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-700" />
              <div className="relative">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    {React.createElement(iconMap[metric.icon as keyof typeof iconMap], {
                      className: "h-6 w-6 text-purple-400"
                    })}
                  </div>
                  <div className="flex items-center space-x-1 bg-green-500/10 px-2 py-1 rounded-full">
                    <span className="text-xs font-medium text-green-400">
                      +{metric.growth}%
                    </span>
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {metric.formatter(metric.value)}
                  </h3>
                </div>
                <p className="text-sm text-gray-400">{metric.title}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default GrowthMetrics;