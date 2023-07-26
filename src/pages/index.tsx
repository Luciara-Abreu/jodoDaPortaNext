import Footer from '@/components/footer/Footer'
import { Body, ContainerApp } from '@/styles/styles'
import Tabuleiro from '@/components/tabuleiro/Tabuleiro'

import ButtonHeroX from '@/components/button/buttonEixoX/ButtonEixoX'
import ButtonHeroY from '@/components/button/buttonEixoY/ButtonEixoY'
import useButtonPositions from '@/hook/useButtonPosition'
import useScreenSize from '@/hook/useScreenSize'

export default function Home() {
  const isSmallScreen = useScreenSize(975)

  const { buttonLeft, buttonRight, buttonDown, buttonUp, handlePositionUpdateX, handlePositionUpdateY } = useButtonPositions()

  return (
    <ContainerApp>
      <Body>
        {isSmallScreen ? (
          <>
            <div className="button-hero">
              <div>
                <ButtonHeroX onPositionUpdateX={handlePositionUpdateX} />
              </div>
              <div>
                <ButtonHeroY onPositionUpdateY={handlePositionUpdateY} />
              </div>
            </div>
            <Tabuleiro buttonLeft={buttonLeft} buttonRight={buttonRight} buttonDown={buttonDown} buttonUp={buttonUp} />
          </>
        ) : (
          <>
            <Tabuleiro buttonLeft={0} buttonRight={0} buttonDown={0} buttonUp={0} />
          </>
        )}
      </Body>
      <Footer />
    </ContainerApp>
  )
}
