import { TILE_SIZE } from "@/settings/constants";
import styled from "styled-components";

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
  width: ${TILE_SIZE}px;
  height: 65px;
  background-image: url(/images/hero.png);
  background-repeat: no-repeat;
  background-position: 0 ${TILE_SIZE - 78}px;
  animation: hero-animation 1s steps(4) infinite;
  z-index: 1; // profundidade 1 ou seja ele está com prioridade entre outros elementos

  @media (max-width: 767px) {
    position: absolute;
    width: ${48}px;
    height: 65px;
    background-image: url(/images/hero.png);
    background-repeat: no-repeat;
    background-position: 0 ${-30}px;
    animation: hero-animation 1s steps(4) infinite;
  }
`;

export { HeroImage };
