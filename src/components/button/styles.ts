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
    transform: rotate(180deg);
    background-color: blue;
  }

  .arrow-button.arrow-right {
    border-width: 20px 0 20px 40px;
    border-color: transparent transparent transparent #000;
    right: 0;
    margin-right: 100px;
  }

  .arrow-button.arrow-left {
    border-width: 20px 40px 20px 0;
    border-color: transparent #000 transparent transparent;
    left: 0;
    margin-left: 100px;
  }

  .arrow-button.arrow-up {
    border-width: 40px 20px 0 20px;
    border-color: #000 transparent transparent transparent;
    top: 0;
    margin-top: 1px;
  }

  .arrow-button.arrow-down {
    border-width: 0 20px 40px 20px;
    border-color: transparent transparent #000 transparent;
    bottom: 0;
    margin-bottom: 1px;
  }
`;

export { ContainerButton }