import Footer from '@/components/footer/Footer'
import { Body, ContainerApp } from '@/styles/styles'
import Tabuleiro from '@/components/tabuleiro/Tabuleiro'

import ButtonHeroX from '@/components/button/buttonEixoX/ButtonEixoX'
import ButtonHeroY from '@/components/button/buttonEixoY/ButtonEixoY'
import useButtonPositions from '@/hook/useButtonPosition'
import useScreenSize from '@/hook/useScreenSize'
import useWindowDimensions from '@/hook/useWindowsDimension'

export default function Home() {
  const isSmallScreen = useScreenSize()
  const sizeScreen = useWindowDimensions()

  const { buttonLeft, buttonRight, buttonDown, buttonUp, handlePositionUpdateX, handlePositionUpdateY } = useButtonPositions()

  // eslint-disable-next-line no-console
  console.log('isSmallScreen? width, height', isSmallScreen, sizeScreen.width, sizeScreen.height)

  const size = {
    width: `${sizeScreen.width}px`,
    height: `${sizeScreen.height}px`,
  }

  return (
    <>
      {isSmallScreen ? (
        <ContainerApp style={size}>
          <Body>
            <Tabuleiro buttonLeft={buttonLeft} buttonRight={buttonRight} buttonDown={buttonDown} buttonUp={buttonUp} />
            <div className="button-hero">
              <div>
                <ButtonHeroX onPositionUpdateX={handlePositionUpdateX} />
              </div>
              <div>
                <ButtonHeroY onPositionUpdateY={handlePositionUpdateY} />
              </div>
            </div>
          </Body>
          <Footer />
        </ContainerApp>
      ) : (
        <ContainerApp>
          <Body>
            <Tabuleiro buttonLeft={0} buttonRight={0} buttonDown={0} buttonUp={0} />
          </Body>
          <Footer />
        </ContainerApp>
      )}
    </>
  )
}

/**
export default function Home() {
  const isSmallScreen = useScreenSize()
  const { width, height } = useWindowDimensions()

  const { buttonLeft, buttonRight, buttonDown, buttonUp, handlePositionUpdateX, handlePositionUpdateY } = useButtonPositions()

  return (
    <ContainerApp width={width} height={height}>
      <Body  width={width} height={height}>
        {isSmallScreen ? (
          <>
            <Tabuleiro buttonLeft={buttonLeft} buttonRight={buttonRight} buttonDown={buttonDown} buttonUp={buttonUp} />
            <div className="button-hero">
              <div>
                <ButtonHeroX onPositionUpdateX={handlePositionUpdateX} />
              </div>
              <div>
                <ButtonHeroY onPositionUpdateY={handlePositionUpdateY} />
              </div>
            </div>
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
 */
