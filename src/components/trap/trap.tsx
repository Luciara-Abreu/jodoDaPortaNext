import { IProps } from '@/interfaces'
import { TrapImage } from './styles'


const Trap = (props: IProps) => {  
  const imageStyle = {
    top: `${props.initialPosition.y * 48}px`,
    left:`${props.initialPosition.x * 48}px`,
  };


  return (
    <>
      <TrapImage style={imageStyle}/>
    </>
  )
}
export default Trap

