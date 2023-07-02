import { IProps } from "@/interfaces/movement";
import Tile from "./Tale";
import ContainerDebugger from "./styles";

function Debugger(props: IProps) {
  return (
    <ContainerDebugger>
      <Tile initialPosition={{ x: 0.9, y: 1 }} />
      <Tile initialPosition={{ x: 0.9, y: 2 }} />
      <Tile initialPosition={{ x: 0.9, y: 3 }} />
    </ContainerDebugger>
  );
}

export default Debugger;
