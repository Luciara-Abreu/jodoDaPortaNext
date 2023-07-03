import { IProps } from "@/interfaces/movement";
import ContainerTile from "./styles";
import { TILE_SIZE } from "@/settings/constants";
import UseTileCollor from "@/hook/useTileCollor";

function Tile(props: IProps) {
  const color = UseTileCollor(props);

  const imageStyle = {
    left: `${props.initialPosition.x * TILE_SIZE}px`,
    top: `${props.initialPosition.y * TILE_SIZE}px`,
    width: `${TILE_SIZE}px`,
    height: `${TILE_SIZE}px`,
    color: color,
    border: ` 2px solid ${color}`,
  };

  return <ContainerTile style={imageStyle}>{props.text}</ContainerTile>;
}

export default Tile;
