import React, { useEffect, useState } from 'react'
import { HeroImage } from './styles'
import useDirection from '@/hook/useDirectionHero'
import { IHeroProps } from '@/interfaces'
import { TILE_SIZE, EDirection } from '@/settings/constants'
import useMovementHeroKeyboard from '@/hook/useMovementHeroKeyboard'
import { useWindowWidth } from '@react-hook/window-size'

const initialPosition = {
  y: 1,
  x: 1,
}

const Hero: React.FC<IHeroProps> = ({ buttonLeft, buttonRight, buttonDown, buttonUp }) => {
  const transform = useDirection(buttonLeft)
  const movi = useMovementHeroKeyboard()
  const windowWidth = useWindowWidth()

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const movimentButton = {
    bottom: `${buttonUp}px`,
    left: `${buttonLeft}px`,
    right: `${buttonRight}px`,
    top: `${buttonDown}px`,
    transform: transform,
  }

  const movimentKeyboard = {
    bottom: `${movi.position.y * TILE_SIZE}px`,
    left: `${movi.position.x * TILE_SIZE}px`,
    transform: `scaleX(${movi.direction === EDirection.RIGHT ? 1 : -1})`,
  }

  const typeMovimentHero = windowWidth <= 765 ? movimentButton : movimentKeyboard;

  return (
    <>
    { isClient && <HeroImage style={typeMovimentHero} />}
    </>
  )
}

export default Hero
