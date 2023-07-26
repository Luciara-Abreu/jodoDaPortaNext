import { useEffect, useState } from 'react'
import { ContainerButton } from './styles'
import { POSITION_RIGHT, POSITION_LEFT } from '@/settings/constants'
import Message from '../../message/mensage'
import { ButtonHeroXProps } from '@/interfaces'

const ButtonHeroX: React.FC<ButtonHeroXProps> = ({ onPositionUpdateX }) => {
  const [buttonLeft, setButtonLeft] = useState(POSITION_LEFT)
  const [buttonRight, setButtonRight] = useState<number>(POSITION_RIGHT)

  let message = ''

  const stepLeftRight = 48
  const FIM_DO_MAPA_X = 864 // horizontal / inicio 48

  const changeLeft = () => {
    const newButtonLeft = buttonLeft + stepLeftRight
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <= FIM_DO_MAPA_X) {
      setButtonLeft(newButtonLeft)
      onPositionUpdateX(newButtonLeft, buttonRight)
    } else {
      message = 'Opz! Fim do mapa. Escolha outro caminho.'
    }
  }

  const changeRight = () => {
    const newButtonLeft = buttonLeft - stepLeftRight
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <= FIM_DO_MAPA_X) {
      setButtonLeft(newButtonLeft)
      onPositionUpdateX(newButtonLeft, buttonRight)
    } else {
      message = 'Opz! Fim do mapa. Escolha outro caminho.'
    }
  }

  return (
    <>
      <ContainerButton>
        <button className="arrow-button arrow-right" onClick={changeRight}></button>
        <button className="arrow-button arrow-left" onClick={changeLeft}></button>
      </ContainerButton>
      {message && <Message message={message} />}
    </>
  )
}

export default ButtonHeroX
