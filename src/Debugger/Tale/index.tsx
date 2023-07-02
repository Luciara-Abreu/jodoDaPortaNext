import { IProps } from "@/interfaces/movement";
import ContainerTile from "./styles";

function Tile(props: IProps) {
  const imageStyle = {
    left: `${props.initialPosition.x * 8}px`,
    bottom: `${props.initialPosition.y * 27}px`,
    width: `${35}px`,
    height: `${23}px`,
  };

  return <ContainerTile style={imageStyle}></ContainerTile>;
}

export default Tile;
