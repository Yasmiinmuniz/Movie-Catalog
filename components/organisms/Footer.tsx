import Link from 'next/link';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              CineYaMi
            </h3>
            <p className="text-gray-400 text-sm">
              O melhor lugar para descobrir e assistir seus filmes favoritos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-gray-400 hover:text-red-500 transition-colors">
                  Filmes
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="text-gray-400 hover:text-red-500 transition-colors">
                  Favoritos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/yasmiinmuniz/"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/yasminnmunizz/"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="text-xl" />
              </a>
              <a
                href="https://github.com/Yasmiinmuniz"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} CineYaMi. Todos os direitos reservados.
          </p>
          <p>
            Dados fornecidos por OMDB API.
          </p>
        </div>
      </div>
    </footer>
  );
}
