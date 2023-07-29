import styled from 'styled-components'

const ContainerButton = styled.div`
@media (max-width: 767px) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; 
  position: absolute;  
  top: 400px;
  left:-55px;
  gap: 100px;


.right, .left{
  background: white;
    height: 100px;
    width:100px; 
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
  }

.arr-div{
  position: absolute;
  height: 30px;
  width: 30px;
  border-top: 5px solid gray;
  border-left: 5px solid gray;
  left: 25px;
  top:25px;
}
.right{
  transform: rotate(-48deg);
}
.left{
  transform: rotate(128deg);
}
`

export { ContainerButton }

