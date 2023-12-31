import { IProps } from '@/interfaces'
import { TrapImage } from './styles'
import useScreenSize from '@/hook/useScreenSize';
import { TILE_BIG_SIZE } from '@/settings/constants';


const Trap = (props: IProps) => {  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isSmallScreen = useScreenSize()

  const bigScreen = {
    top: `${props.initialPosition.y * 46.9}px`,
    left:`${props.initialPosition.x * 48.3}px`,
    width: `${40}px`,
    height: `${34}px`,
  };

  const smallScreen = {
    top: `${props.initialPosition.y * 48}px`,
    left:`${props.initialPosition.x * 48}px`,
  };

  return (
    <>
      <TrapImage style={isSmallScreen ? smallScreen : bigScreen}/>
    </>
  )
}
export default Trap