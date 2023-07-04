import { useState, useEffect } from 'react';
import useWindowDimensions from '../useWindowsDimension';

const useScreenSize = (breakpoint: number) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsSmallScreen(width <= breakpoint);
  }, [width, breakpoint]);

  return isSmallScreen;
};

export default useScreenSize;