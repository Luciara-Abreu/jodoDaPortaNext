import { IProps } from "@/interfaces/movement";
import ContainerTile from "./styles";
import { TILE_SIZE } from "@/settings/constants";

function Tile(props: IProps) {
  const imageStyle = {
    left: `${TILE_SIZE * props.initialPosition.x}px`,
    bottom: `${TILE_SIZE * props.initialPosition.y}px`,
    width: `${35}px`,
    height: `${23}px`,
  };

  return <ContainerTile style={imageStyle}></ContainerTile>;
}

export default Tile;
