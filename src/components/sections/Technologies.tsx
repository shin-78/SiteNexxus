import React from 'react';
import FadeIn from '../animations/FadeIn';

const technologies = [
  {
    category: 'Marketing Digital',
    items: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'TikTok Ads'],
  },
  {
    category: 'Análise de Dados',
    items: ['Google Analytics', 'Data Studio', 'Power BI', 'Tableau', 'Metabase'],
  },
  {
    category: 'Desenvolvimento',
    items: ['React', 'Node.js', 'Python', 'TypeScript', 'AWS'],
  },
  {
    category: 'Automação',
    items: ['Zapier', 'Make', 'Power Automate', 'n8n', 'Pipedream'],
  },
];

const Technologies = () => {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Tecnologias que Dominamos
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <FadeIn key={index} delay={index * 200}>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-500 mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-300 flex items-center space-x-2"
                    >
                      <span className="h-1.5 w-1.5 bg-purple-500 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;