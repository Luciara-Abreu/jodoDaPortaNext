import styled from 'styled-components'

const DemonImage = styled.div`
  @keyframes demon-animation {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -384px;
    }
  }

  position: absolute;
  width: ${80}px;
  height: ${48 * 2}px;
  background-image: url(/images/demon.png);
  background-repeat: no-repeat;
  background-position: ${-35}px 0;
  animation: demon-animation 1s steps(4) infinite;
`

export { DemonImage }
