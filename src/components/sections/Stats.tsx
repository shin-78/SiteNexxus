import React from 'react';
import { Users, Award, Briefcase, TrendingUp } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const stats = [
  {
    icon: <Users className="h-8 w-8 text-purple-500" />,
    value: '500+',
    label: 'Clientes Atendidos',
  },
  {
    icon: <Award className="h-8 w-8 text-purple-500" />,
    value: '98%',
    label: 'Taxa de Satisfação',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-purple-500" />,
    value: '1000+',
    label: 'Projetos Entregues',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
    value: '200%',
    label: 'Média de Crescimento',
  },
];

const Stats = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 200}>
              <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
                {stat.icon}
                <div className="mt-4 text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;