import { GAME_SIZE } from '@/settings/constants'
import Hero from '../hero/Hero'
import { TabuleiroContainer } from './styles'
import Image from 'next/image'


function Tabuleiro() {
  return (
    <TabuleiroContainer>
      <Hero />
      <Image
        src="/images/tileset.gif"
        alt="tabuleiro do jogo"
        width={GAME_SIZE}
        height={530}
        className="tabuleiro"
      />
    </TabuleiroContainer>
  )
}
export default Tabuleiro
