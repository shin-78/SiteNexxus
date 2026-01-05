import React from 'react';

const metrics = [
  { 
    label: 'Conversões', 
    value: '4.847',
    change: '+35%',
    description: 'vs. mês anterior'
  },
  { 
    label: 'Receita', 
    value: 'R$ 500K',
    change: '+42%',
    description: 'crescimento'
  },
  { 
    label: 'Leads', 
    value: '5.159',
    change: '+28%',
    description: 'qualificados'
  },
  { 
    label: 'ROI', 
    value: '3,12%',
    change: '+55%',
    description: 'retorno'
  }
];

const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">{metric.label}</span>
            <span className="text-green-500">{metric.change}</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
          <div className="text-sm text-gray-500">{metric.description}</div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(MetricsGrid);