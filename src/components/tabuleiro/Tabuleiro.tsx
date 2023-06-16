import Hero from '../hero/Hero'
import { TabuleiroContainer } from './styles'
import Image from 'next/image'
import MiniDemon from '../mini.demon/MiniDemon'
import Demon from '../demon/Demon'
import Trap from '../trap/trap'
import Chest from '../chest/chest'
import { GAME_SIZE } from '@/settings/constants'

interface TabuleiroProps {
  buttonUp: number;
  buttonLeft: number;
}
const Tabuleiro: React.FC<TabuleiroProps> = ({ buttonUp, buttonLeft }) => {

  console.log('Class Tabuleiro newButtonUp ==> ', buttonUp);
  console.log('Class Tabuleiro ButtonLeft ==> ', buttonLeft);


  return (
    <TabuleiroContainer>
      <Hero  buttonUp={buttonUp} buttonLeft={buttonLeft} />
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
