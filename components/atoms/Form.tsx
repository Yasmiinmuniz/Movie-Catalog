import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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
        setSubmissionMessage({ type: 'success', text: 'Cadastro realizado com sucesso!' });
        reset();
      } else {
        setSubmissionMessage({ type: 'error', text: 'Erro ao cadastrar. Tente novamente.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionMessage({ type: 'error', text: 'Ocorreu um erro inesperado. Tente novamente.' });
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
        <h2 className="text-3xl font-bold text-indigo-400 mb-6 text-center">Cadastre-se</h2>

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

        {/* Nome */}
        <div>
          <label htmlFor="name" className="block font-medium text-gray-100 mb-2">Nome Completo</label>
          <input
            id="name"
            {...register('name', { required: 'Nome é obrigatório' })}
            placeholder="Digite seu nome completo"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium text-gray-100 mb-2">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email inválido',
              },
            })}
            placeholder="exemplo@email.com"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Senha */}
        <div>
          <label htmlFor="password" className="block font-medium text-gray-100 mb-2">Senha</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Senha obrigatória',
              minLength: {
                value: 6,
                message: 'A senha deve ter pelo menos 6 caracteres',
              },
            })}
            placeholder="********"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />
          {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Confirmar senha */}
        <div>
          <label htmlFor="confirmPassword" className="block font-medium text-gray-100 mb-2">Confirmar Senha</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              validate: (value) =>
                value === watch('password') || 'As senhas não coincidem',
            })}
            placeholder="********"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Sobre você */}
        <div>
          <label htmlFor="bio" className="block font-medium text-gray-100 mb-2">Sobre você</label>
          <textarea
            id="bio"
            {...register('bio')}
            placeholder="Conte um pouco sobre você (opcional)"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y min-h-[100px] transition-colors duration-300"
            rows={4}
          />
        </div>

        {/* Gênero (Radio) */}
        <div>
          <label className="block font-medium text-gray-100 mb-2">Gênero</label>
          <div className="flex flex-wrap gap-4">
            <label htmlFor="gender-female" className="flex items-center gap-2 text-gray-100 cursor-pointer">
              <input
                id="gender-female"
                type="radio"
                value="feminino"
                {...register('gender', { required: 'Selecione um gênero' })}
                className="accent-indigo-500 w-4 h-4"
              />
              Feminino
            </label>
            <label htmlFor="gender-male" className="flex items-center gap-2 text-gray-100 cursor-pointer">
              <input
                id="gender-male"
                type="radio"
                value="masculino"
                {...register('gender')}
                className="accent-indigo-500 w-4 h-4"
              />
              Masculino
            </label>
            <label htmlFor="gender-other" className="flex items-center gap-2 text-gray-100 cursor-pointer">
              <input
                id="gender-other"
                type="radio"
                value="outro"
                {...register('gender')}
                className="accent-indigo-500 w-4 h-4"
              />
              Outro
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-400 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>

        {/* Aceite dos termos (Checkbox) */}
        <div>
          <label htmlFor="terms" className="flex items-center gap-2 text-gray-100 cursor-pointer">
            <input
              id="terms"
              type="checkbox"
              {...register('terms', { required: true })}
              className="accent-indigo-500 w-4 h-4"
            />
            Aceito os <span className="underline text-indigo-400 hover:text-indigo-500 transition-colors duration-300">termos de uso</span>
          </label>
          {errors.terms && (
            <p className="text-red-400 text-sm mt-1">Você deve aceitar os termos</p>
          )}
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}