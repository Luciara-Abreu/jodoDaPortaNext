import { useEffect, useState } from "react";
import { ContainerButton } from "./styles";
import { POSITION_UP, POSITION_TOP } from "@/settings/constants";
import Message from "../../message/mensage";
import useWindowDimensions from "@/hook/useWindowsDimension";
import { ButtonHeroYProps } from "@/interfaces";

const ButtonHeroY: React.FC<ButtonHeroYProps> = ({ onPositionUpdateY }) => {
  const [buttonUp, setButtonUp] = useState(POSITION_UP);
  const [buttonTop, setButtonTop] = useState(10);
  const [stepDownUp, setStepDownUp] = useState(27);
  const [updateMapaY, setUpdateMapaY] = useState(442);
  const [endOfTheMapaY, setEndOfTheMapaY] = useState(1055);

  let message = "";

  const { height: windowHeight } = useWindowDimensions();

  useEffect(() => {
    const updateStepDownUp = () => {
      const newStepDownUp = windowHeight <= 657 ? 27 : 62;
      setStepDownUp(newStepDownUp);

      const newUpdateMapaY = windowHeight <= 657 ? 445 : 1070;
      setUpdateMapaY(newUpdateMapaY);
      setEndOfTheMapaY(newUpdateMapaY); // Atualiza o valor de endOfTheMapaY

      // Verificar se o botão está dentro dos limites após a alteração do tamanho da janela
      if (buttonTop > newUpdateMapaY) {
        setButtonTop(newUpdateMapaY);
        onPositionUpdateY(newUpdateMapaY, buttonUp);
      }
    };

    updateStepDownUp();
    window.addEventListener("resize", updateStepDownUp);
    return () => {
      window.removeEventListener("resize", updateStepDownUp);
    };
  }, [windowHeight]);

  const changeDown = () => {
    const newButtonTop = buttonTop + stepDownUp;
    const upperLimit = POSITION_TOP;
    const lowerLimit = endOfTheMapaY;

    if (newButtonTop >= upperLimit && newButtonTop <= lowerLimit) {
      setButtonTop(newButtonTop);
      onPositionUpdateY(newButtonTop, buttonUp);
    } else {
      message = "Oops! Fim do mapa. Escolha outro caminho.";
    }
  };

  const changeUp = () => {
    const newButtonTop = buttonTop - stepDownUp;
    const upperLimit = POSITION_TOP;
    const lowerLimit = endOfTheMapaY;

    if (newButtonTop >= upperLimit && newButtonTop <= lowerLimit) {
      setButtonTop(newButtonTop);
      onPositionUpdateY(newButtonTop, buttonUp);
    } else {
      message = "Oops! Fim do mapa. Escolha outro caminho.";
    }
  };

  return (
    <>
      <ContainerButton className="glow-on-hover">
        <button className="arrow-button arrow-up" onClick={changeUp}></button>
        <button
          className="arrow-button arrow-down"
          onClick={changeDown}
        ></button>
      </ContainerButton>
      {message && <Message message={message} />}
    </>
  );
};

export default ButtonHeroY;
