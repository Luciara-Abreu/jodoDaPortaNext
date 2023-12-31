import styled from 'styled-components'

const MiniDemonImage = styled.div`
  @keyframes mini-demon-animation {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -192px;
    }
  }

  position: absolute;
  width: ${48}px;
  height: 65px;
  background-image: url(/images/mini-demon.png);
  background-repeat: no-repeat;
  background-position: 0 ${-35}px;
  animation: mini-demon-animation 1s steps(4) infinite;
`

export { MiniDemonImage }
