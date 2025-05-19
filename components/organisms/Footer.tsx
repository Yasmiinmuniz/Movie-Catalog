import Link from 'next/link';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              CineYaMi
            </h3>
            <p className="text-gray-400">
              O melhor lugar para descobrir e assistir seus filmes favoritos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-gray-400 hover:text-white transition-colors">
                  Filmes
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="text-gray-400 hover:text-white transition-colors">
                  Favoritos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/yasmiinmuniz/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/yasminnmunizz/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="text-xl" />
              </a>
              <a
                href="https://github.com/Yasmiinmuniz"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {currentYear} CineYaMi. Todos os direitos reservados. Dados fornecidos por OMDB API.
          </p>
        </div>
      </div>
    </footer>
  );
}