import { IProps } from "@/interfaces";
import ContainerTile from "./styles";
import { TILE_BIG_SIZE, TILE_SIZE } from "@/settings/constants";
import UseTileCollor from "@/hook/useTileCollor";
import useScreenSize from "@/hook/useScreenSize";

function Tile(props: IProps) {
  const color = UseTileCollor(props);
  const isSmallScreen = useScreenSize()

  const styleBigScreen = {
    left: `${props.initialPosition.x * TILE_SIZE}px`,
    top: `${props.initialPosition.y * TILE_BIG_SIZE}px`,
    width: `${TILE_SIZE}px`,
    height: `${TILE_BIG_SIZE}px`,
    color: color,
    border: ` 2px solid ${color}`,
  };

  const styleSmallScreen = {
    left: `${props.initialPosition.x * TILE_SIZE}px`,
    top: `${props.initialPosition.y * TILE_SIZE}px`,
    width: `${TILE_SIZE}px`,
    height: `${TILE_SIZE}px`,
    color: color,
    border: ` 2px solid ${color}`,
  };


  return <ContainerTile style={isSmallScreen ? styleSmallScreen : styleBigScreen}>{props.text}</ContainerTile>;
}

export default Tile;
