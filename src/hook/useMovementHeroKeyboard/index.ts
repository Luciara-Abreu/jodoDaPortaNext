import { useEffect, useState } from "react";
import { EDirection } from "@/settings/constants";
import { IPropsHero } from "@/interfaces";


function useMovementHeroKeyboard(props: IPropsHero) {
  const [position, setPosition] = useState(props.initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === EDirection.LEFT) {
        if (position.x >= 1 && position.x <= 19) {
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
      } else if (event.key === EDirection.DOWN) {
        if (position.y >= 1 && position.y <= 17) {
          const newState = { x: position.x, y: position.y + 1 };
          // eslint-disable-next-line no-console
          console.log('position.y DOWN', position.y)
          setPosition(newState);
        }
      } else if (event.key === EDirection.UP) {
        if (position.y > 2 && position.y <= 18) {
          const newState = { x: position.x, y: position.y - 1 };
          // eslint-disable-next-line no-console
          console.log('position.y UP', position.y)
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
