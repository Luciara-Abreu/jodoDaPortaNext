import { useEffect, useState } from "react";
import { EDirection } from "@/settings/constants";

function useHeroMoviment(initialPosition: { y: number; x: number }) {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === EDirection.LEFT) {
        setPosition({ x: position.x - 1, y: position.y });
        setDirection(EDirection.LEFT);
      } else if (event.key === EDirection.RIGHT) {
        setPosition({ x: position.x + 1, y: position.y });
        setDirection(EDirection.RIGHT);
      } else if (event.key === EDirection.DOWN) {
        setPosition({ x: position.x, y: position.y + 1 });
      } else if (event.key === EDirection.UP) {
        setPosition({ x: position.x, y: position.y - 1 });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return { position, direction };
}

export default useHeroMoviment;
