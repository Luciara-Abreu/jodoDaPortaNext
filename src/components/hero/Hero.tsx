import React from 'react'
import { HeroImage } from './styles'
import useDirection from '@/hook/useDirectionHero'
import { IHeroProps } from '@/interfaces'
import useScreenSize from '@/hook/useScreenSize'
import { TILE_SIZE, EDirection, HEAD_OFFSET } from '@/settings/constants'
import useMovementHeroKeyboard from '@/hook/useMovementHeroKeyboard'

const initialPosition = {
  y: 1,
  x: 1,
}

const Hero: React.FC<IHeroProps> = ({ buttonLeft, buttonRight, buttonDown, buttonUp }) => {
  const isSmallScreen = useScreenSize()
  const transform = useDirection(buttonLeft)
  const movi = useMovementHeroKeyboard()

  const movimentKeyboard = {
    bottom: `${movi.position.y * TILE_SIZE + 4}px`,
    left: `${movi.position.x * TILE_SIZE + 6}px`,
    transform: `scaleX(${movi.direction === EDirection.RIGHT ? 1 : -1})`,
  }

  const movimentButton = {
    left: `${buttonLeft}px`,
    right: `${buttonRight}px`,
    top: `${buttonDown}px`,
    bottom: `${buttonUp}px`,
    transform: transform,
  }

  return (
    <>
      <HeroImage style={isSmallScreen ? movimentButton : movimentKeyboard} />
    </>
  )
}

export default Hero
//
