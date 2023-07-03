import { IProps } from "@/interfaces/movement";
import Tile from "./Tale";
import { Canvas } from "@/context/canvas/helpers";

function getCanvasMap() {
  const tilesArray = [];

  for (let y = 0; y < Canvas.length; y++) {
    const canvasY = Canvas[y];

    for (let x = 0; x < Canvas.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = Canvas[y][x] | canvasYX;

      tilesArray.push(<Tile initialPosition={{ x: 1, y: 1 }} text={text} />);
    }
  }
  return tilesArray;
}

function Debugger(props: IProps) {
  const tiles = getCanvasMap();
  return (
    <div>
      <Tile initialPosition={{ x: 0, y: 1 }} />;
      <Tile initialPosition={{ x: 0, y: 2 }} />;
      <Tile initialPosition={{ x: 0, y: 3 }} />;
    </div>
  );
}

export default Debugger;
