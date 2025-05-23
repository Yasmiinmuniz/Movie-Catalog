'use client';

import { useState } from 'react';
import { FiUser, FiMail, FiMessageCircle } from 'react-icons/fi';
import Header from '@/app/[locale]/components/organisms/Header';
import Footer from '@/app/[locale]/components/organisms/Footer';
import { Input } from '@/app/[locale]/components/atoms/Input';
import Button from '@/app/[locale]/components/atoms/Button';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

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
      const success = true;
      if (success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark text-light">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex flex-col items-center md:items-start w-full">
            <h1 className="text-5xl font-display tracking-tighter mb-6 text-primary">
              {t('Title')}
            </h1>
            <p className="text-light/70 max-w-xl mb-0">
              {t('Description')}
            </p>
            <img
              src="/images/og-banner.jpg"
              alt={t('BannerAlt')}
              className="mt-6 rounded-xl shadow-lg max-w-xs w-full h-auto"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-mid rounded-2xl shadow-xl p-8 space-y-6 max-w-3xl w-full md:w-1/2"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-light/80">
              {t('Form.NameLabel')}
            </label>
            <div className="relative">
              <FiUser className="absolute top-3 left-4 text-light/60" />
              <Input
                id="name"
                name="name"
                placeholder={t('Form.NamePlaceholder')}
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
              {t('Form.EmailLabel')}
            </label>
            <div className="relative">
              <FiMail className="absolute top-3 left-4 text-light/60" />
              <Input
                id="email"
                type="email"
                name="email"
                placeholder={t('Form.EmailPlaceholder')}
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
              {t('Form.MessageLabel')}
            </label>
            <div className="relative">
              <FiMessageCircle className="absolute top-3 left-4 text-light/60" />
              <textarea
                id="message"
                name="message"
                placeholder={t('Form.MessagePlaceholder')}
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-6 py-3 bg-dark border-2 border-mid rounded-xl shadow-lg focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-light/60 resize-none"
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-light font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {status === 'sending' ? t('Form.SendingButton') : t('Form.SendButton')}
            </Button>
          </div>

          {status === 'success' && (
            <p className="text-center text-green-400 font-semibold">
              {t('Form.SuccessMessage')}
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-500 font-semibold">
              {t('Form.ErrorMessage')}
            </p>
          )}
        </form>
      </main>

      <Footer />
    </div>
  );
}
