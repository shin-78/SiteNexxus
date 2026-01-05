import React from 'react';
import { ShoppingCart, Package, CreditCard, Users } from 'lucide-react';
import { ecommerceMetrics } from '../../data/metrics';
import MetricCard from '../metrics/MetricCard';

const iconMap = {
  ShoppingCart,
  Package,
  CreditCard,
  Users
};

const EcommerceMetrics = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Métricas E-commerce
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ecommerceMetrics.map((metric, index) => (
          <MetricCard 
            key={index} 
            metric={{
              ...metric,
              icon: iconMap[metric.icon as keyof typeof iconMap]
            }} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default EcommerceMetrics;