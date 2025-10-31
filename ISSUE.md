# SpeakHeart — Initial Roadmap & CTO TODOs

## 0. Repo Hygiene & Automation
- Initialize git, main branch, remote, protected branches
- Add semantic PR template and issue templates
- Set up CODEOWNERS for critical paths
- Add Husky pre-commit hooks + lint-staged (TS/JS/MD)
- Add commitlint (conventional commits) + release-please (versioning)

## 1. App Foundation (Expo)
- Finalize Expo + EAS decision (ADR-0001) [done]
- Scaffold `apps/mobile` with `expo-router` [done]
- Add TypeScript config and base ESLint/Prettier [done]
- Establish file-size policy (>200 lines split) [done]

## 2. Design System & Accessibility
- Define tokens: color, spacing, typography, radius, elevation
- Build primitives: Button, Text, Input, Card, Modal, AudioWave, Avatar (blur)
- Light/Dark themes; WCAG AA contrast and dynamic type
- Storybook/Expo Storybook for primitives (optional)

## 3. Auth & KYC
- Evaluate auth provider: Clerk/Auth0/Supabase
- Pick KYC provider: Persona/Onfido; POC + SDK integration plan
- Secure storage of tokens; session refresh strategy
- Feature gating based on KYC completion

## 4. Matchmaking & Discovery
- Schema for interests, prompts, and likes
- Voice/text prompt system and like interactions
- Ranking/matching service: initial heuristic + future model hooks

## 5. Messaging & Calls
- Realtime messaging: WebSockets (provider TBD)
- Voice notes: record, upload, playback, waveform UI
- Voice/video calls: provider (WebRTC/Twilio/Vonage) evaluation and POC
- Time-limited conversations and progressive unlock rules

## 6. Progressive Reveal & One-Active-Conversation Logic
- Milestones to reveal: message count/time-based/engagement-based
- Enforce single active conversation per user (+ premium overrides)
- UI states for locked/unlocked features

## 7. Data Platform & Backend
- Backend approach: Supabase/Hasura vs custom Node/NestJS
- Data models: users, profiles, kyc, matches, conversations, messages, media
- Media handling: S3/Cloudflare R2; signed URLs; retention policy
- Rate limits, abuse detection, and report pipeline

## 8. Payments & Entitlements
- Stripe in-app subscriptions (via App Store/Play) and server validation
- Entitlement mapping: free vs premium features
- Upgrade/downgrade flows and proration handling

## 9. Analytics, Tracking, and PostHog
- Add PostHog (self-host or cloud) for product analytics
- Event taxonomy: auth, kyc, match, message, call, reveal, upgrade
- Privacy mode and GDPR/CCPA compliance

## 10. Quality Engineering
- Unit: Jest + RTL
- E2E: Detox or Maestro; smoke suite for critical paths
- CI: GitHub Actions + EAS Build/Submit; preview channels; OTA release flow

## 11. Security & Compliance
- KYC anti-tamper; secure SDK flow
- PII minimization; at-rest and in-transit encryption
- Content moderation pipeline (TBD)

## 12. Launch Checklist
- App Store/Play listing assets
- Crash/error reporting (Sentry)
- Feature flags and kill switches
- Rollback plan & A/B experiments

---

## Immediate Tasks (Sprint 0)
- Add Husky + lint-staged + commitlint config
- Add GitHub PR template, issue templates, CODEOWNERS
- Pick state lib (Zustand vs RTK) and document in ADR-0002
- Create design tokens file and Button/Text primitives
- Add PostHog SDK and basic screen tracking
