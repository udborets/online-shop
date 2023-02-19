import Brand from './Brand';
import '../styles/BrandBar.scss';
import { useEffect } from 'react';
import { useDevice } from '../hooks/useDevice';

const BrandBar = () => {
  const { device, updateBrands } = useDevice()
  useEffect(() => {
    updateBrands();
  }, [device.brands.length])
  if (!device.brands.length) return <div>There are no brands yet</div>
  return (
    <div className='brand-bar'>
      <div className="brand-bar__container">
        {
          device.brands.map((brand) => (
            <Brand
              key={"brand" + brand.id}
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