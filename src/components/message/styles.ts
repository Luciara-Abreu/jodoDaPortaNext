import styled from 'styled-components'

const ContainerMessage = styled.div`
.scroll-container {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(0, 0);

  width: 200px;
  height: 200px;
}

.scroll {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f2e6d9;
  overflow: hidden;
}

.scroll-inner {
  position: relative;
  height: 100%;
  transform-origin: top center;
  animation: scroll-open 2s ease-in-out;
}

.scroll-top,
.scroll-bottom {
  width: 100%;
  height: 50px;
  background-color: #d9bfae;
}

.scroll-middle {
  height: calc(100% - 100px);
  padding: 20px;
  background-color: #f2e6d9;
}

.message {
  font-size: 16px;
  color: #514839;
}

@keyframes scroll-open {
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(1.2);
  }
  100% {
    transform: scaleY(1);
  }
}
`

export {ContainerMessage}
