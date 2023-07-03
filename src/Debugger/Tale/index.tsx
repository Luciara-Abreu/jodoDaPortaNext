import { IProps } from "@/interfaces/movement";
import ContainerTile from "./styles";
import { TILE_SIZE } from "@/settings/constants";

function Tile(props: IProps) {

  const imageStyle = {
    left: `${props.initialPosition.x * TILE_SIZE}px`,
    bottom: `${props.initialPosition.y * TILE_SIZE}px`,
    width: `${TILE_SIZE}px`,
    height: `${TILE_SIZE }px`,
  };

  return <ContainerTile style={imageStyle}></ContainerTile>;
}

export default Tile;
