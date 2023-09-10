```tsx
import React, { useState, useEffect } from 'react';

interface TimerProps {
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ onTimeUp }) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      onTimeUp();
    }
  }, [seconds, onTimeUp]);

  return (
    <div className="timer">
      <div className="hourglass" style={{ animationDuration: '60s' }} />
      <div className="time-remaining">{seconds}</div>
    </div>
  );
};

export default Timer;
```