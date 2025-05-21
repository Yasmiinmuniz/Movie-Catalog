import React from 'react';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => {
  const actual = jest.requireActual('next/navigation');
  return {
    ...actual,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      refresh: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      prefetch: jest.fn(),
    }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
    Link: jest.fn().mockImplementation(({ href, children, ...rest }) => (
      <a href={href?.toString()} {...rest}>
        {children}
      </a>
    )),
  };
});

console.log('✅ jest.setup.ts carregado com sucesso!');
