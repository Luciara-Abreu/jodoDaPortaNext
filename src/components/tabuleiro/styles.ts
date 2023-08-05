import styled from "styled-components";

const TabuleiroContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;

  @media (max-width: 767px) {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 20%; 
  }
`;

export { TabuleiroContainer };
