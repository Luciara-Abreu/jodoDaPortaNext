import { IProps } from '@/interfaces'
import Tile from './Tale'
import { Canvas, CanvasBigScreen } from '@/context/canvas/helpers'
import useScreenSize from '@/hook/useScreenSize'

const position = {
  y: 0,
  x: 0,
}

function getCanvasMap() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isSmallScreen = useScreenSize()
  const tilesArray = []

  if(isSmallScreen){
    for (let y = 0; y < Canvas.length; y++) {
      const canvasY = Canvas[y]
  
      for (let x = 0; x < canvasY.length; x++) {
        const canvasYX = canvasY[x]
  
        const position = { x: x, y: y }
        const text = Canvas[y][x] || canvasYX
  
        const keyTile = `tile_${x}_${y}` // Generate a unique key
  
        tilesArray.push(<Tile key={keyTile} initialPosition={position} text={text} />)
      }
    }
  }else{
    for (let y = 0; y < CanvasBigScreen.length; y++) {
      const canvasY = CanvasBigScreen[y]
  
      for (let x = 0; x < canvasY.length; x++) {
        const canvasYX = canvasY[x]
  
        const position = { x: x, y: y }
        const text = CanvasBigScreen[y][x] || canvasYX
  
        const keyTile = `tile_${x}_${y}` // Generate a unique key
  
        tilesArray.push(<Tile key={keyTile} initialPosition={position} text={text} />)
      }
    }
  }

  return tilesArray
}

function Debugger(props: IProps) {
  const tiles = getCanvasMap()
  return <div>{tiles}</div>
}

export default Debugger
