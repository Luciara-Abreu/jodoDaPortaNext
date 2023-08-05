import styled from "styled-components";


const ContainerApp = styled.div`
  width: 100%;
  height: 100vh;
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


  @media(min-width: 0px) and (max-width: 374px){
    width: 460%;
    height: 400vh;    
    background: pink;

    > h1 {
      color: #fff;
      padding-top: 6%;
      font-size: 90px;
      margin: 0;
    }
  }

  @media(min-width: 375px) and (max-width: 575px){
    width: 280%;
    height: 280vh;    
    background: gray;
  }
  
  @media(min-width: 576px) and (max-width: 768px){
    width: 180%;
    height: 210vh;    
    background: purple;
  }
`;


//---------------------------------------------------
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

  @media (max-width: 768px) {
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

  @media(min-width: 320px) and (max-width: 374px){
    display: flex;
    width: 0%;
    height: 70vh;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

`;

/* -----------------------------------------------------------------------*/

export { ContainerApp, Body };
