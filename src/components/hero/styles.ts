import { TILE_SIZE } from '@/settings/constants'
import styled from 'styled-components'

const HeroImage = styled.div`
  @keyframes hero-animation {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -192px;
    }
  }

  position: absolute;
  bottom: ${28 * 1}px;
  left: ${49 * 0}px;
  width: ${48}px;
  height: 100px;
  background-image: url(/images/hero.png);
  background-repeat: no-repeat;
  animation: hero-animation 1s steps(4) infinite;
`

export { HeroImage }
