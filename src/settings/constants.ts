export const TILE_SIZE: any = 48;
export const GAME_SIZE: any = 20 * TILE_SIZE; //960PX
export const HEAD_OFFSET = 78;

export const TILE_BIG_SIZE: any = 46.5;
export const TILE_SMALL_SIZE: any = TILE_SIZE * 22;
export const GAME_BIG_SIZE_WIDHT: any = 20 * TILE_BIG_SIZE; //610PX
export const GAME_BIG_SIZE_HEIGHT: any = 20 * TILE_BIG_SIZE; //930PX
//***********************************************************/

//Eixo X = hotizontal
const POSITION_RIGHT = 10; // do 3 ao  21 / do 156 ao 174
const POSITION_LEFT = 0; // do 3 ao  21 / do 156 ao 174
const stepLeftRight = 48
const FIM_DO_MAPA_X = 912 // horizontal / inicio 48

//Eixo Y = Vertical
const POSITION_TOP = 10; //1054       // do 1 ao 17  / do 27 ao 43
const POSITION_UP = 10; // do 1 ao 17  / do 27 ao 43
const stepUpDow = 45
const FIM_DO_MAPA_Y = 816 // vertical / inicio 488

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


export enum ECanvas {
  FLOOR = 0,
  WALL = 1,
  DOOR = 2,
  TRAP = 3,
  MINI_DEMON = 4,
  DEMON = 5,
  CHEST = 6,
  HERO = 7
}