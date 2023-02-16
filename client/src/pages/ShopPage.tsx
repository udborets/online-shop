import TypeBar from '../components/TypeBar';
import DeviceList from '../components/DeviceList';
import BrandBar from './../components/BrandBar';
import '../styles/ShopPage.scss';
import { useEffect } from 'react';
import { useDevice } from './../hooks/useDevice';
import { useSelector } from 'react-redux';
import { IStore } from './../models/IStore';

const ShopPage = () => {
  const brand = useDevice();
  const device = useSelector((state: IStore) => state.device);

  useEffect(() => {
    brand.selectBrand(device.brands[0]);
    brand.selectType(device.types[0])
  }, []);

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