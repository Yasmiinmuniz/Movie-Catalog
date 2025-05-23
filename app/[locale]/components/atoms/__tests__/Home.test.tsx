import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/[locale]/components/pages/(home)/page';
import { NextIntlClientProvider } from 'next-intl';

import ptMessages from '@/app/[locale]/messages/pt/pt.json';

const renderWithIntl = (component: React.ReactElement, locale: string = 'pt') => {
  const messages = ptMessages;

  return render(
    <NextIntlClientProvider messages={messages} locale={locale}>
      {component}
    </NextIntlClientProvider>
  );
};

test('deve exibir a imagem com o atributo alt correto', () => {
  renderWithIntl(<Home />);
  const img = screen.getByAltText('Banner de destaque com filmes');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', '/images/banner.jpg');
});

test('deve exibir imagem do filme com src e alt', () => {
  renderWithIntl(<Home />);
  const img = screen.getByAltText('Banner de destaque com filmes');
  expect(img).toHaveAttribute('src', '/images/banner.jpg');
  expect(img).toHaveAttribute('alt', 'Banner de destaque com filmes');
});

test('deve exibir o título principal da página', () => {
  renderWithIntl(<Home />);
  const title = screen.getByText('Filmes que você ama');
  expect(title).toBeInTheDocument();
});

test('deve exibir o botão "Explorar"', () => {
  renderWithIntl(<Home />);
  const exploreButton = screen.getByRole('button', { name: 'Explorar' });
  expect(exploreButton).toBeInTheDocument();
});
