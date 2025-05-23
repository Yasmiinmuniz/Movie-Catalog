'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-950 border-b border-gray-800 text-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logoCineYaMi.png"
                alt={t('LogoAlt')}
                width={160}
                height={50}
                className="h-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <Navbar />
          </div>

          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded bg-gray-800 p-2 text-white hover:bg-red-600 transition"
              aria-label={t('OpenMenuAriaLabel')}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Navbar />
          </div>
        )}
      </div>
    </header>
  );
}