import { IProps } from "@/interfaces/movement";
import Tile from "./Tale";
import ContainerDebugger from "./styles";
import { Canvas } from "@/context/canvas/helpers";

function getCanvasMap() {
  const tilesArray = [];

  for (let y = 0; y < Canvas.length; y++) {
    const canvasY = Canvas[y];

    for (let x = 0; x < Canvas.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = Canvas[y][x] | canvasYX;

      tilesArray.push(<Tile initialPosition={{ x: 0.9, y: 1 }} text={text} />);
    }
  }
  return tilesArray;
}

function Debugger(props: IProps) {
  const tiles = getCanvasMap();
  return <ContainerDebugger>{tiles}</ContainerDebugger>;
}

export default Debugger;
