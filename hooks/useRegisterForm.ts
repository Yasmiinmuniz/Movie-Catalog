'use client'

import { useState } from 'react';
import { RegisterFormValues } from '@/types/form';

const STORAGE_KEY = 'registerForm';

const initialValues: RegisterFormValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  bio: '',
  gender: '',
  terms: false,
};

export const useRegisterForm = () => {
  const [form, setForm] = useState<RegisterFormValues>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialValues;
    }
    return initialValues;
  });

  const [errors, setErrors] = useState<Partial<RegisterFormValues>>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (target as HTMLInputElement).checked : value,
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<RegisterFormValues> = {};
    if (!form.name) newErrors.name = 'Nome é obrigatório';
    if (!form.email.includes('@')) newErrors.email = 'Email inválido';
    if (form.password.length < 6) newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = 'Senhas não coincidem';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (callback: () => void) => (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      callback();
      setStatusMessage('Cadastro realizado com sucesso!');
      localStorage.removeItem(STORAGE_KEY);
      setForm(initialValues);
      setErrors({});
    } else {
      setStatusMessage('Por favor, corrija os erros antes de enviar.');
    }
  };

  return {
    form,
    errors,
    statusMessage,
    handleChange,
    handleSubmit,
  };
};
