import  styled from 'styled-components'

const ContainerButton = styled.div`
  position: fixed;
  top: 285px;
  left: 25px;
  transform: translate(0, 0);

  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #bf9b89;
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
    border-width: 15px 0 15px 35px;//30px 0 30px 50px;
    border-color: transparent transparent transparent #000;
    right: 0;
    margin-right: 115px;
    transform: rotate(180deg);
  }

  .arrow-button.arrow-left {
    border-width: 15px 35px 15px 0;//30px 50px 30px 0;
    border-color: transparent #000 transparent transparent;
    left: 0;
    margin-left: 115px;
    transform: rotate(180deg);
  }

  .arrow-button.arrow-up {
    border-width: 15px 35px 15px 0;//30px 50px 30px 0;
    transform: rotate(90deg);
    border-color: transparent #000 transparent transparent;
    bottom: 121px
  }

  .arrow-button.arrow-down {
    border-width: 15px 35px 15px 0; //30px 50px 30px 0;
    transform: rotate(270deg);
    border-color: transparent #000 transparent transparent;
    top: 121px;
  }

  .arrow-button:hover {
    box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.3);
  }  


  @media (max-width: 767px) {     
  position: fixed;
  top: 255px;
  left: 25px;
  transform: translate(0, 0);
  width: 370px;
  height: 370px;
  border-radius: 50%;
  background-color: #bf9b89;
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
    border-width: 55px 0 55px 75px;//30px 0 30px 50px;
    border-color: transparent transparent transparent #000;
    right: 0;
    margin-right: 285px;
    transform: rotate(180deg);
  }

  .arrow-button.arrow-left {
    border-width: 55px 75px 55px 0;//30px 50px 30px 0;
    border-color: transparent #000 transparent transparent;
    left: 0;
    margin-left: 285px;
    transform: rotate(180deg);
  }

  .arrow-button.arrow-up {
    border-width: 55px 75px 55px 0;//30px 50px 30px 0;
    transform: rotate(90deg);
    border-color: transparent #000 transparent transparent;
    bottom: 275px
  }

  .arrow-button.arrow-down {
    border-width: 55px 75px 55px 0; //30px 50px 30px 0;
    transform: rotate(270deg);
    border-color: transparent #000 transparent transparent;
    top: 275px;
  }

  .arrow-button:hover {
    box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.3);
  }  

  }  
`

export { ContainerButton }

