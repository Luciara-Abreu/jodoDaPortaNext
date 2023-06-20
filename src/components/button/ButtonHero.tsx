import { useState } from 'react';
import { ContainerButton } from "./styles";
import {FIM_DO_MAPA_Y, FIM_DO_MAPA_X, POSITION_TOP, POSITION_RIGHT, POSITION_UP, POSITION_LEFT } from '@/settings/constants';
import Message from '../message/mensage';
import { ButtonHeroProps } from '@/interfaces/heroInterfaces';



const ButtonHero: React.FC<ButtonHeroProps> = ({ onPositionUpdate }) => {
  const [buttonLeft, setButtonLeft] = useState( POSITION_LEFT);
  const [buttonRight, setButtonRight] = useState( POSITION_RIGHT);
  const [buttonDown, setButtonDown] = useState( POSITION_TOP);
  const [buttonUp, setButtonUp] = useState(POSITION_UP);

  let message = "";

  const changeLeft = () => {
    const newButtonLeft = buttonLeft + 47;
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <= FIM_DO_MAPA_X) {
      setButtonLeft( newButtonLeft)
      onPositionUpdate( newButtonLeft, buttonRight, buttonDown, buttonUp);
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };


  const changeRight = () => {
    const newButtonLeft = buttonLeft - 47;
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <= FIM_DO_MAPA_X) {
      setButtonLeft( newButtonLeft)
      onPositionUpdate( newButtonLeft, buttonRight, buttonDown, buttonUp);
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };

  const changeDown = () => {
    const newButtonDown = buttonDown + 35;
    if (newButtonDown >= POSITION_TOP && newButtonDown <= FIM_DO_MAPA_Y) {
      setButtonDown(newButtonDown);
      onPositionUpdate(buttonLeft, buttonRight, newButtonDown, buttonUp)
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };

  const changeUp = () => {
    const newButtonDown = buttonDown - 35;
    if (newButtonDown >= POSITION_TOP && newButtonDown <= FIM_DO_MAPA_Y) {
      setButtonDown(newButtonDown);
      onPositionUpdate(buttonLeft, buttonRight, newButtonDown, buttonUp)
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };

  return (
    <>
      <ContainerButton>    
        <button className="arrow-button arrow-right" onClick={changeRight}></button>
        <button className="arrow-button arrow-up" onClick={changeUp}></button>
        <button className="arrow-button arrow-down" onClick={changeDown}></button>
        <button className="arrow-button arrow-left" onClick={changeLeft}></button>
      </ContainerButton>
      {message && <Message message={message} />}
    </>
  );
};

export default ButtonHero;

