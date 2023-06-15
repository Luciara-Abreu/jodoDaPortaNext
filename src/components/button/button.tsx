import { useState } from 'react'
import { ContainerButton } from "./styles"
import { HERO_BUTTON_UP, HERO_BUTTON_LEFT } from '@/settings/constants'



const ButtonHero = () => {
  const[button_position, setButton_position]= useState(HERO_BUTTON_UP)
  const[left_position, setLeft_position]= useState(HERO_BUTTON_LEFT)

  const changeButtonPostionUp = () => {
    setButton_position({ x: HERO_BUTTON_UP.x + 1})
  }

  const changeButtonPostionLeft = () => {
    setLeft_position({ y: HERO_BUTTON_LEFT.y + 1})
  }


  const changeButtonPostionDown= () => {
    setButton_position({ x: HERO_BUTTON_UP.x - 1})
  }

  const changeButtonPostionRight = () => {
    setLeft_position({ y: HERO_BUTTON_LEFT.y - 1})
  }


  return (
    <ContainerButton>
    <button className="arrow-button arrow-right" onClick={changeButtonPostionRight}></button>
    <button className="arrow-button arrow-left" onClick={changeButtonPostionLeft}></button>
    <button className="arrow-button arrow-up" onClick={changeButtonPostionUp}></button>
    <button className="arrow-button arrow-down" onClick={changeButtonPostionDown}></button>
  </ContainerButton>
  )
}
export default ButtonHero