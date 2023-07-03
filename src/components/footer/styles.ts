import styled from "styled-components";

const ContainerComponentFooter = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  background-color: black;
  color: antiquewhite;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;

  .p-footer {
    font-size: 15px;
    margin: 0;
  }

  @media (max-width: 767px) {
    width: 82%;
    height: auto;
    margin-top: 0;
    padding: 0% 8% 0% 8%;

    .p-footer {
      font-size: 25px;
    }
  }
`;

export { ContainerComponentFooter };
