import Footer from "@/components/footer/Footer";
import { Body, ContainerApp } from "@/styles/styles";
import Tabuleiro from "@/components/tabuleiro/Tabuleiro";

import ButtonHeroX from "@/components/button/buttonEixoX/ButtonEixoX";
import ButtonHeroY from "@/components/button/buttonEixoY/ButtonEixoY";
import useButtonPositions from "@/hook/useButtonPosition";

export default function Home() {
  const {
    buttonLeft,
    buttonRight,
    buttonDown,
    buttonUp,
    handlePositionUpdateX,
    handlePositionUpdateY,
  } = useButtonPositions();

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
