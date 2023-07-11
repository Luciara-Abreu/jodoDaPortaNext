import { POSITION_LEFT, POSITION_RIGHT, POSITION_TOP, POSITION_UP } from '@/settings/constants'
import { useState } from 'react'

const useButtonPositions = () => {
  const [buttonLeft, setButtonLeft] = useState(POSITION_LEFT)
  const [buttonRight, setButtonRight] = useState(POSITION_RIGHT)
  const [buttonDown, setButtonDown] = useState(POSITION_TOP)
  const [buttonUp, setButtonUp] = useState(POSITION_UP)

 const handlePositionUpdateX = (newButtonLeft: number, newButtonRight: number) => {
    setButtonLeft(newButtonLeft)
    setButtonRight(newButtonRight)
  }

  const handlePositionUpdateY = (newButtonDown: number, newButtonUp: number) => {
    setButtonDown(newButtonDown)
    setButtonUp(newButtonUp)
  }

  return {
    buttonLeft,
    buttonRight,
    buttonDown,
    buttonUp,
    handlePositionUpdateX,
    handlePositionUpdateY,
  }
}

export default useButtonPositions
