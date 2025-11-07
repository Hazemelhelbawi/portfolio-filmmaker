import { useEffect, useState } from 'react';

export const usePageScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(window.scrollY);
  const handleScroll = () => {
    const scroll = window.scrollY;
    setScrollPosition(scroll);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return { scrollPosition };
};
