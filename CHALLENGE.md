# Senior Frontend Interview — Code Review & Refactor

Welcome! This interview is **60 minutes** total.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Context

You've just joined the team and inherited this product dashboard. It was shipped quickly by a junior developer and "works," but the codebase has real problems — performance issues, accessibility gaps, architectural concerns, and subtle bugs.

Your job is to **review, prioritize, and fix** what you find.

## The Interview

### Part 1 — Code Review (15 min)

Read through the codebase. Identify as many issues as you can and explain:

- What the problem is
- Why it matters (impact on users, team, or performance)
- How you'd fix it

You don't need to fix everything — we want to see how you **prioritize**.

### Part 2 — Refactor (30 min)

Pick the **3–5 most impactful issues** and fix them. AI tools are encouraged.

We're watching:

- How you use AI (prompt quality, whether you review output critically)
- Whether you understand the *why* behind each fix
- How you structure your changes for a team (readability, naming, separation)

### Part 3 — Architecture Discussion (15 min)

We'll talk through:

- What would you change if this dashboard had 10,000 products?
- How would you structure this for a team of 5 devs?
- What's your testing strategy?
- What would you add before shipping this to production?

## Ground Rules

- You **may** use AI tools (Copilot, ChatGPT, Claude, etc.)
- You **may** install any npm package
- Please **think aloud** — explain your reasoning as you go
- We care about **judgment**, not speed

## Files to Review

```
src/
├── App.tsx                    # Main app — state management, layout
├── components/
│   ├── ProductCard.tsx        # Product card component
│   ├── Filters.tsx            # Search, category, sort controls
│   └── ProductDetail.tsx      # Product detail modal
├── hooks/
│   └── useProducts.ts         # Data fetching hook
└── types/
    └── product.ts             # TypeScript interfaces
```

Good luck!
