import styled from "styled-components";

const ContainerApp = styled.div`
  width: 100%;
  height: 155vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #282c34;
  position: absolute;
  margin: 0;
  padding: 0;

  > h1 {
    color: #fff;
    font-size: 70px;
    margin: 0;
  }

  @media (max-width: 767px) {
    margin: 0;
    padding: 0;
    width: 260%;
    height: 245vh;
    background: #282c34;

    > h1 {
      color: #fff;
      padding-top: 6%;
      font-size: 90px;
      margin: 0;
    }
  }
`;

const Body = styled.div`
  width: 100%;
  height: 155vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .button-hero {
    position: absolute;
    left: 0%; /* Alinha horizontalmente ao centro */
    transform: translateX(-50%); /* Centraliza horizontalmente */
  }

  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;

    .button-hero {
      position: absolute;
      top: 60%;
      left: 30%; /* Alinha horizontalmente ao centro */
      transform: translateX(-50%); /* Centraliza horizontalmente */
    }
  }
`;

/* -----------------------------------------------------------------------*/

export { ContainerApp, Body };
