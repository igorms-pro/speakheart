# ADR-0001: Choose Expo for Mobile

## Status
Proposed

## Context
We need fast iteration, OTA updates, and reliable CI for iOS/Android.

## Decision
Adopt Expo + EAS for the SpeakHeart mobile app.

## Consequences
- Pros: Rapid DX, OTA via release channels, robust device APIs, easy builds
- Cons: Some native limitations; mitigated via config plugins and prebuild
- Next: Standardize Expo Router, React Query, and state library (ADR-0002)
