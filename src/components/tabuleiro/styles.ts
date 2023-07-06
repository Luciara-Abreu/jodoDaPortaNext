import { GAME_SIZE } from "@/settings/constants";
import styled from "styled-components";

const TabuleiroContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;

  .image-tabuleiro {
    width: ${GAME_SIZE}px;
    height: ${GAME_SIZE}px;
  }

  @media (max-width: 767px) {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 20%;

    .image-tabuleiro {
    width: ${GAME_SIZE}px;
    height: ${GAME_SIZE}px;
  }
  }
`;

export { TabuleiroContainer };
