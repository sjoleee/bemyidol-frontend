import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

import ConfettiBadge from '@/assets/confettiBadge.svg';

const ConfettiHandler = () => {
  const [isRunConfetti, setIsRunConfetti] = useState(false);
  const [isMountConfetti, setIsMountConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setTimeout(() => {
      setIsMountConfetti(true);
      handleConfetti();
    }, 2000);
  }, []);

  const handleConfetti = () => {
    setIsRunConfetti((prev) => !prev);
    setTimeout(() => {
      setIsRunConfetti((prev) => !prev);
    }, 500);
  };

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setWindowSize({ width, height });
  }, []);

  return (
    <>
      <button className="-rotate-90" onClick={() => handleConfetti()}>
        <ConfettiBadge />
      </button>

      <Confetti
        recycle={isRunConfetti}
        run={isMountConfetti}
        width={windowSize.width}
        height={windowSize.height}
        confettiSource={{
          w: 100,
          h: 300,
          x: windowSize.width / 2 - 50,
          y: windowSize.height - 100,
        }}
        initialVelocityY={20}
        initialVelocityX={10}
        tweenDuration={10}
        numberOfPieces={250}
      />
    </>
  );
};

export default ConfettiHandler;
