import TypeBar from '../components/TypeBar';
import DeviceList from '../components/DeviceList';
import BrandBar from './../components/BrandBar';
import '../styles/ShopPage.scss';
import { useEffect } from 'react';
import { useDevice } from '../hooks/useDevice';
import { useBrand } from './../hooks/useBrand';
import { useType } from './../hooks/useType';

const ShopPage = () => {
  const { updateDevices } = useDevice();
  const { updateBrands } = useBrand();
  const { updateTypes } = useType();
  useEffect(() => {
    updateBrands();
    updateTypes();
    updateDevices();
  }, [])
  return (
    <div className='current-page shop-page'>
      <TypeBar />
      <div className="shop-page__column">
        <BrandBar />
        <DeviceList />
      </div>
    </div>
  )
}

export default ShopPage
