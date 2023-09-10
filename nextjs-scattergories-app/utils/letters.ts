```typescript
// nextjs-scattergories-app/utils/letters.ts

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function getRandomLetter(): string {
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
}
```