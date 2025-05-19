'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Início", href: "/" },
  { name: "Favoritos", href: "/favorites" },
  { name: "Filmes", href: "/movies" },
  { name: "Contato", href: "/contact" },
  { name: "Buscar", href: "/search" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Main Navigation">
      <ul className="flex items-center gap-6 text-sm">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`transition ${pathname === item.href
                  ? "text-teal-600 dark:text-white font-semibold"
                  : "text-gray-500 hover:text-gray-700 dark:text-white/70 dark:hover:text-white"
                }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
