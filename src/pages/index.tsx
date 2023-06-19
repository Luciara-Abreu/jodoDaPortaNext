import Footer from '@/components/footer/Footer'
import { Body, ContainerApp } from '@/styles/styles'
import Tabuleiro from '@/components/tabuleiro/Tabuleiro'
import ButtonHero from '@/components/button/ButtonHero'
import { useState } from 'react';
import { POSITION_LEFT, POSITION_RIGHT, POSITION_TOP, POSITION_UP } from '@/settings/constants';


export default function Home() {
  const [buttonLeft, setButtonLeft] = useState(POSITION_LEFT);
  const [buttonRight, setButtonRight] = useState(POSITION_RIGHT);
  const [buttonDown, setButtonDown] = useState(POSITION_TOP);
  const [buttonUp, setButtonUp] = useState(POSITION_UP);

  const handlePositionUpdate = ( newButtonLeft: number, newButtonRight: number, newButtonDown: number, newButtonUp: number) => {
    setButtonLeft(newButtonLeft)
    setButtonRight(newButtonRight)
    setButtonDown(newButtonDown)
    setButtonUp(newButtonUp)
    };

    console.log('pages == ', buttonLeft, buttonRight, buttonDown)
  return (
    <ContainerApp>
    <><h1>Bem vindo ao jogo.</h1></>
      <Body>
      <ButtonHero onPositionUpdate={handlePositionUpdate} />
      <Tabuleiro buttonLeft={buttonLeft} buttonRight={buttonRight} buttonDown={buttonDown} buttonUp={buttonUp}/>
      </Body>
      <Footer />
    </ContainerApp>
  )
}