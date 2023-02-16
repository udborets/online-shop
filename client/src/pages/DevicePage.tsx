import BuyButton from './../components/BuyButton';
import "../styles/DevicePage.scss";
import '../components/RatingStars';
import RatingStars from './../components/RatingStars';
import { useDevice } from './../hooks/useDevice';
import { useLocation } from 'react-router-dom';

const DevicePage = () => {
  const path = useLocation().pathname.split('/');
  const deviceId = Number.parseInt(path[path.length - 1]);
  const device = useDevice().getDeviceById(deviceId);
  return (
    <div className='current-page device-page'>
      <div className="device-page__main">
        <div className="device-page__title">
          {device.name}
        </div>
        <img
          className="device-page__img"
          src={device.img}
          alt=""
        />

      </div>
      <div className="device-page__column">
        <div className='device-page__rating'>
          <RatingStars rating={device.rating}/>
        </div>
        <BuyButton />
      </div>
    </div>
  )
}

export default DevicePage