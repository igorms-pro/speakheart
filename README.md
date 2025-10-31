# SpeakHeart

SpeakHeart is a new-generation dating app focused on authentic connections through voice, conversation, and emotional compatibility. It emphasizes progressive reveal, one active connection at a time, and strong safety (KYC) to foster meaningful interactions.

## Quick Links
- Product Brief: `docs/PRODUCT_BRIEF.md`
- Architecture: `docs/ARCHITECTURE.md`
- Design System: `docs/DESIGN_SYSTEM.md`
- Engineering Guidelines: `docs/ENGINEERING_GUIDELINES.md`
- Agents & Roles: `docs/AGENTS.md`
- ADR-0001: Choose Expo: `docs/ADR/ADR-0001-choose-expo.md`

## Tech Stack (proposed)
- Mobile: React Native via Expo (EAS for builds, OTA updates)
- State: Expo Router + React Query + Zustand or Redux Toolkit (TBD)
- UI: Expo + Tamagui/Dripsy/NativeWind (TBD), custom tokens
- Auth & KYC: TBD provider (Persona/Onfido), Supabase/Clerk/Auth0 (TBD)
- Backend: TBD (Supabase/Hasura/NestJS/Node), Realtime via WebSockets

## Getting Started (after initialization)
1) Ensure Node 18+ and Yarn or PNPM installed
2) Install deps: `yarn` or `pnpm i`
3) Run app: `npx expo start`

See `docs/ARCHITECTURE.md` for structure and `docs/ENGINEERING_GUIDELINES.md` for coding rules.
# speakheart
