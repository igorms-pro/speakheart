# Architecture — SpeakHeart (Mobile)

## High-Level
- Mobile app built with Expo (proposed) for rapid iteration, OTA updates, and EAS builds.
- Modular feature folders, strict file-size policy (>200 lines must be split), shared utilities to avoid duplication.

## App Structure (proposed)
```
app/
  (tabs)/
  (auth)/
  (matchmaking)/
  (chat)/
  _layout.tsx
  index.tsx
src/
  features/
    auth/
    profile/
    matchmaking/
    chat/
    calls/
    kyc/
  components/
  hooks/
  lib/ (api, analytics, env, storage)
  state/ (store slices)
  styles/ (tokens, theming)
  utils/ (pure helpers — no side effects)
```

## Data & State
- Server state: React Query
- Client state: Zustand or Redux Toolkit (decide in ADR)
- Navigation: Expo Router (file-based)

## Key Modules
- KYC: Provider SDK wrapper, secure flow, retries
- Messaging: Realtime (WebSocket/socket.io), optimistic UI
- Calls: Voice/video via WebRTC provider (TBD)
- Media: Audio recording/playback, image blur/unblur pipeline
- Entitlements: Free vs Premium gating

## Security
- KYC mandatory before unlock of advanced features
- Secure storage for tokens
- Minimal PII on device, encrypted at rest

## Testing
- Unit: Jest/RTL
- E2E: Maestro/Detox (TBD)

## CI/CD
- EAS Build/Submit, Preview channels, OTA updates with release channels
