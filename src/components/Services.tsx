import React from 'react';
import { BarChart, Globe, Code, Users, Megaphone, Brain, ShoppingCart, Zap, Database } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const services = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-purple-500" />,
    title: 'E-commerce',
    description: 'Aumente suas vendas online com estratégias otimizadas de conversão e experiência do usuário.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-purple-500" />,
    title: 'Analytics Avançado',
    description: 'Tome decisões baseadas em dados com análises profundas e insights acionáveis.'
  },
  {
    icon: <Globe className="h-8 w-8 text-purple-500" />,
    title: 'Marketing Digital',
    description: 'Campanhas personalizadas que alcançam seu público-alvo com precisão.'
  },
  {
    icon: <Code className="h-8 w-8 text-purple-500" />,
    title: 'Desenvolvimento Web',
    description: 'Sites modernos e aplicações web que convertem visitantes em clientes.'
  },
  {
    icon: <Users className="h-8 w-8 text-purple-500" />,
    title: 'Consultoria Estratégica',
    description: 'Orientação especializada para maximizar seu ROI em marketing digital.'
  },
  {
    icon: <Megaphone className="h-8 w-8 text-purple-500" />,
    title: 'Social Media',
    description: 'Gestão profissional de redes sociais com foco em engajamento e conversão.'
  },
  {
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    title: 'Automação',
    description: 'Automatize processos e aumente a eficiência do seu marketing.'
  },
  {
    icon: <Database className="h-8 w-8 text-purple-500" />,
    title: 'CRM & Integração',
    description: 'Integração de sistemas para um fluxo de trabalho otimizado.'
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: 'SEO & Performance',
    description: 'Otimização completa para dominar os resultados de busca.'
  }
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={200}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 sm:text-4xl">
              Soluções Completas
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Estratégias integradas para maximizar seus resultados
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={index} delay={300 + index * 100}>
              <div className="relative group h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative h-full bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-800/80 transition-all duration-500 hover:-translate-y-1 border border-purple-500/10">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-4 p-3 bg-purple-500/10 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 flex-grow">
                      {service.description}
                    </p>
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

export default Services;