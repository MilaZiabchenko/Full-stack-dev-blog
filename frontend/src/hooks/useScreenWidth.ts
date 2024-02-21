import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleScreenWidthResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleScreenWidthResize();

    window.addEventListener('resize', handleScreenWidthResize);

    return () => window.removeEventListener('resize', handleScreenWidthResize);
  }, []);

  return screenWidth;
};

export default useScreenWidth;
