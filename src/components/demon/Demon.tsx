import { DemonImage } from "./styles";
import useMovementMonsters from "@/hook/useMovementMonsters";
import { IiPositionProps } from "@/interfaces/movement";
import { EDirection } from "@/settings/constants";

const initialPositionDemon = {
  x: 15,
  y: 15,
};
const Demon = (initialPositionDemon: IiPositionProps) => {
  const moviment = useMovementMonsters(initialPositionDemon);

  const imageStyle = {
    bottom: `${moviment.position.y}px`,
    left: `${moviment.position.x}px`,
    transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
  };
  return (
    <>
      <DemonImage style={imageStyle} />
    </>
  );
};
export default Demon;
