import { useSelector } from 'react-redux';
import { IStore } from '../models/IStore';
import { useDevice } from '../hooks/useDevice';
import { IBrandProps } from '../models/IBrandProps';
import '../styles/Brand.scss'

const TypeBarType = ({ children, brand }: IBrandProps) => {
  const { selectBrand } = useDevice();
  const devices = useSelector((state: IStore) => state.device);

  return (
    <div
      className={brand.id === devices.selectedBrand.id ? 'brand-bar__brand selected-brand' : 'brand-bar__brand'}
      onClick={() => selectBrand(brand)}
    >
      {children}
    </div>
  )
}

export default TypeBarType