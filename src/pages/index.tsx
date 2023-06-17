import Footer from '@/components/footer/Footer'
import { Body, ContainerApp } from '@/styles/styles'
import Tabuleiro from '@/components/tabuleiro/Tabuleiro'
import ButtonHero from '@/components/button/ButtonHero'
import { SetStateAction, useState } from 'react';
import { POSITION_LEFT, POSITION_RIGHT, POSITION_TOP } from '@/settings/constants';


export default function Home() {
  const [buttonLeft, setButtonLeft] = useState(POSITION_LEFT);
  const [buttonRight, setButtonRight] = useState(POSITION_RIGHT);
  const [buttonTop, setButtonTop] = useState(POSITION_TOP);

  const handlePositionUpdate = ( newButtonLeft: number, newButtonRight: number, newButtonTop: number) => {
    setButtonLeft(newButtonLeft)
    setButtonRight(newButtonRight)
    setButtonTop(newButtonTop)
    };

  return (
    <ContainerApp>
    <><h1>Bem vindo ao jogo.</h1></>
      <Body>
      <ButtonHero onPositionUpdate={handlePositionUpdate} />
      <Tabuleiro buttonLeft={buttonLeft} buttonRight={buttonRight} buttonTop={buttonTop}/>
      </Body>
      <Footer />
    </ContainerApp>
  )
}