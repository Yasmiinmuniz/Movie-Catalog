import React from "react";
import { useRegisterForm } from "@/hooks/useRegisterForm";
import { InputForm } from "@/components/atoms/InputForm";
import Button from '@/components/atoms/Button';
import { FiUser, FiMail, FiLock, FiEdit2 } from "react-icons/fi";

const FormRegister: React.FC = () => {
  const { form, errors, statusMessage, handleChange, handleSubmit } = useRegisterForm();

  return (
    <form
      onSubmit={handleSubmit(() => console.log("Cadastro feito!"))}
      className="bg-dark max-w-3xl mx-auto p-8 rounded-2xl shadow-xl space-y-6 text-light"
    >
      <h2 className="text-4xl font-display tracking-tight mb-6 text-primary text-center">
        Criar Conta
      </h2>

      {/* Nome */}
      <InputForm
        label="Nome"
        id="name"
        name="name"
        placeholder="Seu nome"
        value={form.name}
        onChange={handleChange}
        required
        icon={<FiUser className="text-light/60" />}
        error={errors.name}
      />

      {/* Email */}
      <InputForm
        label="Email"
        id="email"
        type="email"
        name="email"
        placeholder="seu@email.com"
        value={form.email}
        onChange={handleChange}
        required
        icon={<FiMail className="text-light/60" />}
        error={errors.email}
      />

      {/* Senha */}
      <InputForm
        label="Senha"
        id="password"
        type="password"
        name="password"
        placeholder="Digite sua senha"
        value={form.password}
        onChange={handleChange}
        required
        icon={<FiLock className="text-light/60" />}
        error={errors.password}
      />

      {/* Confirmar Senha */}
      <InputForm
        label="Confirmar Senha"
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        placeholder="Confirme sua senha"
        value={form.confirmPassword}
        onChange={handleChange}
        required
        icon={<FiLock className="text-light/60" />}
        error={errors.confirmPassword}
      />

      {/* Bio */}
      <div className="space-y-1">
        <label htmlFor="bio" className="text-sm font-semibold text-light">Sobre você</label>
        <div className="flex items-start rounded-xl border-2 border-mid bg-background-dark focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/60 px-4 py-3">
          <FiEdit2 className="text-light/60 mt-1 mr-3" />
          <textarea
            id="bio"
            name="bio"
            placeholder="Conte algo sobre você..."
            rows={4}
            value={form.bio}
            onChange={handleChange}
            className="w-full bg-transparent text-light placeholder-gray-400 text-sm outline-none resize-none"
          />
        </div>
      </div>

      {/* Gênero */}
      <div className="space-y-1">
        <span className="block text-sm font-semibold text-light">Gênero</span>
        <div className="flex gap-6">
          {["Feminino", "Masculino", "Outro"].map((option) => (
            <label key={option} className="inline-flex items-center gap-2 text-light/90">
              <input
                type="radio"
                name="gender"
                value={option}
                checked={form.gender === option}
                onChange={handleChange}
                className="accent-primary"
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      
    {/* Aceite */}
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="terms"
        name="terms"
        checked={form.terms}
        onChange={handleChange}
        className="accent-primary w-4 h-4"
      />
      <label htmlFor="terms" className="text-sm text-light/90">
        Li e aceito os <a href="#" className="text-purple-500 underline">termos de uso</a>.
      </label>
    </div>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          type="submit"
          className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-light font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Cadastrar
        </Button>
        <Button
          type="reset"
          className="w-full sm:w-auto px-8 py-3.5 border border-mid text-light hover:border-primary rounded-xl transition-all"
        >
          Limpar
        </Button>
      </div>

      {/* Mensagem de status */}
      {statusMessage && (
        <p className={`text-center text-sm mt-4 font-semibold ${statusMessage.includes("sucesso") ? "text-green-400" : "text-red-500"}`}>
          {statusMessage}
        </p>
      )}
    </form>
  );
};

export default FormRegister;
