import Brand from './Brand';
import '../styles/BrandBar.scss';
import { useDevice } from '../hooks/useDevice';

const BrandBar = () => {
  const { device } = useDevice()
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