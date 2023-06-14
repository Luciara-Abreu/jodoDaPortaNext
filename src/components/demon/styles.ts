import { TILE_SIZE } from '@/settings/constants'
import styled from 'styled-components'

const DemonImage = styled.div`
  @keyframes demon-animation {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -384px;
    }
  }

  position: absolute;
  bottom: ${28 * 10}px;
  left: ${49 * 10}px;
  width: ${48 * 2}px;
  height: ${48 * 2}px;
  background-image: url(/images/demon.png);
  background-repeat: no-repeat;
  animation: demon-animation 1s steps(4) infinite;
`

export { DemonImage }
