import { useState, useEffect } from 'react';
import useScreenWidth from './useScreenWidth';

const useText = (longText: string, shortText: string, breakpoint: number) => {
  const [text, setText] = useState('');
  const screenWidth = useScreenWidth();

  useEffect(() => {
    screenWidth > breakpoint ? setText(longText) : setText(shortText);
  }, [longText, shortText, breakpoint, screenWidth]);

  return text;
};

export default useText;
