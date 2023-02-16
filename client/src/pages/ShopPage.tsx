import TypeBar from '../components/TypeBar';
import DeviceList from '../components/DeviceList';
import BrandBar from './../components/BrandBar';
import '../styles/ShopPage.scss';

const ShopPage = () => {
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