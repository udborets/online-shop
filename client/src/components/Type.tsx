import { ITypeProps } from '../models/ITypeProps';
import '../styles/Type.scss';
import { useType } from '../hooks/useType';

const Type = ({ children, type }: ITypeProps) => {
  const { selectType, selectedType } = useType();
  return (
    <div
      className={type.id === selectedType.id ? 'type-bar__type selected-type' : 'type-bar__type'}
      onClick={() => selectType(type)}
    >
      {children}
    </div>
  )
}

export default Type