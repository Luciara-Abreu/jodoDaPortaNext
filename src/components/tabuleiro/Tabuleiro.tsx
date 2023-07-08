import Hero from '../hero/Hero'
import { TabuleiroContainer } from './styles'
import Image from 'next/image'
import MiniDemon from '../mini.demon/MiniDemon'
import Demon from '../demon/Demon'
import Trap from '../trap/trap'
import Chest from '../chest/chest'
import { IHeroProps } from '@/interfaces'
import Debugger from '@/Debugger'

const Tabuleiro: React.FC<IHeroProps> = ({ buttonLeft, buttonRight, buttonDown, buttonUp }) => {
  return (
    <TabuleiroContainer>
      <Hero buttonLeft={buttonLeft} buttonRight={buttonRight} buttonDown={buttonDown} buttonUp={buttonUp} />
      
      <Chest key="chest1" initialPosition={{ y: 4, x: 5 }} text={0} />
      <Chest key="chest2" initialPosition={{ y: 6, x: 18 }} text={0} />
      <Chest key="chest3" initialPosition={{ y: 10, x: 10 }} text={0} />
      <Chest key="chest4" initialPosition={{ y: 16, x: 18 }} text={0} />

      <Trap key="trap1" initialPosition={{ y: 3, x: 2 }} text={0} />
      <Trap key="trap2" initialPosition={{ y: 4, x: 3 }} text={0} />

      <Trap key="trap3" initialPosition={{ y: 3, x: 12 }} text={0} />
      <Trap key="trap4" initialPosition={{ y: 4, x: 11 }} text={0} />
      <Trap key="trap5" initialPosition={{ y: 5, x: 10 }} text={0} />

      <Trap key="trap6" initialPosition={{ y: 5, x: 18 }} text={0} />
      <Trap key="trap7" initialPosition={{ y: 6, x: 17 }} text={0} />
      <Trap key="trap8" initialPosition={{ y: 7, x: 16 }} text={0} />

      <Trap key="trap9" initialPosition={{ y: 7, x: 4 }} text={0} />
      <Trap key="trap10" initialPosition={{ y: 8, x: 3 }} text={0} />

      <Trap key="trap11" initialPosition={{ y: 7, x: 8 }} text={0} />
      <Trap key="trap12" initialPosition={{ y: 8, x: 9 }} text={0} />
      <Trap key="trap13" initialPosition={{ y: 9, x: 10 }} text={0} />

      <Trap key="trap14" initialPosition={{ y: 10, x: 9 }} text={0} />
      <Trap key="trap15" initialPosition={{ y: 11, x: 8 }} text={0} />
      <Trap key="trap16" initialPosition={{ y: 12, x: 7 }} text={0} />

      <Trap key="trap17" initialPosition={{ y: 14, x: 4 }} text={0} />
      <Trap key="trap18" initialPosition={{ y: 15, x: 5 }} text={0} />
      <Trap key="trap19" initialPosition={{ y: 17, x: 6 }} text={0} />
      <Trap key="trap20" initialPosition={{ y: 18, x: 7 }} text={0} />

      <Trap key="trap21" initialPosition={{ y: 13, x: 10 }} text={0} />
      <Trap key="trap22" initialPosition={{ y: 13, x: 11 }} text={0} />
      <Trap key="trap23" initialPosition={{ y: 13, x: 12 }} text={0} />

      <Trap key="trap24" initialPosition={{ y: 15, x: 18 }} text={0} />
      <Trap key="trap25" initialPosition={{ y: 15, x: 17 }} text={0} />
      <Trap key="trap26" initialPosition={{ y: 15, x: 16 }} text={0} />
      <Trap key="trap27" initialPosition={{ y: 16, x: 15 }} text={0} />
      <Trap key="trap28" initialPosition={{ y: 17, x: 14 }} text={0} />

      <Trap key="trap29" initialPosition={{ y: 12, x: 16 }} text={0} />
      <Trap key="trap30" initialPosition={{ y: 13, x: 15 }} text={0} />
      <Trap key="trap31" initialPosition={{ y: 10, x: 16 }} text={0} />

      <MiniDemon key="miniDemon1" initialPosition={{ y: 14, x: 15 }} text={0} />
      <MiniDemon key="miniDemon2" initialPosition={{ y: 9, x: 9 }} text={0} />
      <MiniDemon key="miniDemon3" initialPosition={{ y: 4, x: 16 }} text={0} />
      <MiniDemon key="miniDemon4" initialPosition={{ y: 17, x: 5 }} text={0} />
      <MiniDemon key="miniDemon5" initialPosition={{ y: 5, x: 2 }} text={0} />
      <Demon key="demon" initialPosition={{ y: 3, x: 10 }} text={0} />

      <Image src="/images/tileset.gif" priority={true} alt="tabuleiro do jogo" width={0} height={0} className="image-tabuleiro" />
      <Debugger key="debugger" initialPosition={{ x: 0, y: 0 }} text={0} />
    </TabuleiroContainer>
  )
}
export default Tabuleiro

/**
 *
 */
