import useInterval from "react-useinterval";
import { useState } from "react";
import { EDirection } from "@/settings/constants";
import { handleNextMoviment } from "@/context/canvas/helpers";
import { IiPositionProps } from "@/interfaces/movement";


function useMovementMonsters(initialPosition: IiPositionProps) {
  const [positionState, setPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState<EDirection>(EDirection.RIGHT);

  useInterval(() => {
    const random = Math.floor(Math.random() * 4);
    const directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const nextMovement = handleNextMoviment(randomDirection, positionState);
    if (nextMovement) {
      setPositionState(nextMovement);
      setDirection(randomDirection);
      console.log("Executou");
    }
  }, 2000);

  return {
    position: positionState,
    direction,
  };
}

export default useMovementMonsters;
