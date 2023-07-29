import { useState } from 'react'
import { ContainerButton } from './styles'
import { POSITION_UP, POSITION_TOP, FIM_DO_MAPA_Y, stepUpDow } from '@/settings/constants'
import Message from '../../message/mensage'
import useWindowDimensions from '@/hook/useWindowsDimension'
import { ButtonHeroYProps } from '@/interfaces'

const ButtonHeroY: React.FC<ButtonHeroYProps> = ({ onPositionUpdateY }) => {
  const [buttonUp, setButtonUp] = useState(POSITION_UP)
  const [buttonTop, setButtonTop] = useState(POSITION_TOP)


  let message = ''

  const { height: windowHeight } = useWindowDimensions()

  const changeDown = () => {
    const newButtonTop = buttonTop + stepUpDow
    if (newButtonTop >= POSITION_TOP && newButtonTop <= FIM_DO_MAPA_Y) {
      setButtonTop(newButtonTop)
      onPositionUpdateY(newButtonTop, buttonUp)
    } else {
      message = 'Opz! Fim do mapa. Escolha outro caminho.'
    }
  }

  const changeUp = () => {
    const newButtonTop = buttonTop - stepUpDow
    if (newButtonTop >= POSITION_TOP && newButtonTop <= FIM_DO_MAPA_Y) {
      setButtonTop(newButtonTop)
      onPositionUpdateY(newButtonTop, buttonUp)
    } else {
      message = 'Opz! Fim do mapa. Escolha outro caminho.'
    }
  }

  return (
    <>
      <ContainerButton className="glow-on-hover">
        <button className="arrow-button up" onClick={changeUp}>
        <div className ='arr-div'></div>
        </button>
        <button className="arrow-button down" onClick={changeDown}>
        <div className ='arr-div'></div>
        </button>
      </ContainerButton>
      {message && <Message message={message} />}
    </>
  )
}

export default ButtonHeroY
