import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import FadeIn from './animations/FadeIn';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{ name, email, phone, message }]);

      if (error) throw error;

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div id="contact" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold gradient-text sm:text-4xl">
              Transforme Seu Negócio Hoje
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Entre em contato e descubra como podemos impulsionar seus
              resultados
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn delay={200}>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-purple-500" />
                <span className="text-gray-300">
                  allan.consultoriajba@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-purple-500" />
                <span className="text-gray-300">+55 41 99833-7424</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-purple-500" />
                <span className="text-gray-300">Curitiba, PR - Brasil</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email Corporativo
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="(XX) XXXXX-XXXX"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Como podemos ajudar?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors duration-300"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-500 disabled:opacity-50"
              >
                {status === 'sending'
                  ? 'Enviando...'
                  : status === 'success'
                  ? 'Mensagem Enviada!'
                  : status === 'error'
                  ? 'Erro ao enviar'
                  : 'Solicitar Contato'}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;
