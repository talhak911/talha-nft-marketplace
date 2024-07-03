import { useState, useEffect, useCallback } from "react";

interface CountDownTime {
  hours: string;
  minutes: string;
  seconds: string;
}

const useCountDown = () => {
  const [countDownTime, setCountDownTime] = useState<CountDownTime>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime: number) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    const hours =
      Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? `${Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`
        : `0${Math.floor(
            (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? `${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`
        : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
        ? `${Math.floor((timeDifference % (60 * 1000)) / 1000)}`
        : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;

    if (timeDifference < 0) {
      setCountDownTime({
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    } else {
      setCountDownTime({
        hours,
        minutes,
        seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    const intervalId = setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const cleanup = startCountDown();
    return cleanup;
  }, [startCountDown]);

  return countDownTime;
};

export default useCountDown;
