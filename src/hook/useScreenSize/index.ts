import { useState, useEffect } from 'react';
import useWindowDimensions from '../useWindowsDimension';

const useScreenSize = (breakpoint: number) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { width } = useWindowDimensions();
  // eslint-disable-next-line no-console
  console.log('useScreenSize', width, isSmallScreen)

  useEffect(() => {
    setIsSmallScreen(width <= breakpoint);
  }, [width, breakpoint]);

  return isSmallScreen;
};

export default useScreenSize;