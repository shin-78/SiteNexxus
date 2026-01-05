import React from 'react';
import { ArrowRight } from 'lucide-react';
import ParallaxSection from './animations/ParallaxSection';
import RocketAnimation from './animations/RocketAnimation';
import StarryBackground from './effects/StarryBackground';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <StarryBackground />
      
      <ParallaxSection className="relative h-full flex items-center justify-center">
        <div className="text-center max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            <span className="inline-block transform transition-transform hover:scale-105 duration-700">
              Marketing Digital
            </span>
            <br />
            <span className="gradient-text">
              de Alto Impacto
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Transforme sua presença digital com estratégias comprovadas que geram resultados reais
          </p>
          
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-500 transform hover:scale-105"
          >
            Agende uma Consulta Gratuita
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-500" />
          </a>
        </div>
      </ParallaxSection>
      
      <RocketAnimation />
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;