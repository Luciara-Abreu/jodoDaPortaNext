import { HeroImage } from './styles'

const Hero = () => {
  return (
    <>
      <HeroImage />
    </>
  )
}
export default Hero
/**
    <ContainerHero
      style={{
        position: 'absolute',
        bottom: 28 * 1,
        left: 48 * 1,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: 'url(/images/Hero.png)',
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation 1s steps(4) infinite'
      }}
    ></ContainerHero>

 */
