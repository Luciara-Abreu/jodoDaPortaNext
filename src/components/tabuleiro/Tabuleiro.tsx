import Hero from "../hero/Hero";
import { TabuleiroContainer } from "./styles";
import Image from "next/image";
import MiniDemon from "../mini.demon/MiniDemon";
import Demon from "../demon/Demon";
import Trap from "../trap/trap";
import Chest from "../chest/chest";
import { IHeroProps } from "@/interfaces/heroInterfaces";


const Tabuleiro: React.FC<IHeroProps> = ({buttonLeft, buttonRight, buttonDown, buttonUp}) => {
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
      <MiniDemon initialPosition={{ y: 7, x: 5 }} />
      <MiniDemon initialPosition={{ y: 5, x: 17 }} />
      <MiniDemon initialPosition={{ y: 2, x: 8 }} />
      <Demon initialPosition={{ y: 3, x: 10 }} />
      <Image
        src="/images/tileset.gif"
        alt="tabuleiro do jogo"
        width={0}
        height={0}
        className="image-tabuleiro"
      />
    </TabuleiroContainer>
  );
};
export default Tabuleiro;
