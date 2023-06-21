import { useEffect, useState } from 'react';
import { ContainerButton } from "./styles";
import {POSITION_RIGHT, POSITION_UP, POSITION_LEFT, POSITION_TOP} from '@/settings/constants';
import Message from '../message/mensage';
import { ButtonHeroProps } from '@/interfaces/heroInterfaces';
import { useWindowHeight, useWindowWidth } from '@react-hook/window-size';


  const ButtonHero: React.FC<ButtonHeroProps> = ({ onPositionUpdate }) => {
  const [buttonLeft, setButtonLeft] = useState(POSITION_LEFT);
  const [buttonRight, setButtonRight] = useState<number>(POSITION_RIGHT);
  const [buttonUp, setButtonUp] = useState(POSITION_UP);
  const [buttonTop, setButtonTop] = useState(POSITION_TOP); 
  const [stepLeftRight, setStepLeftRight] = useState(48);
  const [stepDownUp, setStepDownUp] = useState(27);
  const [updateMapaX, setUpdateMataX] = useState(922);
  const [updateMapaY, setUpdateMataY] = useState(442);

  let message = "";
  console.log(updateMapaY)

  const windowWidth = useWindowWidth();
  const updateScreenWalkingLeftRight = windowWidth <= 765 ? 65 : 48;
  const endOfTheMapaX = windowWidth <= 765 ? 1245 : 922; 
  const setNewStepDownUp = window.innerWidth <= 765 ? 55 : 27;
  
  const windowHeight = useWindowHeight(); 
  const updateScreenWalkingDownUp = windowWidth <= 765 ? 55 : 27; 
  const endOfTheMapaY = windowHeight <= 765 ? 1055 : 442;

  
  useEffect(() => {
    const updateStepLeftRight = () => {
      const newStepLeftRight = updateScreenWalkingLeftRight;
      setStepLeftRight(newStepLeftRight);

      const newSetMapaX = endOfTheMapaX;
      setUpdateMataX(newSetMapaX);
    };
    updateStepLeftRight();
    window.addEventListener('resize', updateStepLeftRight);
    return () => {
      window.removeEventListener('resize', updateStepLeftRight);
    };
  }, []);


  useEffect(() => {
    const updateStepDownUp = () => {
      const newStepDownUp = setNewStepDownUp;
      setStepDownUp(newStepDownUp);

      const newSetMapaY = endOfTheMapaY;
      setUpdateMataY(newSetMapaY);
    
    };
    updateStepDownUp();
    window.addEventListener('resize', updateStepDownUp);
    return () => {
      window.removeEventListener('resize', updateStepDownUp);
    };
  }, []);


  //---

  const changeLeft = () => {
    const newButtonLeft = buttonLeft + updateScreenWalkingLeftRight;
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <= endOfTheMapaX) {
      setButtonLeft( newButtonLeft)
      onPositionUpdate( newButtonLeft, buttonRight, buttonTop, buttonUp);
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };

  const changeRight = () => {
    const newButtonLeft = buttonLeft - updateScreenWalkingLeftRight;
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <=  endOfTheMapaX) {
      setButtonLeft( newButtonLeft)
      onPositionUpdate( newButtonLeft, buttonRight, buttonTop, buttonUp);
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };

  const changeDown = () => {
    const newButtonTop = buttonTop + updateScreenWalkingDownUp;    
    if (newButtonTop >= POSITION_TOP && newButtonTop <= endOfTheMapaY) {
      setButtonTop(newButtonTop);
      onPositionUpdate(buttonLeft, buttonRight, newButtonTop, buttonUp)
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };

  const changeUp = () => {
    const newButtonTop = buttonTop - updateScreenWalkingDownUp;
    if (newButtonTop >= POSITION_UP && newButtonTop <= endOfTheMapaY) {
      setButtonTop(newButtonTop);
      onPositionUpdate(buttonLeft, buttonRight, newButtonTop, buttonUp)
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

