import { useEffect, useState } from 'react';

export const useDevMode = (key = 'devmode'): boolean => {
  const [isOn, setIsOn] = useState(localStorage.getItem(key) === 'true');

  useEffect(() => {
    const handleStorageEvent = (event: StorageEvent) => {
      if (event.key === key) setIsOn(event.newValue === 'true');
    };
    window.addEventListener('storage', handleStorageEvent);
    return () => {
      window.removeEventListener('storage', handleStorageEvent);
    };
  }, []);

  return isOn;
};
