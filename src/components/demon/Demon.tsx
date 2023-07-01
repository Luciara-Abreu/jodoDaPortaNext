import { DemonImage } from "./styles";
import useMovementMonsters from "@/hook/useMovementMonsters";
import { EDirection, TILE_SIZE } from "@/settings/constants";

interface IProps {
  initialPosition: { x: number; y: number };
}

const Demon = (props: IProps) => {
  const moviment = useMovementMonsters(props);

  const imageStyle = {
    bottom: `${moviment.position.y * TILE_SIZE}px`,
    left: `${moviment.position.x * TILE_SIZE}px`,
    transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
  };
  return (
    <>
      <DemonImage style={imageStyle} />
    </>
  );
};
export default Demon;
