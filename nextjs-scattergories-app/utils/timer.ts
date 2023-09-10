```typescript
let countdown: NodeJS.Timeout;

export const startTimer = (callback: () => void, duration: number) => {
  let timeLeft = duration;

  countdown = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      callback();
    }
  }, 1000);
};

export const stopTimer = () => {
  clearInterval(countdown);
};
```