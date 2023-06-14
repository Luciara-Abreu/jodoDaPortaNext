import styled from 'styled-components'

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
  bottom: ${21 * 5}px;
  left: ${42 * 8}px;
  width: ${48}px;
  height: 50px;
  background-image: url(/images/trap.png);
  background-repeat: no-repeat;
  //background-position: 0 ${-35}px;
  animation: trap-animation 1s steps(4) infinite;
`

export { TrapImage }
