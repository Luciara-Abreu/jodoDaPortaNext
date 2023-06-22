import { useEffect, useState } from 'react';
import { ContainerButton } from "./styles";
import { POSITION_UP, POSITION_TOP} from '@/settings/constants';
import Message from '../../message/mensage';
import { ButtonHeroYProps } from '@/interfaces/heroInterfaces';
import { useWindowHeight } from '@react-hook/window-size';

  const ButtonHeroY: React.FC<ButtonHeroYProps> = ({ onPositionUpdateY }) => {
  const [buttonUp, setButtonUp] = useState(POSITION_UP);
  const [buttonTop, setButtonTop] = useState(POSITION_TOP); 
  const [stepDownUp, setStepDownUp] = useState(27);
  const [updateMapaY, setUpdateMataY] = useState(442);


  let message = "";

  const windowHeight = useWindowHeight(); 
  const setNewStepDownUp = windowHeight <= 765 ?  27: 55;
  const endOfTheMapaY = windowHeight <= 765 ? 445 : 1055;

  
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


  const changeDown = () => {
    const newButtonTop = buttonTop + setNewStepDownUp;    
    if (newButtonTop >= POSITION_TOP && newButtonTop <= endOfTheMapaY) {
      setButtonTop(newButtonTop);
      onPositionUpdateY( newButtonTop, buttonUp);
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };

  const changeUp = () => {
    const newButtonTop = buttonTop - setNewStepDownUp;
    if (newButtonTop >= POSITION_UP && newButtonTop <= endOfTheMapaY) {
      setButtonTop(newButtonTop);
      onPositionUpdateY( newButtonTop, buttonUp);
    } else {
      message = "Opz! Fim do mapa. Escolha outro caminho.";
    }
  };


  return (
    <>
        <ContainerButton  className="glow-on-hover">    
        <button className="arrow-button arrow-up" onClick={changeUp}></button>
        <button className="arrow-button arrow-down" onClick={changeDown}></button>
      </ContainerButton>
      {message && <Message message={message} />}
    </>
  );
};

export default ButtonHeroY;

/**
 *       
 */