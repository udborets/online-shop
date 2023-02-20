import Type from './Type';
import '../styles/TypeBar.scss';
import { useDevice } from '../hooks/useDevice';

const TypeBar = () => {
  const { device } = useDevice()
  if (!device.types.length) return <div>There are no types yet</div>
  return (
    <div className='type-bar'>
      <div className="type-bar__container">
        {
          device.types.map((type) => (
            <Type
              key={'type' + type.id}
              type={type}
            >
              {type.name}
            </Type>
          ))
        }
      </div>
    </div>
  )
}

export default TypeBar