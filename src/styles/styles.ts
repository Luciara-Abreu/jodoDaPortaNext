import styled from "styled-components";

const ContainerApp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: #282c34;

  > h1 {
    color: #fff;
    font-size: 5vw; /* Usando unidade 'vw' para tornar a fonte responsiva */
    margin: 0;
  } 

  @media (max-width: 768px) {
    width: 330vw;
    height: 320vh;
    > h1 {
      font-size: 8vw; /* Ajustando o tamanho da fonte para telas menores */
    }
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .button-hero {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    .button-hero {
      top: 30%;
      left: 30%;
    }
  }
`;

export { ContainerApp, Body };
