import useInterval from "react-useinterval";
import { useState } from "react";
import { EDirection } from "@/settings/constants";
import { handleNextMoviment } from "@/context/canvas/helpers";
import { IProps } from "@/interfaces/IMoviment";

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
      console.log("Executou");
    }
  }, 2000);

  return {
    position,
    direction,
  };
}

export default useMovementMonsters;

/*
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === EDirection.LEFT) {
        setPosition({ x: position.x - 1, y: position.y });
        setDirection(EDirection.LEFT);
      } else if (event.key === EDirection.RIGHT) {
        setPosition({ x: position.x + 1, y: position.y });
        setDirection(EDirection.RIGHT);
      } else if (event.key === EDirection.DOWN) {
        setPosition({ x: position.x, y: position.y - 1 });
      } else if (event.key === EDirection.UP) {
        setPosition({ x: position.x, y: position.y + 1 });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

    };
  }, []);*/
