import styled from 'styled-components'

const ContainerComponentFooter = styled.div`
display: flex;
width: 100%;
height:5vh;
background-color: black;
color: antiquewhite;
justify-content: center;
align-items: center;

.p-footer{
  font-size: 15px;
}

@media (max-width: 767px) {
    width: auto;
    height: auto;
    margin-top: 0;
    padding: 0% 8% 0% 8%;

    .p-footer{
  font-size: 10px;
}
  }
`

export {
  ContainerComponentFooter
}
