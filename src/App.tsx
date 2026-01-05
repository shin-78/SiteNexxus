import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import ProductShowcase from './components/sections/ProductShowcase';
import Process from './components/sections/Process';
import Technologies from './components/sections/Technologies';
import Sales from './components/Sales';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Product Showcase */}
        <ProductShowcase />

        {/* Services Section */}
        <Services />

        {/* Process Section */}
        <Process />

        {/* Technologies Section */}
        <Technologies />

        {/* Sales Section */}
        <Sales />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Nexxus Digital. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
