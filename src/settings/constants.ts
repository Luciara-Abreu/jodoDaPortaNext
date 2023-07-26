export const TILE_SIZE: any = 48;
export const GAME_SIZE: any = 20 * TILE_SIZE; //960PX
//***********************************************************/

//Eixo X = hotizontal
const POSITION_RIGHT = 10; // do 3 ao  21 / do 156 ao 174
const POSITION_LEFT = 48; // do 3 ao  21 / do 156 ao 174
const stepLeftRight = 48
const FIM_DO_MAPA_X = 864 // horizontal / inicio 48

//Eixo Y = Vertical
const POSITION_TOP = 48; //1054       // do 1 ao 17  / do 27 ao 43
const POSITION_UP = 10; // do 1 ao 17  / do 27 ao 43
const stepUpDow = 49
const FIM_DO_MAPA_Y = 848 // vertical / inicio 488

export {
  stepLeftRight,
  FIM_DO_MAPA_X,
  stepUpDow,
  FIM_DO_MAPA_Y,
  POSITION_TOP,
  POSITION_UP,
  POSITION_RIGHT,
  POSITION_LEFT
}

//***********************************************************/

export enum EDirection {
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
  UP = "ArrowUp",
  DOWN = "ArrowDown",
}
