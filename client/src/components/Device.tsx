import { IDeviceProps } from '../models/IDeviceProps';
import '../styles/DeviceComponent.scss'
import star from '../static/star.png'

const DeviceComponent = ({ device }: IDeviceProps) => {
  return (
    <div className='device'>
      <div className='device__container'>
        <img
          className='device__img'
          src={device.img}
          alt="Can't load image" />
        <div className="device__row">
          <div className='device__name'>
            {device.name}
          </div>
          <div className='device__rating'>
            <img className='rating__img' src={star} alt="w" />
            <span className='rating__rate'>{device.rating}</span>
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