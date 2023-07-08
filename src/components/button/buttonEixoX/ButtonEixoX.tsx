import { useEffect, useState } from 'react'
import { ContainerButton } from './styles'
import { POSITION_RIGHT, POSITION_LEFT } from '@/settings/constants'
import Message from '../../message/mensage'
import { useWindowWidth } from '@react-hook/window-size'


const ButtonHeroX = () => {
  const [buttonLeft, setButtonLeft] = useState(POSITION_LEFT)
  const [buttonRight, setButtonRight] = useState<number>(POSITION_RIGHT)
  const [updateMapaX, setUpdateMataX] = useState(922)

  let message = ''

  console.log('Component Button ==> ', buttonLeft)

  const windowWidth = useWindowWidth()
  const setNewStepLeftRight = 48
  const endOfTheMapaX = windowWidth <= 765 ? 1245 : 922

  useEffect(() => {
    const updateStepLeftRight = () => {
      const newSetMapaX = endOfTheMapaX
      setUpdateMataX(newSetMapaX)
    }
    updateStepLeftRight()
    window.addEventListener('resize', updateStepLeftRight)
    return () => {
      window.removeEventListener('resize', updateStepLeftRight)
    }
  }, [])

  const changeLeft = () => {
    const newButtonLeft = buttonLeft + setNewStepLeftRight
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <= endOfTheMapaX) {
      setButtonLeft(newButtonLeft)
       updatePositionX(newButtonLeft) 
    } else {
      message = 'Opz! Fim do mapa. Escolha outro caminho.'
    }
  }

  const changeRight = () => {
    const newButtonLeft = buttonLeft - setNewStepLeftRight
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <= endOfTheMapaX) {
      setButtonLeft(newButtonLeft)
      updateHeroPositionX(-newButtonRight);
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


