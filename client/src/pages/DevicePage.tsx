import BuyButton from './../components/BuyButton';
import "../styles/DevicePage.scss";
import '../components/RatingStars';
import RatingStars from './../components/RatingStars';
import { useDevice } from './../hooks/useDevice';
import { useLocation } from 'react-router-dom';

const DevicePage = () => {
  const description = [
    {id: 1, title: 'helloing 1', description: 'baba'},
    {id: 2, title: 'helloing 2', description: 'baba'},
    {id: 3, title: 'helloing 3', description: 'baba'},
    {id: 4, title: 'helloing 4', description: 'baba'},
  ]
  const path = useLocation().pathname.split('/'); //
  const deviceId = Number.parseInt(path[path.length - 1]); //
  const device = useDevice().getDeviceById(deviceId); //
  return (
    <div className='current-page device-page'>
      <div className="device-page__main">
        <div className="device-page__title">
          {device.name}
        </div>
        <img
          loading='lazy'
          className="device-page__img"
          src={device.img}
          alt=""
        />
      </div>
      <div className="device-page__column">
          <RatingStars rating={device.rating}/>
        <BuyButton />
      </div>
      <ul className='device-page__description'>
        {description.map((el) => (
        <li key={el.id}>
          {el.title} : {el.description}
        </li>))}
      </ul>
    </div>
  )
}

export default DevicePage