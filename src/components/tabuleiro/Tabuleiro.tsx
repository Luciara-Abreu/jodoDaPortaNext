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
import { ECanvas, GAME_BIG_SIZE_HEIGHT, GAME_SIZE } from '@/settings/constants'
import { Canvas } from '@/context/canvas/helpers'

function getCanvasMap() {
  const array = [] // : JSX.Element[]

  for (let y = 0; y < Canvas.length; y++) {
    const canvasY = Canvas[y]

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x]

      const position = { x: x, y: y }
      const text = Canvas[y][x] || canvasYX
      const keyTile = `tile_${x}_${y}`

      if (text === ECanvas.HERO) {
        array.push(<Hero initialPosition={position} key={keyTile} buttonLeft={0} buttonRight={0} buttonDown={0} buttonUp={0} />)
      }
      if (text === ECanvas.CHEST) {
        array.push(<Chest initialPosition={position}  key={keyTile} text={0} />)
      }
     /* if (text === ECanvas.TRAP) {
        array.push(<Trap initialPosition={position}  key={keyTile} text={0} />)
      }
      if (text === ECanvas.MINI_DEMON) {
        array.push(<MiniDemon  key={keyTile} initialPosition={position} text={0}/>)
      }
      if (text === ECanvas.DEMON) {
        array.push(<Demon  key={keyTile} initialPosition={position} text={0}/>)
      }*/

      //array.push(<Tile key={keyTile} initialPosition={position} text={text} />)
    }
  }
  return array
}

const elements = getCanvasMap()
const Tabuleiro: React.FC<IHeroProps> = ({ buttonLeft, buttonRight, buttonDown, buttonUp }) => {
  const isSmallScreen = useScreenSize()

  return (
    <TabuleiroContainer>
      <Image
        src="/images/tileset.gif"
        priority={true}
        alt="tabuleiro do jogo"
        width={isSmallScreen ? GAME_SIZE : 960}
        height={isSmallScreen ? GAME_SIZE : GAME_BIG_SIZE_HEIGHT}
        className="image-tabuleiro"
      />

      {elements}

      <Debugger key="debugger" initialPosition={{ x: 0, y: 0 }} text={0} />
    </TabuleiroContainer>
  )
}

export default Tabuleiro

