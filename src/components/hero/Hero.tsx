import React, { useEffect, useState } from "react";
import { HeroImage } from "./styles";
import useDirection from "@/hook/useDirectionHero";
import { IHeroProps } from "@/interfaces";
import useScreenSize from "@/hook/useScreenSize";
import { TILE_SIZE, EDirection } from "@/settings/constants";
import useMovementHero from "@/hook/useMovementHero";

const initialPosition = {
  y: 1,
  x: 1,
};

const Hero: React.FC<IHeroProps> = ({
  buttonLeft,
  buttonRight,
  buttonDown,
  buttonUp,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  const transform = useDirection(buttonLeft);
  const isSmallScreen = useScreenSize(768);
  const movi = useMovementHero();

   const movimentKeyboard = {
    bottom: `${movi.position.y * TILE_SIZE}px`,
    left: `${movi.position.x * TILE_SIZE}px`,
    transform: `scaleX(${movi.direction === EDirection.RIGHT ? 1 : -1})`,
  };
  console.log("Hero ==> ", movimentKeyboard);

  const movimentButton = {
    left: `${buttonLeft}px`,
    right: `${buttonRight}px`,
    top: `${buttonDown}px`,
    bottom: `${buttonUp}px`,
    transform: transform,
  };

  return (
    <>
      <HeroImage style={movimentKeyboard} />
    </>
  );
};

export default Hero;
//  <HeroImage style={isSmallScreen ? movimentButton : movimentKeyboard} />
