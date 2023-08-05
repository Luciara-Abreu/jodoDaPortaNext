import styled from 'styled-components'

const ContainerButton = styled.div`
@media(max-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;


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
    .up {
      transform: rotate(50deg);
    }
    .down {
      transform: rotate(220deg);
    }

}

@media(min-width: 93px) and (max-width: 374px){
    top: 260px;
    padding: 2px;
    left: 150px;
    gap: 40px;

    .up,
    .down {
      background: blue;
    }
}

@media(min-width: 375px) and (max-width: 575px){
  top: 260px;
  padding: 2px;
  left: 171px;
  gap: 40px;

    .up,
    .down {
      background: green;
    }
}

@media(min-width: 576px) and (max-width: 768px){
  top: 130px;
    padding: 2px;
    left: 171px;
    gap: 0px;

    .up,
    .down {
      background: orange;
    }
}

`

export { ContainerButton }
