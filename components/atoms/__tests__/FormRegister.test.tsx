import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@/app/formRegister/page';

const mockMathRandom = jest.spyOn(Math, 'random');

describe('App Component', () => {

  beforeEach(() => {
    mockMathRandom.mockRestore();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('deve renderizar o formulário e todos os campos', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getByText('Cadastre-se')).toBeInTheDocument();
    expect(screen.getByLabelText(/Nome Completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirmar Senha')).toBeInTheDocument();
    expect(screen.getByLabelText(/Sobre você/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Feminino')).toBeInTheDocument();
    expect(screen.getByLabelText('Masculino')).toBeInTheDocument();
    expect(screen.getByLabelText('Outro')).toBeInTheDocument();
    expect(screen.getByLabelText(/Aceito os termos de uso/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeInTheDocument();
  });

  test('deve exibir mensagens de erro para campos obrigatórios ao submeter formulário vazio', async () => {
    await act(async () => {
      render(<App />);
    });

    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

    await waitFor(() => {
      expect(screen.getByText('Nome é obrigatório')).toBeInTheDocument();
      expect(screen.getByText('Email é obrigatório')).toBeInTheDocument();
      expect(screen.getByText('Senha obrigatória')).toBeInTheDocument();
      expect(screen.getByText('Selecione um gênero')).toBeInTheDocument();
      expect(screen.getByText('Você deve aceitar os termos')).toBeInTheDocument();
    });
  });


  test('deve exibir erro para senha com menos de 6 caracteres', async () => {
    await act(async () => {
      render(<App />);
    });

    fireEvent.change(screen.getByLabelText('Senha'), { target: { value: '123' } });
    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

    await waitFor(() => {
      expect(screen.getByText('A senha deve ter pelo menos 6 caracteres')).toBeInTheDocument();
    });
  });

  test('deve exibir erro quando as senhas não coincidem', async () => {
    await act(async () => {
      render(<App />);
    });

    fireEvent.change(screen.getByLabelText('Senha'), { target: { value: 'senha123' } });
    fireEvent.change(screen.getByLabelText('Confirmar Senha'), { target: { value: 'senhaABC' } });
    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

    await waitFor(() => {
      expect(screen.getByText('As senhas não coincidem')).toBeInTheDocument();
    });
  });

});