/**      
 * 
 * import Hero from '../hero/Hero'
import { TabuleiroContainer } from './styles'
import Image from 'next/image'
import MiniDemon from '../mini.demon/MiniDemon'
import Demon from '../demon/Demon'
import Trap from '../trap/trap'
import Chest from '../chest/chest'
import { IHeroProps } from '@/interfaces'
import Debugger from '@/Debugger'
import useScreenSize from '@/hook/useScreenSize'
import { GAME_BIG_SIZE_HEIGHT, GAME_SIZE } from '@/settings/constants'

const Tabuleiro: React.FC<IHeroProps> = ({ buttonLeft, buttonRight, buttonDown, buttonUp }) => {
  const isSmallScreen = useScreenSize()

  return (
    <TabuleiroContainer>
      <Image
        src="/images/tileset.gif"
        priority={true}
        alt="tabuleiro do jogo"
        width={isSmallScreen ? GAME_SIZE : 960}
        height={isSmallScreen ? GAME_SIZE : GAME_BIG_SIZE_HEIGHT}
        className="image-tabuleiro"
      />
      <Hero buttonLeft={buttonLeft} buttonRight={buttonRight} buttonDown={buttonDown} buttonUp={buttonUp} />
      
      <Chest key="chest1" initialPosition={isSmallScreen ? { y: 3, x: 5 } : { y: 4, x: 5.2 }} text={0} />
      <Chest key="chest2" initialPosition={isSmallScreen ? { y: 6, x: 18 } : { y: 6, x: 17.6 }} text={0} />
      <Chest key="chest3" initialPosition={isSmallScreen ? { y: 10, x: 10 } : { y: 10.9, x: 6.2 }} text={0} />
      <Chest key="chest4" initialPosition={isSmallScreen ? { y: 16, x: 18 } : { y: 14, x: 17.6 }} text={0} />

      <Trap key="trap1" initialPosition={isSmallScreen ? { y: 3, x: 2 } : { y: 4, x: 1.1 }} text={0} />
      <Trap key="trap2" initialPosition={isSmallScreen ? { y: 4, x: 3 } : { y: 5, x: 2.1 }} text={0} />
      <Trap key="trap3" initialPosition={isSmallScreen ? { y: 3, x: 12 } : { y: 7, x: 3.1 }} text={0} />
      <Trap key="trap4" initialPosition={isSmallScreen ? { y: 4, x: 11 } : { y: 6, x: 4.2 }} text={0} />
      <Trap key="trap5" initialPosition={isSmallScreen ? { y: 5, x: 10 } : { y: 5, x: 5.2 }} text={0} />

      <Trap key="trap6" initialPosition={isSmallScreen ? { y: 4, x: 8 }: { y: 4.1, x: 9.3 }} text={0} />  
      <Trap key="trap7" initialPosition={isSmallScreen ? { y: 7, x: 8 } : { y: 5.1, x: 10.4 }} text={0} />

      <Trap key="trap8" initialPosition={isSmallScreen ? { y: 5, x: 18 } : { y: 10.1, x: 5.2 }} text={0} />
      <Trap key="trap9" initialPosition={isSmallScreen ? { y: 6, x: 17 } : { y: 10.1, x: 6.2 }} text={0} />
      <Trap key="trap10" initialPosition={isSmallScreen ? { y: 7, x: 16 } : { y: 10.1, x: 7.3 }} text={0} />
      <Trap key="trap11" initialPosition={isSmallScreen ? { y: 7, x: 16 } : { y: 11.1, x: 8.3 }} text={0} />

      
      <Trap key="trap12" initialPosition={isSmallScreen ? { y: 7, x: 4 } : { y: 14.1, x: 5.2 }} text={0} />
      <Trap key="trap13" initialPosition={isSmallScreen ? { y: 8, x: 3 } : { y: 14.1, x: 6.3 }} text={0} />
      <Trap key="trap14" initialPosition={isSmallScreen ? { y: 7, x: 4 } : { y: 15.1, x: 7.3 }} text={0} />
      <Trap key="trap15" initialPosition={isSmallScreen ? { y: 8, x: 3 } : { y: 16.1, x: 8.3 }} text={0} />

      <Trap key="trap16" initialPosition={isSmallScreen ? { y: 15, x: 18 } : { y: 5.1, x: 12.4 }} text={0} />
      <Trap key="trap17" initialPosition={isSmallScreen ? { y: 15, x: 18 } : { y: 6.1, x: 11.4 }} text={0} />
      <Trap key="trap18" initialPosition={isSmallScreen ? { y: 15, x: 18 } : { y: 8.1, x: 17.6 }} text={0} />

      <Trap key="trap19" initialPosition={isSmallScreen ? { y: 7, x: 8 } : { y: 4.1, x: 14.5 }} text={0} />
      <Trap key="trap20" initialPosition={isSmallScreen ? { y: 7, x: 8 } : { y: 5.1, x: 15.5 }} text={0} />
      <Trap key="trap21" initialPosition={isSmallScreen ? { y: 8, x: 9 } : { y: 5.1, x: 17.6 }} text={0} />
      <Trap key="trap22" initialPosition={isSmallScreen ? { y: 9, x: 10 } : { y: 6.1, x: 18.6 }} text={0} />
      <Trap key="trap23" initialPosition={isSmallScreen ? { y: 9, x: 10 } : { y: 7.1, x: 19.6 }} text={0} />    

      <Trap key="trap24" initialPosition={isSmallScreen ? { y: 15, x: 18 } : { y: 8.1, x: 10.4 }} text={0} />
      <Trap key="trap25" initialPosition={isSmallScreen ? { y: 15, x: 18 } : { y: 9.1, x: 11.5 }} text={0} />
      <Trap key="trap26" initialPosition={isSmallScreen ? { y: 15, x: 18 } : { y: 10.1, x: 10.4 }} text={0} />

      <Trap key="trap27" initialPosition={isSmallScreen ? { y: 15, x: 17 } : { y: 10.1, x: 14.5 }} text={0} />
      <Trap key="trap28" initialPosition={isSmallScreen ? { y: 15, x: 16 } : { y: 11.1, x: 15.5 }} text={0} />

      <Trap key="trap29" initialPosition={isSmallScreen ? { y: 16, x: 15 } : { y: 12.1, x: 10.4 }} text={0} />
      <Trap key="trap30" initialPosition={isSmallScreen ? { y: 17, x: 14 } :  { y: 13.1, x: 9.4 }} text={0} />

      <Trap key="trap31" initialPosition={isSmallScreen ? { y: 14, x: 4 } : { y: 15.1, x: 11.4 }} text={0} />
      <Trap key="trap32" initialPosition={isSmallScreen ? { y: 15, x: 5 } : { y: 16.1, x: 12.4 }} text={0} />
      <Trap key="trap33" initialPosition={isSmallScreen ? { y: 17, x: 6 } : { y: 17.1, x: 13.4 }} text={0} />

      <Trap key="trap34" initialPosition={isSmallScreen ? { y: 10, x: 9 } : { y: 13.1, x: 17.6 }} text={0} />
      <Trap key="trap35" initialPosition={isSmallScreen ? { y: 11, x: 8 } : { y: 14.1, x: 16.6 }} text={0} />
      <Trap key="trap36" initialPosition={isSmallScreen ? { y: 18, x: 7 } : { y: 15.1, x: 14.5 }} text={0} />

      <Trap key="trap37" initialPosition={isSmallScreen ? { y: 12, x: 16 } : { y: 15.1, x: 16.6 }} text={0} />
      <Trap key="trap38" initialPosition={isSmallScreen ? { y: 13, x: 15 } :  { y: 16.1, x: 16.5}} text={0} />
      <Trap key="trap39" initialPosition={isSmallScreen ? { y: 10, x: 16 } : { y: 16.1, x: 15.5 }} text={0} />


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

 */
