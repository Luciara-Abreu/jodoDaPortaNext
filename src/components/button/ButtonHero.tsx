import { useState } from 'react'
import { ContainerButton } from "./styles"
import { BUTTON_UP, BUTTON_LEFT, FIM_DO_MAPA_Y, FIM_DO_MAPA_X } from '@/settings/constants'
import Message from '../message/mensage'

  let BUTTON_UP_UPDATE = BUTTON_UP;
  let BUTTON_LEFT_UPDATE = BUTTON_LEFT;

const ButtonHero: React.FC = () => {
  const [buttonUp, setButtonUp] = useState(BUTTON_UP)
  const [buttonLeft, setButtonLeft] = useState(BUTTON_LEFT)
  let message = "";

  
  const changeUP = () => {
    setButtonUp(buttonUp + 1)
    if (buttonUp >= BUTTON_UP && buttonUp <= FIM_DO_MAPA_Y) {
      BUTTON_UP_UPDATE = buttonUp
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho."
    }
  }

  const changeLeft = () => {
    setButtonLeft(buttonLeft + 1)
    if (buttonLeft >= BUTTON_LEFT && buttonLeft <= FIM_DO_MAPA_X) {
      BUTTON_LEFT_UPDATE = buttonLeft
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho."
    }    
  }


  console.log('Class Button ButtonUp ==> ',BUTTON_UP_UPDATE)  
  console.log('Class Button ButtonLeft ==> ', BUTTON_LEFT_UPDATE)


  return (
    <>
      <ContainerButton>
        <button className="arrow-button arrow-up" onClick={changeUP}></button>
        <button className="arrow-button arrow-left" onClick={changeLeft}></button>
        <button className="arrow-button arrow-right"></button>
        <button className="arrow-button arrow-down"></button>
      </ContainerButton>
      {message && <Message message={message} />}
    </>
  )
}
export default ButtonHero //
export { BUTTON_UP_UPDATE as ButtonUp, BUTTON_LEFT_UPDATE as ButtonLeft};


/**
 * 
  const changeDown= () => {
    setButtonUp( buttonUp - 1)
  }

  const changeRight = () => {
    setButtonLeft( buttonLeft -1)
  }
 */

