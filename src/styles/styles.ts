import styled from 'styled-components'

const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #282c34;

  > h1 {
    color: #fff;
    margin: 0;
    padding: 0;
  }

  `

const Body = styled.div`
  width: 100%;
  height: 91.2vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .button-hero {
  position: absolute;
  //bottom: 490px; /* Define uma distância do fundo */
  left: 45%; /* Alinha horizontalmente ao centro */
  transform: translateX(-50%); /* Centraliza horizontalmente */
}

  @media (max-width: 767px) {
    margin: 0;
    padding: 0;
  }
`

/* -----------------------------------------------------------------------*/

export { ContainerApp, Body }