import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/(home)/page';

test('deve exibir a imagem com o atributo alt correto', () => {
    render(<Home />);
    const img = screen.getByAltText('Banner de destaque com filmes');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src');
});

test('deve exibir imagem do filme com src e alt', () => {
    render(<Home />);
    const img = screen.getByAltText('Banner de destaque com filmes');
    expect(img).toHaveAttribute('src');
    expect(img).toHaveAttribute('alt', 'Banner de destaque com filmes');
});