import Brand from './Brand';
import '../styles/BrandBar.scss';
import { useBrand } from '../hooks/useBrand';

const BrandBar = () => {
  const { brands } = useBrand()
  if (!brands.length) return <div>There are no brands yet</div>
  return (
    <div className='brand-bar'>
      <div className="brand-bar__container">
        {
          brands.map((brand) => (
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