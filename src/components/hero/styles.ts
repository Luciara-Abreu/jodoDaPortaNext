//import { BUTTON_LEFT, BUTTON_UP } from '@/settings/constants'
import styled from 'styled-components'
import { BUTTON_UP_UPDATE, BUTTON_LEFT_UPDATE} from '../button/button'


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
  bottom: ${BUTTON_UP_UPDATE}px;
  left: ${BUTTON_LEFT_UPDATE}px;
  width: ${48}px;
  height: 65px;
  background-image: url(/images/hero.png);
  background-repeat: no-repeat;
  background-position: 0 ${-35}px;
  animation: hero-animation 1s steps(4) infinite;
`

export { HeroImage }
