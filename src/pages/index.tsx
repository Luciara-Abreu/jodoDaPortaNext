import Footer from '@/components/footer/Footer'
import { Body, ContainerApp } from '@/styles/styles'
import Tabuleiro from '@/components/tabuleiro/Tabuleiro'
import ButtonHero from '@/components/button/button'


export default function Home() {
  return (
    <ContainerApp>
    <><h1>Bem vindo ao jogo.</h1></>
      <Body>
      <ButtonHero />
      <Tabuleiro />
      </Body>
      <Footer />
    </ContainerApp>
  )
}