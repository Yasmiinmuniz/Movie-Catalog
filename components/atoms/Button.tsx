import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`bg-primary text-dark shadow-lg shadow-primary/40 text-white font-semibold px-5 py-2 rounded-lg transition disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
