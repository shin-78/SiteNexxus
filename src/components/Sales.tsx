import React from 'react';
import { Check, Zap, Shield, Award } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const plans = [
  {
    name: 'Starter',
    price: 'R$ 1.997',
    description: 'Ideal para pequenas empresas iniciando no digital',
    features: [
      'Análise de mercado',
      'Setup inicial de campanhas',
      'Otimização mensal',
      'Relatórios mensais',
      'Suporte por email'
    ]
  },
  {
    name: 'Professional',
    price: 'R$ 3.997',
    description: 'Perfect for growing businesses',
    popular: true,
    features: [
      'Tudo do Starter',
      'Estratégia personalizada',
      'Otimização semanal',
      'Relatórios semanais',
      'Suporte prioritário',
      'Consultoria mensal'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Consulte',
    description: 'Soluções customizadas para grandes empresas',
    features: [
      'Tudo do Professional',
      'Estratégia dedicada',
      'Otimização diária',
      'Relatórios personalizados',
      'Suporte 24/7',
      'Consultoria semanal',
      'Time dedicado'
    ]
  }
];

const Sales = () => {
  return (
    <div id="pricing" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold gradient-text sm:text-4xl mb-4">
              Invista no Seu Crescimento
            </h2>
            <p className="text-xl text-gray-400">
              Escolha o plano ideal para sua empresa
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={200 * index}>
              <div className={`relative rounded-2xl bg-gray-900 p-8 shadow-xl ${
                plan.popular ? 'border-2 border-purple-500' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-purple-500 px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.name !== 'Enterprise' && <span className="text-gray-400 ml-1">/mês</span>}
                  </div>
                  <p className="mt-6 text-gray-400">{plan.description}</p>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-purple-500 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`block w-full rounded-lg px-4 py-3 text-center font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    Começar Agora
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <FadeIn delay={200}>
            <div className="flex flex-col items-center text-center p-6">
              <div className="rounded-full bg-purple-500/10 p-3 mb-4">
                <Zap className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Resultados Rápidos</h3>
              <p className="text-gray-400">Estratégias otimizadas para máximo retorno em curto prazo</p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-col items-center text-center p-6">
              <div className="rounded-full bg-purple-500/10 p-3 mb-4">
                <Shield className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Garantia de Satisfação</h3>
              <p className="text-gray-400">Compromisso com sua satisfação e resultados</p>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-col items-center text-center p-6">
              <div className="rounded-full bg-purple-500/10 p-3 mb-4">
                <Award className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expertise Comprovada</h3>
              <p className="text-gray-400">Anos de experiência em marketing digital</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Sales;