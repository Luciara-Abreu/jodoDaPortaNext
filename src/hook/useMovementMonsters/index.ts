import useInterval from "react-useinterval";
import { useState } from "react";
import { EDirection } from "@/settings/constants";
import { handleNextMoviment } from "@/context/canvas/helpers";
import { IProps } from "@/interfaces";

function useMovementMonsters(props: IProps) {
  const [position, setPosition] = useState(props.initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useInterval(() => {
    const random = Math.floor(Math.random() * 4);
    const directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const nextMovement = handleNextMoviment(randomDirection, position);
    if (nextMovement) {
      setPosition(nextMovement);
      setDirection(randomDirection);
      //console.log("Executou");
    }
  }, 20000);

  return {
    position,
    direction,
  };
}

export default useMovementMonsters;
