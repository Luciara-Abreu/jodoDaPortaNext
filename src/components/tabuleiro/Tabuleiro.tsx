import Hero from '../hero/Hero'
import { TabuleiroContainer } from './styles'
import Image from 'next/image'
import MiniDemon from '../mini.demon/MiniDemon'
import Demon from '../demon/Demon'
import Trap from '../trap/trap'
import Chest from '../chest/chest'
import { IHeroProps } from '@/interfaces'
import Debugger from '@/Debugger'
import useScreenSize from '@/hook/useScreenSize'
import { GAME_BIG_SIZE_HEIGHT, GAME_SIZE} from '@/settings/constants';

const Tabuleiro: React.FC<IHeroProps> = ({ buttonLeft, buttonRight, buttonDown, buttonUp }) => {
  const isSmallScreen = useScreenSize()

  return (
    <TabuleiroContainer>
      <Image src="/images/tileset.gif" priority={true} alt="tabuleiro do jogo" 
      width={isSmallScreen ?  GAME_SIZE:960} 
      height={isSmallScreen ? GAME_SIZE : GAME_BIG_SIZE_HEIGHT} className="image-tabuleiro" />


      <Hero buttonLeft={buttonLeft} buttonRight={buttonRight} buttonDown={buttonDown} buttonUp={buttonUp} />
      <Chest key="chest1" initialPosition={isSmallScreen ? { y: 3, x: 5 } : { y: 3.8, x: 4.8 }} text={0} />
      <Chest key="chest2" initialPosition={isSmallScreen ? { y: 6, x: 18 } : { y: 6.8, x: 17.4 }} text={0} />
      <Chest key="chest3" initialPosition={isSmallScreen ? { y: 10, x: 10 } : { y: 10.9, x: 9.5 }} text={0} />
      <Chest key="chest4" initialPosition={isSmallScreen ? { y: 16, x: 18 } : { y: 15.8, x: 28.4 }} text={0} />

      <Trap key="trap1" initialPosition={isSmallScreen ? { y: 3, x: 2 } : { y: 4, x: 1.7 }} text={0} />
      <Trap key="trap2" initialPosition={isSmallScreen ? { y: 4, x: 3 } : { y: 5, x: 3.2 }} text={0} />
      <Trap key="trap3" initialPosition={isSmallScreen ? { y: 3, x: 12 } : { y: 7, x: 4.8 }} text={0} />
      <Trap key="trap4" initialPosition={isSmallScreen ? { y: 4, x: 11 } : { y: 5.9, x: 6.5 }} text={0} />
      <Trap key="trap5" initialPosition={isSmallScreen ? { y: 5, x: 10 } : { y: 5, x: 8 }} text={0} />
      <Trap key="trap5" initialPosition={isSmallScreen ? { y: 4, x: 8 }: { y: 4, x: 8 }} text={0} />

      <Trap key="trap6" initialPosition={isSmallScreen ? { y: 5, x: 18 } : { y: 10, x: 8 }} text={0} />
      <Trap key="trap7" initialPosition={isSmallScreen ? { y: 6, x: 17 } : { y: 10, x: 9.5 }} text={0} />
      <Trap key="trap8" initialPosition={isSmallScreen ? { y: 7, x: 16 } : { y: 10, x: 11 }} text={0} />
      <Trap key="trap8" initialPosition={isSmallScreen ? { y: 7, x: 16 } : { y: 11, x: 12.7 }} text={0} />

      <Trap key="trap9" initialPosition={isSmallScreen ? { y: 7, x: 4 } : { y: 14, x: 8 }} text={0} />
      <Trap key="trap10" initialPosition={isSmallScreen ? { y: 8, x: 3 } : { y: 14, x: 9.5 }} text={0} />
      <Trap key="trap9" initialPosition={isSmallScreen ? { y: 7, x: 4 } : { y: 15, x: 11 }} text={0} />
      <Trap key="trap10" initialPosition={isSmallScreen ? { y: 8, x: 3 } : { y: 16, x: 12.7 }} text={0} />

      <Trap key="trap11" initialPosition={isSmallScreen ? { y: 7, x: 8 } : { y: 4, x: 14.3 }} text={0} />
      <Trap key="trap11" initialPosition={isSmallScreen ? { y: 7, x: 8 } : { y: 5, x: 15.8 }} text={0} />
      <Trap key="trap11" initialPosition={isSmallScreen ? { y: 7, x: 8 } : { y: 6, x: 17.4 }} text={0} />
      <Trap key="trap12" initialPosition={isSmallScreen ? { y: 8, x: 9 } : { y: 5, x: 19 }} text={0} />
      <Trap key="trap13" initialPosition={isSmallScreen ? { y: 9, x: 10 } : { y: 8, x: 15.8 }} text={0} />
      <Trap key="trap13" initialPosition={isSmallScreen ? { y: 9, x: 10 } : { y: 9, x: 17.4 }} text={0} />

      <Trap key="trap14" initialPosition={isSmallScreen ? { y: 10, x: 9 } : { y: 16, x: 17.4 }} text={0} />
      <Trap key="trap15" initialPosition={isSmallScreen ? { y: 11, x: 8 } : { y: 17, x: 19 }} text={0} />

      <Trap key="trap17" initialPosition={isSmallScreen ? { y: 14, x: 4 } : { y: 15, x: 22.1 }} text={0} />
      <Trap key="trap18" initialPosition={isSmallScreen ? { y: 15, x: 5 } : { y: 16, x: 23.6 }} text={0} />
      <Trap key="trap19" initialPosition={isSmallScreen ? { y: 17, x: 6 } : { y: 16, x: 25.2 }} text={0} />
      <Trap key="trap20" initialPosition={isSmallScreen ? { y: 18, x: 7 } : { y: 15, x: 25.2 }} text={0} />

      <Trap key="trap21" initialPosition={isSmallScreen ? { y: 13, x: 10 } : { y: 14, x: 25.2 }} text={0} />
      <Trap key="trap22" initialPosition={isSmallScreen ? { y: 13, x: 11 } : { y: 14, x: 26.8 }} text={0} />
      <Trap key="trap23" initialPosition={isSmallScreen ? { y: 13, x: 12 } : { y: 13, x: 26.8 }} text={0} />

      <Trap key="trap24" initialPosition={isSmallScreen ? { y: 15, x: 18 } : { y: 6, x: 28.4 }} text={0} />
      <Trap key="trap24" initialPosition={isSmallScreen ? { y: 15, x: 18 } : { y: 5, x: 26.8 }} text={0} />
      <Trap key="trap24" initialPosition={isSmallScreen ? { y: 15, x: 18 } : { y: 7, x: 29.8 }} text={0} />

      <Trap key="trap24" initialPosition={isSmallScreen ? { y: 15, x: 18 } : { y: 10, x: 22.1 }} text={0} />
      <Trap key="trap24" initialPosition={isSmallScreen ? { y: 15, x: 18 } : { y: 11, x: 23.7 }} text={0} />
      <Trap key="trap24" initialPosition={isSmallScreen ? { y: 15, x: 18 } : { y: 8, x: 26.8 }} text={0} />

      <Trap key="trap25" initialPosition={isSmallScreen ? { y: 15, x: 17 } : { y: 15, x: 17 }} text={0} />
      <Trap key="trap26" initialPosition={isSmallScreen ? { y: 15, x: 16 } : { y: 15, x: 16 }} text={0} />
      <Trap key="trap27" initialPosition={isSmallScreen ? { y: 16, x: 15 } : { y: 16, x: 15 }} text={0} />
      <Trap key="trap28" initialPosition={isSmallScreen ? { y: 17, x: 14 } :  { y: 17, x: 14 }} text={0} />

      <Trap key="trap29" initialPosition={isSmallScreen ? { y: 12, x: 16 } : { y: 12, x: 16 }} text={0} />
      <Trap key="trap30" initialPosition={isSmallScreen ? { y: 13, x: 15 } :  { y: 13, x: 15 }} text={0} />
      <Trap key="trap31" initialPosition={isSmallScreen ? { y: 10, x: 16 } : { y: 10, x: 16 }} text={0} />
  

      <MiniDemon key="miniDemon1" initialPosition={{ y: 14, x: 15 }} text={0} />
      <MiniDemon key="miniDemon2" initialPosition={{ y: 9, x: 9 }} text={0} />
      <MiniDemon key="miniDemon3" initialPosition={{ y: 4, x: 16 }} text={0} />
      <MiniDemon key="miniDemon4" initialPosition={{ y: 17, x: 5 }} text={0} />
      <MiniDemon key="miniDemon5" initialPosition={{ y: 5, x: 2 }} text={0} />
      <Demon key="demon" initialPosition={{ y: 3, x: 10 }} text={0} />

      <Debugger key="debugger" initialPosition={{ x: 100, y: 0 }} text={0} />
    </TabuleiroContainer>
  )
}
export default Tabuleiro

/**

      
 */
