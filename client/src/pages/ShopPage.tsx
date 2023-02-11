import TypeBar from '../components/TypeBar';
import '../styles/ShopPage.scss';
import DeviceComponent from '../components/Device';
import { useSelector } from 'react-redux/es/exports';
import { IStore } from './../models/IStore';
import DeviceList from '../components/DeviceList';
import BrandBar from './../components/BrandBar';


const ShopPage = () => {
  const device = useSelector((state: IStore) => state.device)
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