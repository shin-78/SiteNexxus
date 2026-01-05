import React from 'react';
import { Activity } from 'lucide-react';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(value);
};

const GrowthChart = () => {
  const monthlyData = [
    { month: 'Jan', value: 45000 },
    { month: 'Fev', value: 95000 },
    { month: 'Mar', value: 150000 },
    { month: 'Abr', value: 220000 },
    { month: 'Mai', value: 280000 },
    { month: 'Jun', value: 340000 },
    { month: 'Jul', value: 390000 },
    { month: 'Ago', value: 430000 },
    { month: 'Set', value: 460000 },
    { month: 'Out', value: 480000 },
    { month: 'Nov', value: 490000 },
    { month: 'Dez', value: 500000 }
  ];

  const maxValue = Math.max(...monthlyData.map(d => d.value));

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl backdrop-blur-sm border border-purple-500/20 p-6">
      <div className="relative h-[300px] mx-4">
        {/* Grid lines with values */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center w-full">
              <span className="text-xs text-gray-400 w-16 text-right pr-2">
                {formatCurrency((maxValue / 4) * (4 - i))}
              </span>
              <div className="flex-1 border-t border-purple-500/10" />
            </div>
          ))}
        </div>

        {/* Bars */}
        <div className="absolute inset-0 flex items-end pl-16">
          {monthlyData.map((data, i) => {
            const height = (data.value / maxValue) * 100;
            
            return (
              <div
                key={i}
                className="relative flex-1 h-full flex items-end group"
              >
                <div className="w-[70%] mx-auto">
                  {/* Bar */}
                  <div 
                    className="w-full bg-gradient-to-t from-purple-500/40 to-pink-500/40 rounded-t-lg transition-all duration-300 group-hover:from-purple-500/60 group-hover:to-pink-500/60 shadow-lg"
                    style={{ height: `${height}%` }}
                  />

                  {/* Value tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="text-xs font-medium text-white bg-purple-600 px-2 py-1 rounded-md shadow-lg">
                      {formatCurrency(data.value)}
                    </span>
                  </div>

                  {/* Month label */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform rotate-45 translate-y-8">
                    <span className="text-xs font-medium text-gray-400">
                      {data.month}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16 flex justify-between items-center border-t border-purple-500/20 pt-4">
        <div className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-purple-500 animate-pulse" />
          <span className="text-sm font-medium text-gray-400">Crescimento Mensal</span>
        </div>
      </div>
    </div>
  );
};

export default GrowthChart;