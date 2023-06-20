import { GAME_SIZE, TILE_SIZE } from '@/settings/constants'
import styled from 'styled-components'

const TabuleiroContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10%;
  left: 25%;


  //width={GAME_SIZE}  height={575}
  .image-tabuleiro{
    width: ${TILE_SIZE * 30}px;
    height: 785px;
  }

@media (max-width: 767px) {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 60%;

  .image-tabuleiro{
    width: ${TILE_SIZE * 27}px;
    height: 1500px;
  }
}
`



export { TabuleiroContainer }
