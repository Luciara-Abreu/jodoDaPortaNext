import Hero from '../hero/Hero'
import { TabuleiroContainer } from './styles'
import Image from 'next/image'
import MiniDemon from '../mini.demon/MiniDemon'
import Demon from '../demon/Demon'
import Trap from '../trap/trap'
import Chest from '../chest/chest'
import { GAME_SIZE } from '@/settings/constants'
import { IHeroProps } from '@/interfaces/heroInterfaces'


const Tabuleiro: React.FC<IHeroProps> = ({buttonLeft, buttonRight, buttonTop }) => {

  return (
    <TabuleiroContainer>
      <Hero  buttonLeft={buttonLeft} buttonRight={buttonRight} buttonTop={buttonTop}/>
      <Trap />
      <Chest />
      <MiniDemon />
      <Demon/>
      <Image
        src="/images/tileset.gif" alt="tabuleiro do jogo" width={GAME_SIZE}  height={530} className="tabuleiro"/>
    </TabuleiroContainer>
  )
  }
export default Tabuleiro
