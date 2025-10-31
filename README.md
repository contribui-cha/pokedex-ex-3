# Pokédex - Primeira Geração

Uma aplicação de Pokédex construída com Next.js 15 e TypeScript mostrando todos os 150 Pokémon da primeira geração.

## Funcionalidades

- Visualizar todos os 150 Pokémon da primeira geração
- Buscar por nome
- Filtrar por tipo
- Ver informações detalhadas de cada Pokémon
- Design responsivo
- SEO otimizado com meta tags dinâmicas

## Como Começar

Primeiro, instale as dependências:

```bash
npm install
```

Então, execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx              # Página inicial com lista de Pokémon
│   ├── search/
│   │   └── page.tsx          # Página de busca com parâmetros URL
│   └── pokemon/
│       └── [id]/
│           └── page.tsx      # Página individual do Pokémon
├── components/
│   ├── ui/                   # Componentes de UI
│   └── layout/               # Layout components
├── lib/
│   ├── types.ts             # Tipos TypeScript
│   ├── utils.ts             # Funções utilitárias
│   └── pokemon-api.ts       # Funções de busca de dados
└── hooks/                   # Hooks customizados do React
```

## Tecnologias Utilizadas

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React 19
