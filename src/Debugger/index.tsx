import { IProps } from "@/interfaces/movement";
import Tile from "./Tale";
import { Canvas } from "@/context/canvas/helpers";

function getCanvasMap() {
  const tilesArray = [];

  for (let y = 0; y < Canvas.length; y++) {
    const canvasY = Canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = Canvas[y][x] || canvasYX;

      tilesArray.push(<Tile initialPosition={position} text={text} />);
    }
  }
  return tilesArray;
}

function Debugger(props: IProps) {
  const tiles = getCanvasMap();
  return (
    <div>
 {tiles}
    </div>
  );
}

export default Debugger;


/**
 *      <Tile initialPosition={{ x: 5, y: 5 }} />;
      <Tile initialPosition={{ x: 5, y: 6 }} />;
      <Tile initialPosition={{ x: 5, y: 7 }} />;
 */