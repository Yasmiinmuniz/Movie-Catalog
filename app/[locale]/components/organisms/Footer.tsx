'use client';

import Link from 'next/link';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React, { ChangeEvent } from 'react';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    const newPath = `/${newLocale}${pathname.replace(`/${locale}`, '')}`;
    router.push(newPath);
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              CineYaMi
            </h3>
            <p className="text-gray-400 text-sm">
              {t('Slogan')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">{t('LinksSection.Title')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  {t('LinksSection.Home')}
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-gray-400 hover:text-red-500 transition-colors">
                  {t('LinksSection.Movies')}
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="text-gray-400 hover:text-red-500 transition-colors">
                  {t('LinksSection.Favorites')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  {t('LinksSection.Contact')}
                </Link>
                <li>
                  <Link href="/formRegister" className="text-gray-400 hover:text-red-500 transition-colors">
                    {t('LinksSection.Register')}
                  </Link>
                </li>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">{t('LegalSection.Title')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  {t('LegalSection.TermsOfUse')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  {t('LegalSection.PrivacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  {t('LegalSection.Cookies')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">{t('SocialMediaSection.Title')}</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/yasmiinmuniz/"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label={t('SocialMediaSection.LinkedIn')}
              >
                <FiLinkedin className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/yasminnmunizz/"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label={t('SocialMediaSection.Instagram')}
              >
                <FiInstagram className="text-xl" />
              </a>
              <a
                href="https://github.com/Yasmiinmuniz"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label={t('SocialMediaSection.GitHub')}
              >
                <FiGithub className="text-xl" />
              </a>
            </div>

            <div className="mt-6">
              <label htmlFor="language-select" className="sr-only">
                {t('LanguageSwitcher.Label')}
              </label>
              <select
                id="language-select"
                value={locale}
                onChange={handleLocaleChange}
                className="block w-full py-2 px-3 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm text-white"
              >
                <option value="en">{t('LanguageSwitcher.English')}</option>
                <option value="es">{t('LanguageSwitcher.Spanish')}</option>
                <option value="pt">{t('LanguageSwitcher.Portuguese')}</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} CineYaMi. {t('Copyright.AllRightsReserved')}
          </p>
          <p>
            {t('Copyright.DataProvidedBy')} OMDB API.
          </p>
        </div>
      </div>
    </footer>
  );
}