import { useSelector } from 'react-redux/es/exports';
import { IStore } from '../models/IStore';
import Brand from './Brand';
import '../styles/BrandBar.scss';

const BrandBar = () => {
  const brands = useSelector((state: IStore) => state.device.brands);
  return (
    <div className='brand-bar'>
      <div className="brand-bar__container">
        {
          brands.map((brand) => (
            <Brand
              key={brand.id}
              brand={brand}
            >
              {brand.name}
            </Brand>
          ))
        }
      </div>
    </div>
  )
}

export default BrandBar