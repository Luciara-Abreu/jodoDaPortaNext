import Hero from "../hero/Hero";
import { TabuleiroContainer } from "./styles";
import Image from "next/image";
import MiniDemon from "../mini.demon/MiniDemon";
import Demon from "../demon/Demon";
import Trap from "../trap/trap";
import Chest from "../chest/chest";
import { IHeroProps } from "@/interfaces/heroInterfaces";
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
      <Trap />
      <MiniDemon key="miniDemon" initialPosition={{ y: 7, x: 5 }} text={0} />
      <Demon key="demon" initialPosition={{ y: 3, x: 10 }} text={0} />
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
 *    <MiniDemon initialPosition={{ y: 5, x: 17 }} />
      <MiniDemon initialPosition={{ y: 3, x: 3 }} />
 */
