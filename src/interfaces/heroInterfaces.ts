export interface IHeroProps {
  buttonLeft: number;
  buttonRight: number;
  buttonDown: number;
  buttonUp: number;
  //buttonBotton: number; 
}

export interface ButtonHeroProps {
  onPositionUpdate: (buttonLeft: number, buttonRight: number, buttonDown: number,  buttonUp: number ) => void;
}