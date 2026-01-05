import React from 'react';
import SmoothReveal from './animations/SmoothReveal';
import { LineChart, BarChart } from 'lucide-react';

const DataVisualization = () => {
  return (
    <div className="relative p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl backdrop-blur-sm border border-purple-500/20">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="h-2 w-3/4 bg-purple-500/30 rounded-full animate-pulse" />
          <div className="h-2 w-1/2 bg-purple-500/20 rounded-full animate-pulse delay-100" />
          <div className="h-2 w-2/3 bg-purple-500/25 rounded-full animate-pulse delay-200" />
        </div>
        <div className="flex items-end justify-end space-x-2">
          {[40, 65, 45, 80, 60, 90, 70].map((height, i) => (
            <div
              key={i}
              className="w-4 bg-purple-500/30 rounded-t transition-all duration-1000 ease-out hover:bg-purple-400/50"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <div className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4">
        <SmoothReveal>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Resultados Extraordinários</span>
            </h2>
            <p className="text-xl text-gray-400">
              Análise de dados que impulsionam seu negócio
            </p>
          </div>
        </SmoothReveal>

        <div className="grid md:grid-cols-2 gap-16">
          <SmoothReveal delay={200}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative">
                <div className="p-1">
                  <DataVisualization />
                </div>
                <div className="mt-8 text-center">
                  <LineChart className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Analytics Avançado
                  </h3>
                  <p className="text-gray-400">
                    Insights poderosos que impulsionam decisões estratégicas
                  </p>
                </div>
              </div>
            </div>
          </SmoothReveal>

          <SmoothReveal delay={400}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative">
                <div className="p-1">
                  <div className="relative p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl backdrop-blur-sm border border-purple-500/20">
                    <div className="grid grid-cols-3 gap-3">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded bg-purple-500/20 hover:bg-purple-400/30 transition-colors duration-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <BarChart className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Automação Inteligente
                  </h3>
                  <p className="text-gray-400">
                    Processos otimizados para máxima eficiência
                  </p>
                </div>
              </div>
            </div>
          </SmoothReveal>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;