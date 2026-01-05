import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

interface Message {
  id: string;
  email: string;
  message: string;
  created_at: string;
}

const Dashboard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching messages:', error);
        return;
      }

      setMessages(data || []);
      setLoading(false);
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Mensagens Recebidas</h1>
        <div className="grid gap-6">
          {messages.map((message) => (
            <div key={message.id} className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="text-purple-500 font-medium">{message.email}</div>
                <div className="text-gray-400 text-sm">
                  {new Date(message.created_at).toLocaleString('pt-BR')}
                </div>
              </div>
              <p className="text-gray-300 whitespace-pre-wrap">{message.message}</p>
            </div>
          ))}
          {messages.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              Nenhuma mensagem recebida ainda.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;