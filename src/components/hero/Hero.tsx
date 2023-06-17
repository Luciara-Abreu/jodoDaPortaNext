import { IHeroProps } from '@/interfaces/heroInterfaces';
import { HeroImage } from './styles';

const Hero: React.FC<IHeroProps> = ({buttonLeft,buttonRight }) => {
  const imageStyle = {    
    //top:   `${buttonTop}px`,
    right:  `${buttonRight}px`,
    //bottom: `${buttonBotton}px`,
    left:   `${buttonLeft}px`,
  };

  return (
    <>
      <HeroImage style={imageStyle}/>
    </>
  );
};

export default Hero
