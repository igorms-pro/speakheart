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
- Unit tests for pure logic and hooks.
- Component tests for core primitives.
- E2E for critical flows: auth, KYC, chat, calls.

## Performance
- Memoize heavy components.
- Virtualize long lists.
- Avoid unnecessary re-renders (selector-based state).

## Security & Privacy
- Store tokens securely; minimize PII on device.
- KYC flow hardened against tampering.

## Review & PRs
- Small PRs, linked to issue.
- Checklists: tests added, file size respected, no duplication, types ok.

## Helpers & Utilities
- Place pure helpers in `src/utils`. No IO side effects.
- Reuse shared hooks/components; do not duplicate similar code.
