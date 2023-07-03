import Footer from "@/components/footer/Footer";
import { Body, ContainerApp } from "@/styles/styles";
import Tabuleiro from "@/components/tabuleiro/Tabuleiro";

import { useState } from "react";
import {
  POSITION_LEFT,
  POSITION_RIGHT,
  POSITION_TOP,
  POSITION_UP,
} from "@/settings/constants";
import ButtonHeroX from "@/components/button/buttonEixoX/ButtonEixoX";
import ButtonHeroY from "@/components/button/buttonEixoY/ButtonEixoY";
import Debugger from "@/Debugger";

export default function Home() {
  const [buttonLeft, setButtonLeft] = useState(POSITION_LEFT);
  const [buttonRight, setButtonRight] = useState(POSITION_RIGHT);
  const [buttonDown, setButtonDown] = useState(POSITION_TOP);
  const [buttonUp, setButtonUp] = useState(POSITION_UP);

  const handlePositionUpdateX = (
    newButtonLeft: number,
    newButtonRight: number
  ) => {
    setButtonLeft(newButtonLeft);
    setButtonRight(newButtonRight);
  };

  const handlePositionUpdateY = (
    newButtonDown: number,
    newButtonUp: number
  ) => {
    setButtonDown(newButtonDown);
    setButtonUp(newButtonUp);
  };

  return (
    <ContainerApp>
      <Body>
        <div className="button-hero">
          <div>
            <ButtonHeroX onPositionUpdateX={handlePositionUpdateX} />
          </div>
          <div>
            <ButtonHeroY onPositionUpdateY={handlePositionUpdateY} />
          </div>
        </div>
        <Tabuleiro
          buttonLeft={buttonLeft}
          buttonRight={buttonRight}
          buttonDown={buttonDown}
          buttonUp={buttonUp}
        />
      </Body>
      <Footer />
    </ContainerApp>
  );
}

/**
 *       <>
        <h1>Bem vindo ao jogo.</h1>
      </>
 */