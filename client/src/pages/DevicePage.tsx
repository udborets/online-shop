import BuyButton from './../components/BuyButton';

const DevicePage = () => {
  const device = {
    id: 6,
    name: "Apple iphone 6",
    price: 25000,
    rating: 1,
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  };

  return (
    <div className='current-page device-page'>
      <div className="device-page__main">
        <div className="device-page__name">
          {device.name}
        </div>
        <img
          className="device-page__img"
          src={device.img}
          alt=""
        />

      </div>
      <div className="device-page__column">
        <BuyButton />
      </div>
    </div>
  )
}

export default DevicePage