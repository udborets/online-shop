import { IBrandProps } from '../models/IBrandProps';
import '../styles/Brand.scss';
import { useBrand } from '../hooks/useBrand';

const Brand = ({ children, brand }: IBrandProps) => {
  const { selectBrand, selectedBrand } = useBrand();
  return (
    <div
      className={brand.id === selectedBrand.id ? 'brand-bar__brand selected-brand' : 'brand-bar__brand'}
      onClick={() => selectBrand(brand)}
    >
      {children}
    </div>
  )
}

export default Brand