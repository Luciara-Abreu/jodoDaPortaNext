import { useState, useEffect } from "react";
import useWindowDimensions from "../useWindowsDimension";

function EndOfMapaState() {
  const { width, height } = useWindowDimensions();
  const [endOfMapaX, setEndOfMapaX] = useState(880);
  const [endOfMapaY, setEndOfMapaY] = useState(475);

  useEffect(() => {
    const updateEndOfMapa = () => {
      if (endOfMapaX >= 10 && endOfMapaX <= width) {
        setEndOfMapaX(endOfMapaX);
      }

      if (endOfMapaY >= 10 && endOfMapaY <= height) {
        setEndOfMapaY(endOfMapaY);
      }
    };

    updateEndOfMapa();
    window.addEventListener("resize", updateEndOfMapa);

    return () => {
      window.removeEventListener("resize", updateEndOfMapa);
    };
  }, [endOfMapaX, endOfMapaY, width, height]);

  return {
    endOfMapaX,
    endOfMapaY,
  };
}

export default EndOfMapaState;
