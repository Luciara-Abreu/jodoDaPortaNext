import { IProps } from '@/interfaces'
import { ChestImage } from './styles'

const Chest = (props: IProps) => {
    const imageStyle = {
      top: `${props.initialPosition.y * 48}px`,
      left:`${props.initialPosition.x * 48}px`,
    };

  return (
    <>
      <ChestImage style={imageStyle}/>
    </>
  )
}
export default Chest

