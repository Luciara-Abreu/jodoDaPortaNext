import { HeroImage } from './styles';

export interface IHeroProps {
  buttonUp: number;
  buttonLeft: number;
}

const Hero: React.FC<IHeroProps> = ({ buttonUp, buttonLeft }) => {
  const imageStyle = {
    botton: `${buttonUp}px`,
    left: `${buttonLeft}px`,
  };

  console.log('Class Hero newButtonUp ==> ', buttonUp);
  console.log('Class Hero ButtonLeft ==> ', buttonLeft);

  return (
    <>
      <HeroImage style={imageStyle}/>
    </>
  );
};

export default Hero
