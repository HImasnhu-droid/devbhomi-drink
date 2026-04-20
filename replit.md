# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the Devbhoomi Drink marketing website — a React + Vite frontend-only site for a Uttarakhand juice startup.

## Artifacts

- **devbhoomi-drink** (`artifacts/devbhoomi-drink/`) — Main marketing website for Devbhoomi Drink. Frontend-only, no backend. React + Vite + Tailwind CSS + Framer Motion. Served at `/`.
- **api-server** (`artifacts/api-server/`) — Shared Express API server (currently only health endpoint).
- **mockup-sandbox** (`artifacts/mockup-sandbox/`) — Design prototyping sandbox.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion + Wouter
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM (not used by main site)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/devbhoomi-drink run dev` — run website locally
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Assets

Images are in `artifacts/devbhoomi-drink/public/`:
- `logo.jpg` — Devbhoomi Drink logo
- `outlet1.jpg` — Pahadi Punch outlet (day)
- `outlet2.jpg` — Pahadi Punch outlet (night)
- `menu1.jpg` — Pahadi Punch menu board
- `menu2.jpg` — Pahadi Punch outlet with A-frame menu

## Devbhoomi Drink Website Sections

1. Hero — देवभूमि (Devanagari) + "drink" cursive with floating fruit animations
2. Product showcase — Malta and Buransh juices (₹10 and ₹20)
3. Nature vs Factory comparison section
4. Pahadi Punch sister outlet (Rishikesh)
5. Uttarakhand Pride section
6. Meet the Founder — Sachin Gairola
7. Footer with Instagram, contact info

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
