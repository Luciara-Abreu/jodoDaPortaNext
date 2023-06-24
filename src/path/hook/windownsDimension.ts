import { useState, useEffect } from 'react';


//seWindowDimensions, que é uma função personalizada que retorna o tamanho da janela
const useWindowDimensions = () => {
  const isClient = typeof window === 'object';

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    isClient ? getWindowDimensions() : { width: 0, height: 0 }
  );

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return windowDimensions;
};

export default useWindowDimensions;
