import useInterval from "react-useinterval";
import { useState } from "react";
import { EDirection } from "@/settings/constants";
import { handleNextMoviment } from "@/context/canvas/helpers";
import { IiPositionProps } from "@/interfaces/movement";
import EndOfMapaState from "../useEndOfMapa";

function useMovementMonsters(initialPosition: IiPositionProps) {
  const [positionState, setPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState<EDirection>(EDirection.RIGHT);

  const { endOfMapaX, endOfMapaY } = EndOfMapaState();

  useInterval(() => {
    const random = Math.floor(Math.random() * 4);
    const directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const nextMovement = handleNextMoviment(randomDirection, positionState);
    if (
      nextMovement /*&&
      nextMovement.y >= 10 &&
      nextMovement.y <= endOfMapaY &&
      nextMovement.x >= 10 &&
      nextMovement.x <= endOfMapaX*/
    ) {
      console.log("nextMovement.x", nextMovement, "endOfMapaX", endOfMapaX);
      console.log("nextMovement.y", nextMovement, "endOfMapaY", endOfMapaY);

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
