# Engineering Guidelines — SpeakHeart

## Principles
- Authenticity, Safety, Performance, Maintainability.
- Prefer clarity over cleverness. No duplication; extract shared helpers.

## Stack Rules
- Mobile via Expo (unless ADR changes).
- Expo Router for navigation, React Query for server state.
- Choose Zustand or Redux Toolkit; document in ADR.

## File Size & Structure
- Any file >200 lines must be split into smaller modules.
- One component per file; co-locate tests and styles.
- Feature-first folder structure under `src/features/*`.

## Code Style
- TypeScript strict mode.
- Descriptive names; avoid 1–2 char identifiers.
- Early returns; avoid deep nesting.
- No meaningless try/catch. Handle errors with intent.
- Comments only for non-obvious rationale/edge cases.

## Testing
- Unit: Jest/RTL
- Component tests for core primitives.
- E2E for critical flows: auth, KYC, chat, calls.

## Performance
- Hermes enabled; production minify/inlineRequires.
- Memoize heavy components; selector-based state.
- Virtualize long lists.
- Track JS bundle size in CI; enforce budgets.

## Security & Privacy
- Store tokens securely; minimize PII on device.
- KYC flow hardened against tampering.

## Review & PRs
- Small PRs, linked to issue.
- Checklists: tests added, file size respected, no duplication, types ok.

## Helpers & Utilities
- Place pure helpers in `src/utils`. No IO side effects.
- Reuse shared hooks/components; do not duplicate similar code.

## Production Checklist
- Build & runtime
  - Hermes + release optimizations on EAS builds
  - OTA channels (dev/preview/prod) with phased rollouts
  - App bundle size budget enforced in CI
- Data & state
  - React Query for server state; offline retries
  - Client state via Zustand/RTK with selectors
  - Secure persistence: `expo-secure-store`; MMKV for non-secrets
- Networking
  - Exponential backoff, circuit breakers, idempotent mutations
  - Request tracing headers; gzip/brotli enabled
  - Offline queue for critical actions
- Media
  - Audio via `expo-av`; standardized formats, duration caps
  - CDN-backed uploads (resumable/chunked), signed URLs
- Realtime & Calls
  - Managed realtime (e.g., Ably/Pusher) with backpressure
  - WebRTC provider (ADR) with <2s join target
- Monitoring & Flags
  - Sentry crash + performance tracing
  - PostHog analytics with taxonomy
  - Feature flags and kill switches
- Security
  - KYC provider with backend verification
  - Device integrity heuristics; token rotation
  - Rate limits and abuse detection
- Privacy & Compliance
  - Consent gating; PII scrubbing in logs
  - Region-aware storage; DSR (export/delete) paths
- Release Readiness
  - App Store/Play assets
  - Forced upgrade for breaking protocol changes
  - Rollback plan and feature flag coverage
