```typescript
type Question = {
  category: string;
  question: string;
};

const categories = [
  "girls names starting with",
  "cities starting with",
  "vegetables starting with",
  "movies starting with",
  "celebrities starting with",
  "boys names starting with",
  "books starting with",
];

export const generateQuestions = (letter: string): Question[] => {
  return categories.map((category) => ({
    category,
    question: `${category}.. ${letter}`,
  }));
};
```