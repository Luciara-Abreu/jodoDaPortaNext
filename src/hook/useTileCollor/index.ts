import { IProps } from "@/interfaces";
import { ECanvas } from "@/settings/constants";

function UseTileCollor(props: IProps) {
  switch (props.text) {
    case ECanvas.FLOOR:
      return "darkgray";
    case ECanvas.WALL:
      return "red";
    case ECanvas.TRAP:
      return "#240371";
    case ECanvas.CHEST:
      return "yellow";
    case ECanvas.HERO:
      return "#da0dc0";
    case ECanvas.MINI_DEMON:
      return "green";
    case ECanvas.DEMON:
      return "green";
  }
}

export default UseTileCollor;
