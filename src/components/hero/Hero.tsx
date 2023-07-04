import React from "react";
import { HeroImage } from "./styles";
import useDirection from "@/hook/useDirectionHero";
import useMovementMonsters from "@/hook/useMovementMonsters";
import { TILE_SIZE, EDirection } from "@/settings/constants";
import { CombinedProps } from "@/interfaces";
import useScreenSize from "@/hook/useScreenSize";

const Hero: React.FC<CombinedProps> = ({
  buttonLeft,
  buttonRight,
  buttonDown,
  buttonUp,
  initialPosition,
  text,
}) => {
  const transform = useDirection(buttonLeft);
  const moviment = useMovementMonsters({ initialPosition, text });
  const isSmallScreen = useScreenSize(768);

  console.log("moviment Hero ==> ", moviment.position.y, moviment.position.x);

  const movimentKeyboard = {
    /*left: `${moviment.position.x * TILE_SIZE}px`,
    top: `${moviment.position.y * TILE_SIZE}px`,
    transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,*/
  };

  const movimentButton = {
    left: `${buttonLeft}px`,
    right: `${buttonRight}px`,
    top: `${buttonDown}px`,
    bottom: `${buttonUp}px`,
    transform: transform,
  };

  return (
    <>
      <HeroImage style={isSmallScreen ? movimentButton : movimentKeyboard} />
    </>
  );
};

export default Hero;
