import { ButtonUp, ButtonLeft } from '../button/ButtonHero';
import { HeroImage } from './styles'

export interface IHeroProps {
  buttonUp: number;
  buttonLeft: number;
}

console.log('Class Hero ButtonUp ==> ',ButtonUp)
console.log('Class Hero ButtonLeft ==> ', ButtonLeft)

const Hero: React.FC<IHeroProps> = ({ buttonUp, buttonLeft }) => {
  return (
    <>
      <HeroImage buttonUp={ButtonUp} buttonLeft={ButtonLeft} />
    </>
  );
};
export default Hero