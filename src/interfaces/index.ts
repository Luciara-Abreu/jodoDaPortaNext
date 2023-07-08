export interface IHeroProps {
  buttonLeft: number;
  buttonRight: number;
  buttonDown: number;
  buttonUp: number;
}



export interface ButtonHeroXProps {
  onPositionUpdateX: (buttonLeft: number, buttonRight: number ) => void;
}
export interface ButtonHeroYProps {
  onPositionUpdateY: (buttonDown: number,  buttonUp: number ) => void;
}



export interface CombinedProps extends IProps, IHeroProps {}

export interface IMovementProps {
  y: number;
  x: number;
}


export interface IProps {
  initialPosition: 
  { x: number; 
    y: number;
  };
  text: number;
}
