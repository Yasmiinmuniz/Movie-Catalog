# Movie Catalog - CineYaMi

Aplicação web desenvolvida com **React**, **TypeScript**, **Tailwind CSS** e consumo da API pública [OMDb](https://www.omdbapi.com/), permitindo a busca, exibição e organização de filmes. O projeto adota a arquitetura **Atomic Design** para os componentes e segue o padrão de estrutura baseado em **Roles App**.


## Tecnologias Utilizadas

- **React** – Biblioteca JavaScript para criação de interfaces.
- **TypeScript** – Superset de JavaScript com tipagem estática.
- **Tailwind CSS** – Framework utilitário para estilização.
- **OMDb API** – Fonte de dados sobre filmes.
- **Atomic Design** – Organização de componentes em átomos, moléculas, organismos, templates e páginas.
- **Roles App Architecture** – Estrutura por domínios de responsabilidade (ex: pages, components, hooks, lib, etc.).

## Funcionalidades
- Visualização de filmes em destaque
- Página de detalhes dos filmes
- Página de contato (formulário)
- Layout responsivo e acessível
- Carregamento de dados da API OMDb
- Componentes reutilizáveis e organizados

## Como Executar
Clone o repositório:

```bash
git clone #
cd movie-app
```

### Instale as dependências:

```bash
npm install
# ou
yarn
```
### Configure a chave da API OMDb:
Crie um arquivo .env.local na raiz do projeto:

```env
NEXT_PUBLIC_OMDB_API_KEY=your_api_key_here
```
### Execute o projeto:

```bash
npm run dev
# ou
yarn dev
```

## Autor

Desenvolvido por Yasmin da Silva Muniz
