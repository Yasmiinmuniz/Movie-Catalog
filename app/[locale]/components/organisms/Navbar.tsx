'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  const navItems = [
    { labelKey: "Home", href: "/" },
    { labelKey: "Favorites", href: "/favorites" },
    { labelKey: "Movies", href: "/movies" },
    { labelKey: "Contact", href: "/contact" },
    { labelKey: "Search", href: "/search" },
    { labelKey: "Register", href: "/formRegister" }
  ];

  return (
    <nav aria-label={t('AriaLabelNavigation')}>
      <ul className="flex items-center gap-6 text-sm">
        {navItems.map((item) => (
          <li key={item.labelKey}>
            <Link
              href={item.href}
              className={`transition ${pathname === item.href
                  ? "text-teal-600 dark:text-white font-semibold"
                  : "text-gray-500 hover:text-gray-700 dark:text-white/70 dark:hover:text-white"
                }`}
            >
              {t(item.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;