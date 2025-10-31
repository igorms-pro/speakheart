# Design System — SpeakHeart

## Foundations
- Color tokens: `primary`, `secondary`, `success`, `warning`, `danger`, `bg`, `text`, `muted`
- Typography: `display`, `title`, `subtitle`, `body`, `caption`
- Spacing scale: 0, 4, 8, 12, 16, 20, 24, 32, 40
- Radius: `xs`, `sm`, `md`, `lg`, `pill`
- Elevation: `none`, `sm`, `md`, `lg`

## Primitives (UI)
- Button (primary/secondary/ghost)
- Text (variants)
- Input (text, multiline)
- AudioWave (recording/playing states)
- Card, Sheet, Modal
- Avatar (blur capability)

## Interaction Patterns
- Progressive reveal: blur → partial → clear, tied to milestones
- One-active-conversation constraint visibly enforced in UI
- Safe defaults: confirmations for destructive actions, clear reporting

## Accessibility
- Voice-first: easy record/playback, visible levels, transcript (TBD)
- Color contrast >= WCAG AA
- Dynamic type support

## Theming
- Light/Dark tokens defined in `styles/tokens.ts`

## Assets
- Icon set (outline, 24px grid)
- Illustration style: soft shapes, warm palette
