import { useState, useEffect } from 'react';
import useWindowDimensions from '../useWindowsDimension';

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { width } = useWindowDimensions();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const breakpoints = [1105, 975, 900, 868];

  useEffect(() => {
    let isSmall = false;

    for (let i = 0; i < breakpoints.length; i++) {
      if (width === breakpoints[i] || width < 1000) {
        isSmall = true;
        break;
      }
    }

    setIsSmallScreen(isSmall);
  }, [width, breakpoints]);

  return isSmallScreen;
};

export default useScreenSize;