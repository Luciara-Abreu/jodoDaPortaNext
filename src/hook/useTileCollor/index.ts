import { IProps } from "@/interfaces";

function UseTileCollor(props: IProps) {
  switch (props.text) {
    case 0:
      return "yellow";
    case 1:
      return "red";
  }
}

export default UseTileCollor;
