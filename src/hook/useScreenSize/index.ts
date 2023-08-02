import { useState, useEffect } from 'react';
import useWindowDimensions from '../useWindowsDimension';

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { width } = useWindowDimensions();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const breakpoints = [2611, 1445, 1275, ,1156, 1105, 1088, 986, 975, 968, 900, 868];

  useEffect(() => {
    let isSmall = false;

    for (let i = 0; i < breakpoints.length; i++) {
      if (width === breakpoints[i]) {
        isSmall = true;
        break;
      }
    }

    setIsSmallScreen(isSmall);
  }, [width, breakpoints]);

  return isSmallScreen;
};

export default useScreenSize;