import { useEffect, useRef } from 'react';

export const useErMontert = () => {
  const erMontertRef = useRef(true);
  useEffect(() => {
    erMontertRef.current = true;
    return () => {
      erMontertRef.current = false;
    };
  }, []);
  return erMontertRef;
};
