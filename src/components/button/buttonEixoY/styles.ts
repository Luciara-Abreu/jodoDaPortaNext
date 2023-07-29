import styled from 'styled-components'

const ContainerButton = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 300px 0 0 97px;
    position: absolute;
    gap: 20%;

    .up,
    .down {
      background: white;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      margin: 45px;
      transition: 0.4s ease;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);

      .up:hover,
      .down:hover {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
      }
    }

    .arr-div {
      position: absolute;
      height: 30px;
      width: 30px;
      border-top: 5px solid #202020;
      border-left: 5px solid #202020;
      left: 25px;
      top: 25px;
    }
    .up {
      transform: rotate(50deg);
    }
    .down {
      transform: rotate(220deg);
    }
  }
`

export { ContainerButton }
