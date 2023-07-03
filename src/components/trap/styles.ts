import styled from "styled-components";

const TrapImage = styled.div`
  @keyframes trap-animation {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -384px;
    }
  }

  position: absolute;
  top: ${21 * 5}px;
  left: ${42 * 8}px;
  width: 47px;
  height: 36px;
  background-image: url(/images/trap.png);
  background-repeat: no-repeat;
  animation: trap-animation 1s steps(4) infinite;
`;

export { TrapImage };
