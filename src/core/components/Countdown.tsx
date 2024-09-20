import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(3);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 0.1);
      }, 100);
      return () => clearTimeout(timer);
    } else if (timeLeft <= 0) {
      setIsActive(false);
      setTimeLeft(3);
    }
  }, [isActive, timeLeft]);

  const startTimer = () => {
    setIsActive(true);
    setTimeLeft(3);
  };

  useEffect(() => {
    if (timeLeft === 3) {
      startTimer();
    }
  }, [timeLeft]);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - (3 - timeLeft) / 3);

  return (
    <div className="relative h-4 w-4">
      <svg className="h-full w-full" viewBox="0 0 40 40">
        <circle
          className="text-gray-300"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="20"
          cy="20"
        />
        <circle
          className="text-blue-600"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="20"
          cy="20"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-semibold">&nbsp;</span>
      </div>
    </div>
  );
}