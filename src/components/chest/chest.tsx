import { IProps } from '@/interfaces'
import { ChestImage } from './styles'
import useScreenSize from '@/hook/useScreenSize';
import { TILE_BIG_SIZE } from '@/settings/constants';

const Chest = (props: IProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isSmallScreen = useScreenSize()

  const bigScreen = {
    top: `${props.initialPosition.y * TILE_BIG_SIZE}px`,
    left:`${props.initialPosition.x * TILE_BIG_SIZE}px`,
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

