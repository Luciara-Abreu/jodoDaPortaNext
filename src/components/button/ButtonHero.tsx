import { useState } from 'react';
import { ContainerButton } from "./styles";
import {FIM_DO_MAPA_Y, FIM_DO_MAPA_X, POSITION_TOP, POSITION_RIGHT, POSITION_BOTTON, POSITION_LEFT } from '@/settings/constants';
import Message from '../message/mensage';
import { ButtonHeroProps } from '@/interfaces/heroInterfaces';



const ButtonHero: React.FC<ButtonHeroProps> = ({ onPositionUpdate }) => {
  const [buttonLeft, setButtonLeft] = useState( POSITION_LEFT);
  const [buttonRight, setButtonRight] = useState( POSITION_RIGHT);

  let message = "";

  const changeLeft = () => {
    const newButtonLeft = buttonLeft;
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <= FIM_DO_MAPA_X) {
      setButtonLeft( buttonLeft + 47)
      console.log('Class Button buttonLeft ==> ', buttonLeft);
      onPositionUpdate( newButtonLeft, buttonRight);
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };

  const changeRight = () => {
    const newButtonLeft = buttonLeft;
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <= FIM_DO_MAPA_X) {
      setButtonLeft( buttonLeft - 47)
      console.log('Class Button buttonLeft ==> ', buttonLeft);
      onPositionUpdate( newButtonLeft, buttonRight);
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };

  return (
    <>
      <ContainerButton>    
      <button className="arrow-button arrow-up"></button>
        <button className="arrow-button arrow-right" onClick={changeRight}></button>
        <button className="arrow-button arrow-down"></button>
        <button className="arrow-button arrow-left" onClick={changeLeft}></button>
      </ContainerButton>
      {message && <Message message={message} />}
    </>
  );
};

export default ButtonHero;


/**
 * 
  const changeDown= () => {
    setButtonTop( buttonTop - 1)
  }

  const changeRight = () => {
    setButtonLeft( buttonLeft -1)
  }

      <button className="arrow-button arrow-up" onClick={changeUP}></button>
        <button className="arrow-button arrow-right" onClick={changeRight}></button>
        <button className="arrow-button arrow-down" onClick={changeBotton}></button>

    const [buttonTop, setButtonTop] = useState(POSITION_TOP);
  const [buttonRight, setButtonRight] = useState(POSITION_RIGHT);
  const [buttonBotton, setButtonBotton] = useState(POSITION_BOTTON);
  const [buttonLeft, setButtonLeft] = useState( POSITION_LEFT);


  const changeRight = () => {
    const newButtonRight = buttonRight;
    if (newButtonRight >= POSITION_LEFT && newButtonRight <= FIM_DO_MAPA_X) {
      setButtonRight( buttonRight - 47)
      console.log('Class Button buttonRight ==> ', buttonRight);
      onPositionUpdate( newButtonRight, buttonLeft);
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };
  };
 */

