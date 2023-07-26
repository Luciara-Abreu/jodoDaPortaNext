export const TILE_SIZE: any = 48;
export const GAME_SIZE: any = 20 * TILE_SIZE; //960PX
//***********************************************************/

export const POSITION_TOP = 48; //1054       // do 1 ao 17  / do 27 ao 43
export const POSITION_UP = 10; // do 1 ao 17  / do 27 ao 43

export const POSITION_RIGHT = 10; // do 3 ao  21 / do 156 ao 174
export const POSITION_LEFT = 48; // do 3 ao  21 / do 156 ao 174

export const FIM_DO_MAPA_X = 864; // horizontal / inicio 48
export const FIM_DO_MAPA_Y = 816; // vertical / inicio 48
//***********************************************************/

export enum EDirection {
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
  UP = "ArrowUp",
  DOWN = "ArrowDown",
}
