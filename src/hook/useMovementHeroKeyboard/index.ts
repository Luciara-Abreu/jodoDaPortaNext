import { useEffect, useState } from "react";
import { EDirection } from "@/settings/constants";

const initialPosition = {
  y: 1,
  x: 0,
};

function useMovementHeroKeyboard() {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === EDirection.LEFT) {
        if (position.x >= 0 && position.x <= 19) {
          const newState = { x: position.x - 1, y: position.y };
          setPosition(newState);
          setDirection(EDirection.LEFT);
        }
      } else if (event.key === EDirection.RIGHT) {
        if (position.x >= -40 && position.x <= 18) {
          const newState = { x: position.x + 1, y: position.y };
          setPosition(newState);
          setDirection(EDirection.RIGHT);
        }
      } else if (event.key === EDirection.UP) {
        if (position.y >= 1 && position.y <= 16) {
          const newState = { x: position.x, y: position.y + 1 };
          setPosition(newState);
        }
      } else if (event.key === EDirection.DOWN) {
        if (position.y > 1 && position.y <= 17) {
          const newState = { x: position.x, y: position.y - 1 };
          setPosition(newState);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position]);

  return { position, direction };
}

export default useMovementHeroKeyboard;
