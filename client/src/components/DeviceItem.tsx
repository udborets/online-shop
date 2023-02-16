import { IDeviceProps } from '../models/IDeviceProps';
import star from '../assets/star.png';
import { useNavigate } from "react-router-dom";
import { RouteConsts } from '../utils/consts';
import '../styles/DeviceItem.scss';

const DeviceComponent = ({ device }: IDeviceProps) => {
  const navigate = useNavigate();
  return (
    <div className='device'>
      <div className='device__bg'></div>
      <div className='device__container'>
        <img
          onClick={() => navigate(RouteConsts.DEVICE + '/' + device.id)}
          className='device__img'
          src={device.img}
          alt="Can't load image" />
        <div className="device__row">
          <div className='device__name'>
            {device.name}
          </div>
          <div className="device__rating">
            <span className='rating__rate'>{device.rating}</span>
            <img className='rating__img' src={star} alt="stars" />
          </div>
        </div>
        <div className='device__price'>
          {device.price + "$"}
        </div>
      </div>
    </div>
  )
}

export default DeviceComponent