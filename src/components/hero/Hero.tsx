import React, { useState, useRef, useEffect } from 'react';
import { HeroImage } from './styles';
import { IHeroProps } from '@/interfaces/heroInterfaces';

const Hero: React.FC<IHeroProps> = ({ buttonLeft, buttonRight, buttonDown, buttonUp }) => {
  const buttonLeftRef = useRef(buttonLeft);
  const [transform, setTransform] = useState('scaleX(1)');

  useEffect(() => {
    const isIncremented = buttonLeft > buttonLeftRef.current;
    const isDecremented = buttonLeft < buttonLeftRef.current;
    buttonLeftRef.current = buttonLeft;

    if (isIncremented) {
      console.log('Hero isIncremented ===> ', isIncremented);
      setTransform('scaleX(1)');
    } else {
      console.log('Hero isDecremented ===> ', isDecremented);
      setTransform('scaleX(-1)');
    }
  }, [buttonLeft]);

  const imageStyle = {
    left: `${buttonLeft}px`,
    right: `${buttonRight}px`,
    top: `${buttonDown}px`,
    bottom: `${buttonUp}px`,
    transform: transform,
  };

  return (
    <>
      <HeroImage style={imageStyle} />
    </>
  );
};

export default Hero;
