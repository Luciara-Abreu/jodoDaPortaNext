import styled from 'styled-components'

const ContainerButton = styled.div`
@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: absolute;

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

    // dentro dos botões
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

  @media(min-width: 320px) and (max-width: 374px){
    top: 360px;
    padding: 4px;
    gap: 100px;

    .right,
    .left {
    background: blue;
    }
  }

  @media(min-width: 375px) and (max-width: 575px){
    top: 360px;
    padding: 4px 4px 4px 25px;
    gap: 100px;

    .right,
    .left {
    background: green;
    }
  }

 @media(min-width: 576px) and (max-width: 768px){
    top: 360px;
    padding: 4px 4px 4px 25px;
    gap: 100px;

    .right,
    .left {
    background: orange;
    }
  }
`

export { ContainerButton }
