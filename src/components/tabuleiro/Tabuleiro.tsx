import Hero from "../hero/Hero";
import { TabuleiroContainer } from "./styles";
import Image from "next/image";
import MiniDemon from "../mini.demon/MiniDemon";
import Demon from "../demon/Demon";
import Trap from "../trap/trap";
import Chest from "../chest/chest";
import { IHeroProps } from "@/interfaces";
import Debugger from "@/Debugger";

const Tabuleiro: React.FC<IHeroProps> = ({
  buttonLeft,
  buttonRight,
  buttonDown,
  buttonUp,
}) => {
  return (
    <TabuleiroContainer>
      <Hero
        buttonLeft={buttonLeft}
        buttonRight={buttonRight}
        buttonDown={buttonDown}
        buttonUp={buttonUp}
      />
      <Chest />
      <Trap initialPosition={{ y: 3, x: 2 }} text={0} />    
      <Trap initialPosition={{ y: 4, x: 3 }} text={0} /> 

      <Trap initialPosition={{ y: 3, x: 12 }} text={0} />    
      <Trap initialPosition={{ y: 4, x: 11 }} text={0} /> 
      <Trap initialPosition={{ y: 5, x: 10 }} text={0} />
      
      <Trap initialPosition={{ y: 5, x: 18 }} text={0} />    
      <Trap initialPosition={{ y: 6, x: 17 }} text={0} /> 
      <Trap initialPosition={{ y: 7, x: 16 }} text={0} /> 

      <Trap initialPosition={{ y: 7, x: 4 }} text={0} /> 
      <Trap initialPosition={{ y: 8, x: 3 }} text={0} />    

      <Trap initialPosition={{ y: 7, x: 8 }} text={0} />  
      <Trap initialPosition={{ y: 8, x: 9 }} text={0} />  
      <Trap initialPosition={{ y: 9, x: 10 }} text={0} />  

      <Trap initialPosition={{ y: 10, x: 9 }} text={0} />  
      <Trap initialPosition={{ y: 11, x: 8 }} text={0} />  
      <Trap initialPosition={{ y: 12, x: 7 }} text={0} />  

      <Trap initialPosition={{ y: 14, x: 4 }} text={0} />  
      <Trap initialPosition={{ y: 15, x: 5 }} text={0} />  
      <Trap initialPosition={{ y: 17, x: 6 }} text={0} />  
      <Trap initialPosition={{ y: 18, x: 7 }} text={0} />  

      <Trap initialPosition={{ y: 13, x: 10 }} text={0} />
      <Trap initialPosition={{ y: 13, x: 11 }} text={0} />
      <Trap initialPosition={{ y: 13, x: 12 }} text={0} />

      <Trap initialPosition={{ y: 15, x: 18 }} text={0} />
      <Trap initialPosition={{ y: 15, x: 17 }} text={0} />
      <Trap initialPosition={{ y: 15, x: 16 }} text={0} />
      <Trap initialPosition={{ y: 16, x: 15 }} text={0} />
      <Trap initialPosition={{ y: 17, x: 14 }} text={0} />

      <Trap initialPosition={{ y: 12, x: 16 }} text={0} />
      <Trap initialPosition={{ y: 13, x: 15 }} text={0} />
      <Trap initialPosition={{ y: 10, x: 16 }} text={0} />

      <Image
        src="/images/tileset.gif"
        alt="tabuleiro do jogo"
        width={0}
        height={0}
        className="image-tabuleiro"
      />
      <Debugger key="debugger" initialPosition={{ x: 0, y: 0 }} text={0} />
    </TabuleiroContainer>
  );
};
export default Tabuleiro;

/**
 *    <MiniDemon key="miniDemon" initialPosition={{ y: 14, x: 15 }} text={0} />
      <MiniDemon key="miniDemon" initialPosition={{ y: 9, x: 9 }} text={0} />
      <MiniDemon key="miniDemon" initialPosition={{ y: 4, x: 16 }} text={0} />
      <MiniDemon key="miniDemon" initialPosition={{ y: 17, x: 5 }} text={0} />
      <MiniDemon key="miniDemon" initialPosition={{ y: 5, x: 2 }} text={0} />
      <Demon key="demon" initialPosition={{ y: 3, x: 10 }} text={0} />
 */
