import  styled from 'styled-components'

const ContainerButton = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;

  .arrow-button {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    background-color: transparent;
    transition: box-shadow 0.3s;
    cursor: pointer;
  }

  .arrow-button.arrow-right {
    border-width: 30px 0 30px 50px;
    border-color: transparent transparent transparent #000;
    right: 0;
    margin-right: 100px;
    transform: rotate(180deg);
  }

  .arrow-button.arrow-left {
    border-width: 30px 50px 30px 0;
    border-color: transparent #000 transparent transparent;
    left: 0;
    margin-left: 100px;
    transform: rotate(180deg);
  }

  .arrow-button.arrow-up {
    border-width: 30px 50px 30px 0;
    transform: rotate(90deg);
    border-color: transparent #000 transparent transparent;
    bottom: 100px
  }

  .arrow-button.arrow-down {
    border-width: 30px 50px 30px 0;
    transform: rotate(270deg);
    border-color: transparent #000 transparent transparent;
    top: 100px;
  }

  .arrow-button:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
`

export { ContainerButton }

