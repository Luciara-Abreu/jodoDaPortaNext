import useMovementMonsters from "@/hook/useMovementMonsters";
import { MiniDemonImage } from "./styles";
import { EDirection, TILE_SIZE } from "@/settings/constants";

const MiniDemon = () => {
  const moviment = useMovementMonsters();

  const imageStyle = {
    bottom: `${moviment.position.y * TILE_SIZE}px`,
    left: `${moviment.position.x * TILE_SIZE}px`,
    transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
  };
  return (
    <>
      <MiniDemonImage style={imageStyle} />
    </>
  );
};
export default MiniDemon;
