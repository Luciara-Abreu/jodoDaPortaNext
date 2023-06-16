import { useState } from 'react';
import { ContainerButton } from "./styles";
import { BUTTON_UP, BUTTON_LEFT, FIM_DO_MAPA_Y, FIM_DO_MAPA_X } from '@/settings/constants';
import Message from '../message/mensage';

interface ButtonHeroProps {
  onPositionUpdate: (buttonUp: number, buttonLeft: number) => void;
}

const ButtonHero: React.FC<ButtonHeroProps> = ({ onPositionUpdate }) => {
  const [buttonUp, setButtonUp] = useState(BUTTON_UP);
  const [buttonLeft, setButtonLeft] = useState(BUTTON_LEFT);
  let message = "";

  const changeUP = () => {
    const newButtonUp = buttonUp + 1;
    if (newButtonUp >= BUTTON_UP && newButtonUp <= FIM_DO_MAPA_Y) {
      setButtonUp((prevButtonUp) => prevButtonUp + 1);
      console.log('Class Button ButtonUp ==> ', newButtonUp);
      onPositionUpdate(newButtonUp, buttonLeft);
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };

  const changeLeft = () => {
    const newButtonLeft = buttonLeft + 1;
    if (newButtonLeft >= BUTTON_LEFT && newButtonLeft <= FIM_DO_MAPA_X) {
      setButtonLeft((prevButtonLeft) => prevButtonLeft + 1);
      console.log('Class Button ButtonLeft ==> ', newButtonLeft);
      onPositionUpdate(buttonUp, newButtonLeft);
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };

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
  );
};

export default ButtonHero;


/**
 * 
  const changeDown= () => {
    setButtonUp( buttonUp - 1)
  }

  const changeRight = () => {
    setButtonLeft( buttonLeft -1)
  }
 */

