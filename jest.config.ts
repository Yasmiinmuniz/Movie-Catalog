import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config = {  
  coverageProvider: 'v8',

  testEnvironment: 'jest-environment-jsdom',
  
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  
  moduleNameMapper: {    
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/context/(.*)$': '<rootDir>/app/context/$1',
    '^@/data/(.*)$': '<rootDir>/app/data/$1',
    '^@/hooks/(.*)$': '<rootDir>/app/hooks/$1',
    '^@/types/(.*)$': '<rootDir>/app/types/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
  },
 
};

export default createJestConfig(customJestConfig);