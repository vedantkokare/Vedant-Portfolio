import { useState, useEffect } from 'react';

/**
 * Live clock fixed to Mumbai (IST / Asia/Kolkata) timezone.
 */
export function useClock() {
  const getKolkataTime = () => {
    const now = new Date();
    return new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(now);
  };

  const [time, setTime] = useState(getKolkataTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getKolkataTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { time, location: 'Mumbai', zone: 'IST' };
}
