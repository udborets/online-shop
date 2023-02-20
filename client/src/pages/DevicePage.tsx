import BuyButton from '../components/ui/BuyButton';
import "../styles/DevicePage.scss";
import '../components/RatingStars';
import RatingStars from './../components/RatingStars';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchDevice } from './../http/deviceApi';
import { useParams } from 'react-router-dom';
import { IDevice } from '../models/IDevice';
import { useState, useEffect } from 'react';
import { RouteConsts } from '../utils/consts';
import { setSelectedBrand, setSelectedType } from '../store/deviceSlice';

const DevicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  if (id === undefined) {
    navigate(RouteConsts.SHOP);
  }
  const [device, setDevice] = useState<IDevice>({
    id: 0,
    name: '',
    price: 0,
    rating: 0,
    img: '',
    info: [{ id: 0, title: '', description: '' }],
    typeId: 0,
    brandId: 0,
  });

  useEffect(() => {
    fetchDevice(id ?? "")
      .then((fetchedDevice) => {
        setDevice(fetchedDevice);
      })
    setSelectedBrand({ id: -1, name: 'All' });
    setSelectedType({ id: -1, name: 'All' });
  }, [])
  return (
    <div className='current-page device-page'>
      <div className="device-page__main">
        <div className="device-page__title">
          {device && device.name}
        </div>
        <img
          loading='lazy'
          className="device-page__img"
          src={device && import.meta.env.VITE_REACT_APP_API_URL + device.img}
          alt=""
        />
      </div>
      <div className="device-page__column">
        <RatingStars rating={device?.rating ?? 0} />
        <BuyButton />
      </div>
      <ul className='device-page__description'>
        {device.info.map((el) => (
          <li key={el.id}>
            {el.title} : {el.description}
          </li>))}
      </ul>
    </div>
  )
}

export default DevicePage