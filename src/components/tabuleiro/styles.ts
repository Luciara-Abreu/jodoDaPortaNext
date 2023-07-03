import { TILE_SIZE, GAME_SIZE } from "@/settings/constants";
import styled from "styled-components";

const TabuleiroContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 25%;
  top:0px;

  .image-tabuleiro {
    width: ${GAME_SIZE}px;
    height: ${GAME_SIZE}px;
  }

  @media (max-width: 767px) {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 95%;

    .image-tabuleiro {
      width: ${TILE_SIZE * 27}px;
      height: 1200px;
    }
  }
`;

export { TabuleiroContainer };
