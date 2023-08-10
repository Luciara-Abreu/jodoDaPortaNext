import { IProps } from '@/interfaces'
import { ChestImage } from './styles'
import useScreenSize from '@/hook/useScreenSize';


const Chest = (props: IProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isSmallScreen = useScreenSize()

  const bigScreen = {
    top: `${props.initialPosition.y * 46}px`,
    left:`${props.initialPosition.x * 48}px`,
  };

  const smallScreen = {
    top: `${props.initialPosition.y * 48}px`,
    left:`${props.initialPosition.x * 48}px`,
  };
  return (
    <>
      <ChestImage style={isSmallScreen ? smallScreen : bigScreen}/>
    </>
  )
}
export default Chest

