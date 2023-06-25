export interface IHeroProps {
  buttonLeft: number;
  buttonRight: number;
  buttonDown: number;
  buttonUp: number;
  transform: {
    direction: 'left' | 'right',
  };
}

export interface ButtonHeroXProps {
  onPositionUpdateX: (buttonLeft: number, buttonRight: number ) => void;
}
export interface ButtonHeroYProps {
  onPositionUpdateY: (buttonDown: number,  buttonUp: number ) => void;
}