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
  height: 89.3vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    margin: 0;
    padding: 0;
  }
`

/* -----------------------------------------------------------------------*/

export { ContainerApp, Body }