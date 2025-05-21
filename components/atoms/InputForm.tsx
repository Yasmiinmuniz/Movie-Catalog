import React from 'react';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export function InputForm({ label, icon, error, className, ...props }: InputProps) {
  return (
    <div className="w-full space-y-1">
      <label
        htmlFor={props.name}
        className="block text-light text-sm font-semibold tracking-wide"
      >
        {label}
      </label>
      <div
        className={`flex items-center rounded-xl border-2 transition-all px-4 py-3 shadow-lg bg-background-dark 
          ${error
            ? 'border-red-500 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-400'
            : 'border-mid focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/60'}`}
      >
        {icon && <span className="mr-3 text-light/60">{icon}</span>}
        <input
          {...props}
          className={`w-full bg-transparent text-light placeholder-gray-400 text-sm outline-none
            ${className ?? ''}`}
        />
      </div>
      {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
    </div>
  );
}
