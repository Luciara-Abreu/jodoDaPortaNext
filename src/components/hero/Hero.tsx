import { IHeroProps } from '@/interfaces/heroInterfaces';
import { HeroImage } from './styles';

const Hero: React.FC<IHeroProps> = ({buttonLeft, buttonRight, buttonDown, buttonUp  }) => {
  const imageStyle = {    
    left:   `${buttonLeft}px`,
    right:  `${buttonRight}px`,
    top:   `${buttonDown}px`,
    bottom: `${buttonUp}px`,
  };

  return (
    <>
      <HeroImage style={imageStyle}/>
    </>
  );
};

export default Hero
