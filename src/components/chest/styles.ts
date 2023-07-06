import styled from "styled-components";

const ChestImage = styled.div`
  @keyframes chest-animation {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -144px;
    }
  }

  position: absolute;
  width: ${48}px;
  height: 50px;
  background-image: url(/images/chest.png);
  background-repeat: no-repeat;
  animation: chest-animation 1s steps(3) infinite;
`;

export { ChestImage };
