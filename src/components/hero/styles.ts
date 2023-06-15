import { HERO_BUTTON_LEFT, HERO_BUTTON_UP} from '@/settings/constants'
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
  bottom: ${27 * HERO_BUTTON_UP.x}px;
  left: ${50 * HERO_BUTTON_LEFT.y}px;
  width: ${48}px;
  height: 65px;
  background-image: url(/images/hero.png);
  background-repeat: no-repeat;
  background-position: 0 ${-35}px;
  animation: hero-animation 1s steps(4) infinite;
`

export { HeroImage }
