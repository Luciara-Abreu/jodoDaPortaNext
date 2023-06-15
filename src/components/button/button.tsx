import { useState } from 'react'
import { ContainerButton } from "./styles"
import { BUTTON_UP, BUTTON_LEFT } from '@/settings/constants'
import Message from '../message/mensage'

export let BUTTON_UP_UPDATE: any = 0
export let BUTTON_LEFT_UPDATE: any = 0

const ButtonHero: React.FC = () => {
  const[buttonUp, setButtonUp]= useState(BUTTON_UP)
  const[buttonLeft, setButtonLeft]= useState(BUTTON_LEFT)
  let message = "";


    const changeUP = () => {
      setButtonUp( buttonUp + 1 )    
    }  

  const changeLeft = () => {
    setButtonLeft( buttonLeft + 1 )   
  }

if(buttonUp >=27 && buttonUp <= 43){
    BUTTON_UP_UPDATE = buttonUp
  }else{
    return <Message message="Opz! Fim do mapa. Escolha outro caminho." />
  }


  if(buttonLeft >=155 && buttonLeft <= 174){
    BUTTON_LEFT_UPDATE = buttonLeft
  }else{
    return <Message message="Opz! Fim do mapa. Escolha outro caminho." />
  }
  
  console.log('UP => ', BUTTON_UP_UPDATE)
  console.log('LEFT =>', BUTTON_LEFT_UPDATE)


  return (
    <ContainerButton>
    <button className="arrow-button arrow-up" onClick={changeUP}></button>
    <button className="arrow-button arrow-left" onClick={changeLeft}></button>
    <button className="arrow-button arrow-right"></button>
    <button className="arrow-button arrow-down" ></button>
  </ContainerButton>
  )
}
export default ButtonHero

/**
 * 
  const changeDown= () => {
    setButtonUp( buttonUp - 1)
  }

  const changeRight = () => {
    setButtonLeft( buttonLeft -1)
  }
 */