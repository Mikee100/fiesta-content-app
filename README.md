# Fiesta House Content Studio

A production-oriented MVP for generating coordinated Instagram, Facebook and blog content for Fiesta House Maternity.

## Run locally

1. Copy `.env.example` to `.env.local`.
2. Add your AI API key.
3. `npm install`
4. `npm run dev`
5. Open http://localhost:3000

## AI provider

The server route uses an OpenAI-compatible `/chat/completions` endpoint. The defaults target Groq. You can change `AI_BASE_URL` and `AI_MODEL` for another compatible provider.

The API key is used server-side and is never placed in browser code.

## Business knowledge

`lib/prompt.ts` contains the business profile sent with every generation. It includes studio contacts, services, package-specific prices and inclusions, add-ons, and published booking policies sourced from the official homepage and session-packages page on October 3, 2026.

This is a static snapshot, not a live website connection. Update the profile when packages, contacts, hours or policies change. Generated pricing and policy content should direct readers to confirm current details with the studio. Delivery deadlines, deposit amounts, payment methods and other unrecorded details must not be invented. Temporary promotions are not included.

## Current MVP

- Topic suggestions
- AI generation
- Instagram / Facebook / Blog tabs
- Copy to clipboard
- Approve workflow
- Local content history
- Brand-specific system prompt
- JSON response validation and useful provider errors

## Next production steps

- Add authentication
- Replace localStorage with PostgreSQL/Prisma
- Add content calendar and scheduled publishing
- Connect Meta/Instagram publishing after permissions are configured
- Add WordPress REST publishing for blog posts
- Add team roles and audit history
- Add image generation / media library
