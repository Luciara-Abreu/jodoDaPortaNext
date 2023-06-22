import  styled from 'styled-components'

const ContainerButton = styled.div`
  position: fixed;
  top: 265px;
  left: 53px;
  transform: translate(0, 0);

  width: 50px;
  height: 150px;
  border-radius: 20%;
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
  
  .arrow-button.arrow-up {
    border-width: 15px 35px 15px 0;//30px 50px 30px 0;
    transform: rotate(90deg);
    border-color: transparent #000 transparent transparent;  
    bottom: 122px; 

  box-shadow: 0 0 40px 40px $blue inset, 0 0 0 0 $blue;
  transition: all 150ms ease-in-out;
  
  &:hover {
    box-shadow: 0 0 10px 0 $blue inset, 0 0 10px 4px $blue;
  }
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
  width: 150px;
  height: 390px;
  position: fixed;
  top: 255px;
  left: 120px;
  transform: translate(0, 0);
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

  .arrow-button.arrow-up {
    border-width: 55px 75px 55px 0;//30px 50px 30px 0;
    transform: rotate(90deg);
    border-color: transparent #000 transparent transparent;
    bottom: 275px;
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

