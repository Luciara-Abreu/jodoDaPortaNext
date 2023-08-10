import React from 'react'
import { HeroImage } from './styles'
import useDirection from '@/hook/useDirectionHero'
import { IHeroProps, IPropsHero } from '@/interfaces'
import useScreenSize from '@/hook/useScreenSize'
import { TILE_SIZE, EDirection } from '@/settings/constants'
import useMovementHeroKeyboard from '@/hook/useMovementHeroKeyboard'

const Hero: React.FC<IPropsHero & IHeroProps> = ({ buttonLeft, buttonRight, buttonDown, buttonUp, initialPosition }) => {
  const isSmallScreen = useScreenSize()
  const transform = useDirection(buttonLeft)
  const movi = useMovementHeroKeyboard({ initialPosition })

  const movimentKeyboard = {
    top: `${TILE_SIZE * movi.position.y - 48}px`,
    left: `${movi.position.x * TILE_SIZE + 4}px`,
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
