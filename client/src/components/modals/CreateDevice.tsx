import IModal from './../../models/IModal';
import '../../styles/Modal.scss';
import { useDevice } from './../../hooks/useDevice';
import { useState } from 'react';
import IDeviceInfo from './../../models/IDeviceInfo';
import { createDevice } from './../../http/deviceApi';

const CreateDevice = ({ active, setActive }: IModal) => {
  const device = useDevice();
  const [info, setInfo] = useState<IDeviceInfo[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(new Blob);
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", id: Date.now() * Math.random() }])
  }
  const changeType = (e: React.SetStateAction<any>) => {
    setType(e.target.value);
  }
  const changeBrand = (e: React.SetStateAction<any>) => {
    setBrand(e.target.value);
  }
  const deleteInfo = (id: number) => {
    setInfo(info.filter((i: any) => i.id !== id));
  }
  const selectFile = (e: React.SetStateAction<any>) => {
    setFile(e.target.files[0])
  }
  const changeInfo = (key: string, value: string, id: number) => {
    setInfo(info.map(i => i.id === id ? { ...i, [key]: value } : i))
  }
  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file, file.name); // THERE IS THE PROBLEM
    formData.append('brandId', `${device.device.brands.filter(i => { console.log(i.name); return i.name === brand })[0].id}`);
    formData.append('typeId', `${device.device.types.filter(i => i.name === type)[0].id}`);
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(data => {
      setInfo([]);
      setPrice(0);
      setName('');
      setBrand('');
      setType('');
      setFile(new Blob);
    })
  }
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className='modal__container' onClick={e => e.stopPropagation()}>
        <select value={brand} onChange={changeBrand}>
          <option value="">--select a brand--</option>
          {device.device.brands.length && device.device.brands.map(brand => (
            <option
              value={brand.name}
              key={"brand" + brand.id}
            >
              {brand.name}
            </option>
          )
          )}
        </select>
        <select value={type} onChange={changeType}>
          <option>--select a type--</option>
          {device.device.types.length && device.device.types.map(type => (
            <option
              value={type.name}
              key={"type" + type.id}
            >
              {type.name}
            </option>
          )
          )}
        </select>
        <input
          placeholder='Enter device name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" />
        <input
          placeholder='Enter device price'
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          type="number" />
        <div className="modal__file-choose">
          <span>Choose device image</span>
          <input type="file" onChange={selectFile} />
        </div>
        <button onClick={addInfo}>
          add info
        </button>
        {info.map((i: IDeviceInfo) => {
          return (
            <div key={i.id}>
              <input
                placeholder='Enter prop name'
                value={i.title}
                onChange={(e) => changeInfo('title', e.target.value, i.id)}
              />
              <input
                placeholder='Enter prop description'
                value={i.description}
                onChange={(e) => changeInfo('description', e.target.value, i.id)}
              />
              <button onClick={() => deleteInfo(i.id)}> delete prop</button>
            </div>
          )
        })}
        <button
          onClick={() => addDevice()}
        >
          Add device
        </button>
      </div>
    </div>
  )
}

export default CreateDevice
