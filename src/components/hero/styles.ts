import styled from 'styled-components'
import { IHeroProps } from './Hero';

const HeroImage = styled.div<IHeroProps>`
  @keyframes hero-animation {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -192px;
    }
  }


  position: absolute;
  bottom: ${(props) => props.buttonUp}px;
  left: ${(props) => props.buttonLeft}px;
  width: ${48}px;
  height: 65px;
  background-image: url(/images/hero.png);
  background-repeat: no-repeat;
  background-position: 0 ${-35}px;
  animation: hero-animation 1s steps(4) infinite;
`

export { HeroImage }
