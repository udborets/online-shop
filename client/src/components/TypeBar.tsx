import Type from './Type';
import '../styles/TypeBar.scss';
import { useType } from '../hooks/useType';

const TypeBar = () => {
  const { types } = useType()
  if (!types.length) return <div>There are no types yet</div>
  return (
    <div className='type-bar'>
      <div className="type-bar__container">
        {
          types.map((type) => (
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