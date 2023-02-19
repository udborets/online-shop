import Type from './Type';
import '../styles/TypeBar.scss';
import { useDevice } from '../hooks/useDevice';
import { useEffect } from 'react';

const TypeBar = () => {
  const { device, updateTypes } = useDevice()
  useEffect(() => {
    updateTypes();
  }, [device.types.length])
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