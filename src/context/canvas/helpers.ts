import { IMovementProps } from "@/interfaces";
import { ECanvas, EDirection } from "@/settings/constants";

export function handleNextMoviment(direction: string, position: IMovementProps) {
  switch (direction) {
    case EDirection.LEFT:
      if (position.x > 1 && position.x <= 18) {
        return { x: position.x - 1, y: position.y };
      }
    case EDirection.RIGHT:
      if (position.x >= 1 && position.x <= 17) {
        return { x: position.x + 1, y: position.y };
      }
    case EDirection.DOWN:
      if (position.y > 1 && position.y <= 17) {
        return { x: position.x, y: position.y - 1 };
      }
    case EDirection.UP:
      if (position.y >= 1 && position.y <= 16) {
        return { x: position.x, y: position.y + 1 };
      }
  }
}


const FL = ECanvas.FLOOR;
const WL = ECanvas.WALL;
const DR = ECanvas.DOOR;
const TR = ECanvas.TRAP;
const MD = ECanvas.MINI_DEMON;
const DE = ECanvas.DEMON;
const CH = ECanvas.CHEST;
const HE = ECanvas.HERO;



export const Canvas = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL, WL],
  [FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [FL, TR, FL, FL, FL, CH, MD, FL, FL, TR, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, WL],
  [FL, FL, TR, FL, FL, TR, FL, FL, FL, FL, TR, FL, TR, FL, FL, TR, FL, TR, FL, FL, WL],
  [FL, FL, FL, FL, TR, FL, TR, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, CH, MD, FL, WL],
  [FL, FL, FL, TR, FL, FL, FL, TR, FL, FL, FL, FL, FL, TR, TR, FL, FL, FL, FL, FL, WL],
  [FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, TR, TR, FL, FL, TR, FL, FL, WL],
  [FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, MD, FL, FL, TR, FL, FL, FL, WL],
  [FL, FL, FL, FL, FL, TR, TR, TR, FL, FL, TR, FL, FL, FL, TR, FL, FL, FL, FL, FL, WL],
  [FL, FL, FL, FL, FL, FL, CH, MD, TR,TR,  FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, WL],
  [FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [MD, FL, TR, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, WL],
  [FL, TR, FL, FL, FL, TR, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, CH, MD, FL, WL],
  [FL, FL, FL, FL, TR, FL, FL, TR, FL, FL, FL, TR, FL, FL, TR, FL, TR, FL, FL, FL, WL],
  [FL, FL, FL, TR, FL, FL, FL, FL, TR, FL, FL, FL, TR, FL, FL, TR, TR, FL, FL, FL, WL],
  [FL, FL, TR, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, WL],
  [FL, HE, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
]
