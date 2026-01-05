import React, { useMemo } from 'react';
import { Activity, TrendingUp } from 'lucide-react';

const formatValue = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(value);
};

const LiveChart = () => {
  const monthlyData = useMemo(() => [
    { month: 'Jan', value: 45000 },
    { month: 'Fev', value: 52000 },
    { month: 'Mar', value: 61000 },
    { month: 'Abr', value: 58000 },
    { month: 'Mai', value: 72000 },
    { month: 'Jun', value: 68000 },
    { month: 'Jul', value: 85000 },
    { month: 'Ago', value: 82000 },
    { month: 'Set', value: 91000 },
    { month: 'Out', value: 89000 },
    { month: 'Nov', value: 95000 },
    { month: 'Dez', value: 98000 },
  ], []);

  const maxValue = useMemo(() => Math.max(...monthlyData.map(d => d.value)), [monthlyData]);

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl backdrop-blur-sm border border-purple-500/20 p-6">
      <div className="flex flex-col h-[400px]">
        <div className="flex items-end space-x-2 h-[300px]">
          {monthlyData.map((data, i) => (
            <div key={i} className="flex-1 flex flex-col items-center group">
              <div className="relative w-full flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-purple-500/20 to-pink-500/20 rounded-t transition-all duration-300 ease-out group-hover:from-purple-500/40 group-hover:to-pink-500/40"
                  style={{
                    height: `${(data.value / maxValue) * 100}%`
                  }}
                />
                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-white bg-purple-500/90 px-2 py-1 rounded">
                    {formatValue(data.value)}
                  </span>
                </div>
              </div>
              <span className="text-xs text-gray-400 mt-2">{data.month}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between items-center border-t border-purple-500/20 pt-4">
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-purple-500 animate-pulse" />
            <span className="text-sm text-gray-400">Crescimento Mensal</span>
          </div>
          <TrendingUp className="h-5 w-5 text-pink-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default LiveChart;