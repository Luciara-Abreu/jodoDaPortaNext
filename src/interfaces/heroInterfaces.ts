export interface IHeroProps {
  //buttonTop: number;
  buttonRight: number;
  //buttonBotton: number; 
  buttonLeft: number;
}

export interface ButtonHeroProps {
  onPositionUpdate: (buttonLeft: number, buttonRight: number) => void;
}