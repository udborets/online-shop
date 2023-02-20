import TypeBar from '../components/TypeBar';
import DeviceList from '../components/DeviceList';
import BrandBar from './../components/BrandBar';
import '../styles/ShopPage.scss';
import { useEffect } from 'react';
import { useDevice } from '../hooks/useDevice';

const ShopPage = () => {
  const {updateBrands, updateDevices, updateTypes} = useDevice();
  useEffect(() => {
    updateDevices();
    updateBrands();
    updateTypes();
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
