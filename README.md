# Tiffin Time Machine
*Every lunchbox carries a world of memories.* DJXHack Residency 2026, "Everyday Magic".

React + Vite + TypeScript + Tailwind + Framer Motion. No API keys, no backend, no remote assets.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # type-checks, then outputs dist/
    npm run preview

## Deploy to Vercel
Push to GitHub, import the repo at vercel.com (framework: Vite, build `npm run build`, output `dist`), click Deploy. Or run `npx vercel` from this folder.

## What is real vs. simulated
- Real: all interactions, branching stories, Pass the Bite, randomized Surprise, form validation, optional Web Audio tones, reduced-motion support.
- Memories exist only in React state for the current session. They are not saved or shared. The three gallery examples are labeled and written by the team.
