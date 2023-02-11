import { useSelector } from 'react-redux';
import { IStore } from '../models/IStore';
import { useDevice } from '../hooks/useDevice';
import { IBrandProps } from '../models/IBrandProps';

const TypeBarType = ({ children, brand }: IBrandProps) => {
  const { selectBrand } = useDevice();
  const devices = useSelector((state: IStore) => state.device);

  return (
    <div
      className={brand.id === devices.selectedType.id ? 'type-bar__type selected-type' : 'type-bar__type'}
      onClick={() => selectBrand(brand)}
    >
      {children}
    </div>
  )
}

export default TypeBarType