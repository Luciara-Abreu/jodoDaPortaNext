import Footer from '@/components/footer/Footer'
import { Body, ContainerApp } from '@/styles/styles'
import Tabuleiro from '@/components/tabuleiro/Tabuleiro'


export default function Home() {
  return (
    <ContainerApp>
    <><h1>Bem vindo ao jogo.</h1></>
      <Body>
        <Tabuleiro />
      </Body>
      <Footer />
    </ContainerApp>
  )
}