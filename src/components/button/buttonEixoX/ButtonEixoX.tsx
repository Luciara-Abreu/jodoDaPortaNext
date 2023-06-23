import { useEffect, useState } from 'react';
import { ContainerButton } from "./styles";
import {POSITION_RIGHT, POSITION_LEFT} from '@/settings/constants';
import Message from '../../message/mensage';
import { ButtonHeroXProps } from '@/interfaces/heroInterfaces';
import { useWindowWidth } from '@react-hook/window-size';


  const ButtonHeroX: React.FC<ButtonHeroXProps> = ({ onPositionUpdateX }) => {
  const [buttonLeft, setButtonLeft] = useState(POSITION_LEFT);
  const [buttonRight, setButtonRight] = useState<number>(POSITION_RIGHT);
  const [stepLeftRight, setStepLeftRight] = useState(48);
  const [updateMapaX, setUpdateMataX] = useState(922);


  let message = "";

  const windowWidth = useWindowWidth();
  const setNewStepLeftRight = windowWidth <= 765 ? 65 : 48;
  const endOfTheMapaX = windowWidth <= 765 ? 1230 : 922; 

  
  
  useEffect(() => {
    const updateStepLeftRight = () => {
      const newStepLeftRight = setNewStepLeftRight;
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


  const changeLeft = () => {
    const newButtonLeft = buttonLeft + setNewStepLeftRight;
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <= endOfTheMapaX) {
      setButtonLeft( newButtonLeft)
      onPositionUpdateX( newButtonLeft, buttonRight);
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };

  const changeRight = () => {
    const newButtonLeft = buttonLeft - setNewStepLeftRight;
    if (newButtonLeft >= POSITION_LEFT && newButtonLeft <=  endOfTheMapaX) {
      setButtonLeft( newButtonLeft)
      onPositionUpdateX( newButtonLeft, buttonRight );
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };


  return (
    <>
      <ContainerButton>    
        <button className="arrow-button arrow-right" onClick={changeRight}></button>
        <button className="arrow-button arrow-left" onClick={changeLeft}></button>
      </ContainerButton>
      {message && <Message message={message} />}
    </>
  );
};

export default ButtonHeroX;

