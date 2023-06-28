import React, { useState, useRef, useEffect } from 'react';
import { HeroImage } from './styles';
import { IHeroProps } from '@/interfaces/heroInterfaces';
import useDirection from '@/hoocks/useDirection';

const Hero: React.FC<IHeroProps> = ({ buttonLeft, buttonRight, buttonDown, buttonUp }) => {
  const transform = useDirection(buttonLeft); 

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
