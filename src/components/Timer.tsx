import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Timer as TimerIcon } from "lucide-react";

const Timer = ({ startTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(startTime);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp(); // Trigger when time is up
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 1) {
          clearInterval(timer); // Clear interval once the time is up
          onTimeUp(); // Trigger the time up callback
        }
        return prevTime - 1; // Decrement time
      });
    }, 1000);

    return () => clearInterval(timer); // Clear interval on component unmount or when timer ends
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Card className="w-fit mx-auto mb-4 bg-background">
      <CardContent className="flex items-center justify-center p-4 space-x-2">
        <TimerIcon className="w-5 h-5 text-primary" />
        <span className="text-xl font-semibold text-primary">
          Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </CardContent>
    </Card>
  );
};

export default Timer;