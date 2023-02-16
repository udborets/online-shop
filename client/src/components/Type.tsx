import { useSelector } from 'react-redux';
import { IStore } from '../models/IStore';
import { ITypeProps } from '../models/ITypeProps';
import { useDevice } from '../hooks/useDevice';
import '../styles/Type.scss';

const Type = ({ children, type }: ITypeProps) => {
  const { selectType } = useDevice();
  const devices = useSelector((state: IStore) => state.device);
  return (
    <div
      className={type.id === devices.selectedType.id ? 'type-bar__type selected-type' : 'type-bar__type'}
      onClick={() => selectType(type)}
    >
      {children}
    </div>
  )
}

export default Type