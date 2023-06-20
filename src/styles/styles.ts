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
    font-size: 70px;
    padding-top: 5%;
    margin: 0;
  }

  @media (max-width: 767px) {
    margin: 0;
    padding: 0;
    width: 270%;
    height: 270vh;
    display: flex;
    flex-direction: column;  
    justify-content: center;
    align-items: center;
    background: #282c34;

    > h1 {
    color: #fff;
    padding-top: 5%;
    font-size: 70px;
    margin: 0;
  }
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
  left: 45%; /* Alinha horizontalmente ao centro */
  transform: translateX(-50%); /* Centraliza horizontalmente */
}

  @media (max-width: 767px) {
  width: 100%;
  height: 250vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

    .button-hero {
  position: absolute;
  top: 155%;
  left: 90%; /* Alinha horizontalmente ao centro */
  transform: translateX(-50%); /* Centraliza horizontalmente */
}
  }
`

/* -----------------------------------------------------------------------*/

export { ContainerApp, Body }