import Footer from '@/components/footer/Footer'
import { Body, ContainerApp } from '@/styles/styles'
import Tabuleiro from '@/components/tabuleiro/Tabuleiro'
import ButtonHero from '@/components/button/ButtonHero'
import { useState } from 'react';


export default function Home() {
  const [buttonUp, setButtonUp] = useState(0);
  const [buttonLeft, setButtonLeft] = useState(0);

  const handlePositionUpdate = (newButtonUp: number, newButtonLeft: number) => {
    setButtonUp(newButtonUp);
    setButtonLeft(newButtonLeft);
    
    console.log('Class Pages newButtonUp ==> ', newButtonUp);
    console.log('Class Pages ButtonLeft ==> ', newButtonLeft);
  };

  return (
    <ContainerApp>
    <><h1>Bem vindo ao jogo.</h1></>
      <Body>
      <ButtonHero onPositionUpdate={handlePositionUpdate} />
      <Tabuleiro buttonUp={buttonUp} buttonLeft={buttonLeft} />
      </Body>
      <Footer />
    </ContainerApp>
  )
}