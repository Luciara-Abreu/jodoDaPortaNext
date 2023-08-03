import { DemonImage } from "./styles";
import useMovementMonsters from "@/hook/useMovementMonsters";
import useScreenSize from "@/hook/useScreenSize";
import { IProps } from "@/interfaces";
import { EDirection, TILE_BIG_SIZE, TILE_SIZE } from "@/settings/constants";

const Demon = (props: IProps) => {
  const moviment = useMovementMonsters(props);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isSmallScreen = useScreenSize()

  const smallScreen = {
    top: `${moviment.position.y * TILE_SIZE}px`,
    left: `${moviment.position.x * TILE_SIZE}px`,
    transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
  };

  const bigScreen = {
    top: `${moviment.position.y * TILE_BIG_SIZE}px`,
    left: `${moviment.position.x * TILE_BIG_SIZE}px`,
    transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
  };
  return (
    <>
      <DemonImage style={isSmallScreen ? smallScreen :  bigScreen} />
    </>
  );
};
export default Demon;
