import React from 'react';
import { LucideIcon } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

interface MetricCardProps {
  metric: {
    title: string;
    value: number;
    growth: number;
    icon: LucideIcon;
    formatter: (value: number) => string;
    negative?: boolean;
  };
  index: number;
}

export default function MetricCard({ metric, index }: MetricCardProps) {
  return (
    <FadeIn delay={200 + index * 100}>
      <div className="relative group bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl backdrop-blur-sm border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-500">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-700" />
        <div className="relative">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <metric.icon className="h-6 w-6 text-purple-400" />
            </div>
            <div className={`flex items-center space-x-1 ${metric.negative ? 'bg-red-500/10' : 'bg-green-500/10'} px-2 py-1 rounded-full`}>
              <span className={`text-xs font-medium ${metric.negative ? 'text-red-400' : 'text-green-400'}`}>
                {metric.growth > 0 ? '+' : ''}{metric.growth}%
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
  );
}