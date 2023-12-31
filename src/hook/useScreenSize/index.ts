import { useState, useEffect } from 'react';
import useWindowDimensions from '../useWindowsDimension';

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const { width } = useWindowDimensions();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const breakpoints = [1024, 1440, 2560, 1360, 1366, 2040];

  useEffect(() => {
    let isSmall = true;

    for (let i = 0; i < breakpoints.length; i++) {
      if (width === breakpoints[i] || width > 2040) {
        isSmall = false;
        break;
      }
    }

    setIsSmallScreen(isSmall);
  }, [width, breakpoints]);

  return isSmallScreen;
};

export default useScreenSize;