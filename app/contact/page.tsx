'use client';

import { useState } from 'react';
import { FiUser, FiMail, FiMessageCircle } from 'react-icons/fi';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark text-light">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-display tracking-tighter text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Fale Conosco
        </h1>
        <p className="text-center text-light/70 max-w-xl mx-auto mb-12">
          Seja para dúvidas, sugestões ou qualquer outro contato, estamos aqui para ajudar você. Preencha o formulário e nossa equipe responderá o mais rápido possível.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-mid rounded-2xl shadow-xl p-8 space-y-6 max-w-3xl mx-auto"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-light/80">
              Nome
            </label>
            <div className="relative">
              <FiUser className="absolute top-3 left-4 text-light/60" />
              <Input
                id="name"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ paddingLeft: '2.5rem' }}
                className="w-full px-6 py-3 bg-dark border-2 border-mid rounded-xl shadow-lg focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-light/60"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-light/80">
              Email
            </label>
            <div className="relative">
              <FiMail className="absolute top-3 left-4 text-light/60" />
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ paddingLeft: '2.5rem' }}
                className="w-full px-6 py-3 bg-dark border-2 border-mid rounded-xl shadow-lg focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-light/60"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-light/80">
              Mensagem
            </label>
            <div className="relative">
              <FiMessageCircle className="absolute top-3 left-4 text-light/60" />
              <textarea
                id="message"
                name="message"
                placeholder="Escreva sua mensagem..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-6 py-3 bg-dark border-2 border-mid rounded-xl shadow-lg focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-light/60 resize-none"
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-light font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
          </Button>

          {status === 'success' && (
            <p className="text-center text-green-400 font-semibold">
              Mensagem enviada com sucesso!
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-500 font-semibold">
              Erro ao enviar mensagem. Tente novamente.
            </p>
          )}
        </form>
      </main>

      <Footer />
    </div>
  );
}
