'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  gender: string;
  terms: boolean;
};

export default function App() {
  const t = useTranslations('Form');
  const [submissionMessage, setSubmissionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log('Dados enviados:', data);
    setSubmissionMessage(null);

    try {
      const isSuccess = Math.random() > 0.3;

      if (isSuccess) {
        setSubmissionMessage({ type: 'success', text: t('Submission.Success') });
        reset();
      } else {
        setSubmissionMessage({ type: 'error', text: t('Submission.Error') });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionMessage({ type: 'error', text: t('Submission.UnexpectedError') });
    }

    setTimeout(() => {
      setSubmissionMessage(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-indigo-400 mb-6 text-center">{t('Title')}</h2>

        {submissionMessage && (
          <div
            className={`p-3 rounded-lg text-center font-medium ${
              submissionMessage.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
            }`}
            role="alert"
          >
            {submissionMessage.text}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block font-medium text-gray-100 mb-2">{t('Fields.Name.Label')}</label>
          <input
            id="name"
            {...register('name', { required: t('Validation.NameRequired') })}
            placeholder={t('Fields.Name.Placeholder')}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-100 mb-2">{t('Fields.Email.Label')}</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: t('Validation.EmailRequired'),
              pattern: {
                value: /^\S+@\S+$/i,
                message: t('Validation.EmailInvalid'),
              },
            })}
            placeholder={t('Fields.Email.Placeholder')}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block font-medium text-gray-100 mb-2">{t('Fields.Password.Label')}</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: t('Validation.PasswordRequired'),
              minLength: {
                value: 6,
                message: t('Validation.PasswordMinLength'),
              },
            })}
            placeholder={t('Fields.Password.Placeholder')}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />
          {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block font-medium text-gray-100 mb-2">{t('Fields.ConfirmPassword.Label')}</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              validate: (value) =>
                value === watch('password') || t('Validation.PasswordsMismatch'),
            })}
            placeholder={t('Fields.ConfirmPassword.Placeholder')}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="bio" className="block font-medium text-gray-100 mb-2">{t('Fields.Bio.Label')}</label>
          <textarea
            id="bio"
            {...register('bio')}
            placeholder={t('Fields.Bio.Placeholder')}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y min-h-[100px] transition-colors duration-300"
            rows={4}
          />
        </div>

        <div>
          <label className="block font-medium text-gray-100 mb-2">{t('Fields.Gender.Label')}</label>
          <div className="flex flex-wrap gap-4">
            <label htmlFor="gender-female" className="flex items-center gap-2 text-gray-100 cursor-pointer">
              <input
                id="gender-female"
                type="radio"
                value="feminino"
                {...register('gender', { required: t('Validation.GenderRequired') })}
                className="accent-indigo-500 w-4 h-4"
              />
              {t('Fields.Gender.Female')}
            </label>
            <label htmlFor="gender-male" className="flex items-center gap-2 text-gray-100 cursor-pointer">
              <input
                id="gender-male"
                type="radio"
                value="masculino"
                {...register('gender')}
                className="accent-indigo-500 w-4 h-4"
              />
              {t('Fields.Gender.Male')}
            </label>
            <label htmlFor="gender-other" className="flex items-center gap-2 text-gray-100 cursor-pointer">
              <input
                id="gender-other"
                type="radio"
                value="outro"
                {...register('gender')}
                className="accent-indigo-500 w-4 h-4"
              />
              {t('Fields.Gender.Other')}
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-400 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="terms" className="flex items-center gap-2 text-gray-100 cursor-pointer">
            <input
              id="terms"
              type="checkbox"
              {...register('terms', { required: t('Validation.TermsRequired') })}
              className="accent-indigo-500 w-4 h-4"
            />
            {t('Fields.Terms.Accept')}{' '}
            <span className="underline text-indigo-400 hover:text-indigo-500 transition-colors duration-300">
              {t('Fields.Terms.Link')}
            </span>
          </label>
          {errors.terms && (
            <p className="text-red-400 text-sm mt-1">{errors.terms.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
        >
          {t('SubmitButton')}
        </button>
      </form>
    </div>
  );
}