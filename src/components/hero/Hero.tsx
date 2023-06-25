import { IHeroProps } from '@/interfaces/heroInterfaces';
import { HeroImage } from './styles';

const Hero: React.FC<IHeroProps> = ({buttonLeft, buttonRight, buttonDown, buttonUp, transform  }) => {
  const imageStyle = {    
    left:   `${buttonLeft}px`,
    right:  `${buttonRight}px`,
    top:   `${buttonDown}px`,
    bottom: `${buttonUp}px`,
    transform: transform && transform.direction === 'right' ? 'scaleX(1)' : 'scaleX(-1)',    
  };
  
  console.log('HERO TRANSFORM ', transform);  
  
  return (
    <>
      <HeroImage style={imageStyle}/>
    </>
  );
};

export default Hero


//    transform: transform ? `scaleX(${direction === 'left' ? -1 : 1}) : 'scaleX(1)`,