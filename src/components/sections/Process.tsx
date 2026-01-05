import React from 'react';
import { Search, PenTool, Zap, BarChart2 } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const steps = [
  {
    icon: <Search className="h-8 w-8 text-purple-500" />,
    title: 'Análise',
    description: 'Diagnóstico completo do seu negócio e identificação de oportunidades.',
  },
  {
    icon: <PenTool className="h-8 w-8 text-purple-500" />,
    title: 'Estratégia',
    description: 'Desenvolvimento de plano personalizado alinhado aos seus objetivos.',
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: 'Implementação',
    description: 'Execução das estratégias com agilidade e precisão.',
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-purple-500" />,
    title: 'Otimização',
    description: 'Monitoramento contínuo e ajustes para maximizar resultados.',
  },
];

const Process = () => {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Nosso Processo
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 200} direction="up">
              <div className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                )}
                <div className="bg-gray-800 p-6 rounded-lg relative z-10">
                  <div className="flex flex-col items-center text-center">
                    {step.icon}
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;