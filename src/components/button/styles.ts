import  styled from 'styled-components'

const ContainerButton = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;

  .arrow-button {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    background-color: transparent;
    transition: box-shadow 0.3s;
    cursor: pointer;
  }

  .arrow-button.arrow-right {
    border-width: 30px 0 30px 50px;
    border-color: transparent transparent transparent #000;
    right: 0;
    margin-right: 100px;
    transform: rotate(180deg);
  }

  .arrow-button.arrow-left {
    border-width: 30px 50px 30px 0;
    border-color: transparent #000 transparent transparent;
    left: 0;
    margin-left: 100px;
    transform: rotate(180deg);
  }

  .arrow-button.arrow-up {
    border-width: 30px 50px 30px 0;
    transform: rotate(90deg);
    border-color: transparent #000 transparent transparent;
    bottom: 100px
  }

  .arrow-button.arrow-down {
    border-width: 30px 50px 30px 0;
    transform: rotate(270deg);
    border-color: transparent #000 transparent transparent;
    top: 100px;
  }

  .arrow-button:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }

  //--------------------------------------
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

export { ContainerButton }

