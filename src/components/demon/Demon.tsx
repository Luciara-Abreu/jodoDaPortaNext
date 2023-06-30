import { DemonImage } from "./styles";
import useMovementMonsters from "@/hook/useMovementMonsters";
import { IiPositionProps } from "@/interfaces/movement";
import { EDirection } from "@/settings/constants";

const initialPositionDemon = {
  x: 15 * 10,
  y: 5 * 10,
};
const Demon = (initialPositionDemon: IiPositionProps) => {
  const moviment = useMovementMonsters(initialPositionDemon);
  const bottom = moviment.position.y;
  const left = moviment.position.x;

  const imageStyle = {
    bottom: `${bottom}px`,
    left: `${left}px`,
    transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
  };
  return (
    <>
      <DemonImage style={imageStyle} />
    </>
  );
};
export default Demon;
