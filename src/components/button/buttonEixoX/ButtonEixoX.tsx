import { useState } from 'react'
import { ContainerButton } from './styles'
import { POSITION_RIGHT, POSITION_LEFT, FIM_DO_MAPA_X } from '@/settings/constants'
import Message from '../../message/mensage'
import { ButtonHeroXProps } from '@/interfaces'
import { useWindowWidth } from '@react-hook/window-size'

const ButtonHeroX: React.FC<ButtonHeroXProps> = ({ updatePositionX }) => {
  const [buttonLeft, setButtonLeft] = useState(POSITION_LEFT)
  const [buttonRight, setButtonRight] = useState<number>(POSITION_RIGHT)
  const [updateMapaX, setUpdateMataX] = useState(922)

  let message = ''

  const windowWidth = useWindowWidth()
  const setNewStepLeftRight = 48
  const endOfTheMapaX = windowWidth <= 765 ? 1300 : 864

  const changeLeft = () => {
    const newButtonLeft = buttonLeft + 48
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <= FIM_DO_MAPA_X) {
      console.log('Component Button Left ==> ', newButtonLeft)
      setButtonLeft(newButtonLeft)
      updatePositionX(newButtonLeft, buttonRight)
    } else {
      message = 'Opz! Fim do mapa. Escolha outro caminho.'
    }
  }

  const changeRight = () => {
    const newButtonLeft = buttonLeft - 48
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <= FIM_DO_MAPA_X) {
      console.log('Component Button Left ==> ', newButtonLeft)
      setButtonLeft(newButtonLeft)
      updatePositionX(newButtonLeft, buttonRight)
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




/*const changeLeft = () => {
    const newButtonLeft = buttonLeft + setNewStepLeftRight
    const upperLimit = POSITION_LEFT
    const lowerLimit = endOfTheMapaX

    if (newButtonLeft >= upperLimit && newButtonLeft <= lowerLimit) {
      setButtonLeft(newButtonLeft)
      updatePositionX(newButtonLeft, buttonRight)
      console.log('Component Button left ==> ', buttonLeft)
    } else {
      message = 'Oops! Fim do mapa. Escolha outro caminho.'
    }
  }

  const changeRight = () => {
    const newButtonRight = buttonLeft - setNewStepLeftRight
    const upperLimit = POSITION_RIGHT
    const lowerLimit = endOfTheMapaX

    if (newButtonRight >= upperLimit && newButtonRight <= lowerLimit) {
      setButtonRight(newButtonRight)
      updatePositionX(newButtonRight, buttonLeft)
      console.log('Component Button Right ==> ', buttonRight)
    } else {
      message = 'Oops! Fim do mapa. Escolha outro caminho.'
    }
  }
  */