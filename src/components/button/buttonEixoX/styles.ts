import styled from 'styled-components';

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  top: 284vw;
  left: 12vw;
  gap: 30vw;

  .right,
  .left {
    background: white;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 45px;
    transition: 0.4s ease;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }

  .right:hover,
  .left:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
  }

  /* Estilos para dispositivos com largura menor ou igual a 768px (telas menores) */
  @media (max-width: 768px) {
    .right,
    .left {
      top: 150%;
      margin: 20px; /* Reduzindo a margem para tamanhos menores */
    }

    /* Estilos para a seta dentro dos botões */
    .arr-div {
      position: absolute;
      height: 30px;
      width: 30px;
      border-top: 5px solid gray;
      border-left: 5px solid gray;
      left: 25px;
      top: 25px;
    }

    .right {
      transform: rotate(-48deg);
    }

    .left {
      transform: rotate(128deg);
    }
  }
`;

export { ContainerButton };
