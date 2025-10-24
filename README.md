# Bells Boxing

Elite boxing training and fitness website.

## Tech Stack

- **Runtime**: Bun
- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Linting/Formatting**: Biome
- **Email**: Resend
- **Animations**: Motion

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your Resend API key:

```bash
cp .env.example .env.local
```

## Build

```bash
bun run build
```

## Linting and Formatting

```bash
bun run lint      # Check code quality
bun run format    # Format code
bun run check     # Check and fix code quality
```

## Deployment

This site is configured for deployment on Ubuntu VM.
