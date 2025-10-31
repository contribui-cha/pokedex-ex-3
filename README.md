# Pokedex - First Generation

A Pokedex application built with Next.js 15 and TypeScript showing all 150 first generation Pokemon.

## Features

- View all 150 first generation Pokemon
- Search by name
- Filter by type
- View detailed information for each Pokemon
- Responsive design
- SEO optimized with dynamic meta tags

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page with Pokemon list
│   ├── search/
│   │   └── page.tsx          # Search page with URL parameters
│   └── pokemon/
│       └── [id]/
│           └── page.tsx      # Individual Pokemon page
├── components/
│   ├── ui/                   # UI components
│   └── layout/               # Layout components
├── lib/
│   ├── types.ts             # TypeScript types
│   ├── utils.ts             # Utility functions
│   └── pokemon-api.ts       # Data fetching functions
└── hooks/                   # Custom React hooks
```

## Technologies Used

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React 19
