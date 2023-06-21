import styled from 'styled-components'

const ContainerApp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #282c34;

  > h1 {
    color: #fff;
    font-size: 70px;
    margin: 0 0 1% 0;
  }

  @media (max-width: 767px) {
    margin: 0;
    padding: 0;
    width: 394%;
    height: 390vh;
    display: flex;
    flex-direction: column;  
    justify-content: center;
    align-items: center;
    background: #282c34;
    

    > h1 {
    color: #fff;
    padding-top: 6%;
    font-size: 90px;
    margin: 0;
  }
  }
  `

const Body = styled.div`
  width: 100%;
  height: 85.2vh; //92.2vh
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .button-hero {
  position: absolute;
  left: 8%; /* Alinha horizontalmente ao centro */
  transform: translateX(-50%); /* Centraliza horizontalmente */
}


  @media (max-width: 767px) {
  width: 100%;
  height: 372vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

    .button-hero {
  position: absolute;
  top:265%;
  left: 140%; /* Alinha horizontalmente ao centro */
  transform: translateX(-50%); /* Centraliza horizontalmente */
}
  }
`

/* -----------------------------------------------------------------------*/

export { ContainerApp, Body }