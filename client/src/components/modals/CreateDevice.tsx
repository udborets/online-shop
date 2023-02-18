import IModal from './../../models/IModal';
import '../../styles/Modal.scss';
import { useDevice } from './../../hooks/useDevice';
import { useState } from 'react';

const CreateDevice = ({ active, setActive }: IModal) => {
  const device = useDevice();
  const [info, setInfo] = useState<any>([]);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", id: Date.now() * Math.random() }])
  }
  const deleteInfo = (id: number) => {
    setInfo(info.filter((i: any) => i.id !== id))
  }
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className='modal__container' onClick={e => e.stopPropagation()}>
        <select>
          <option value="">--select a brand--</option>
          {device.device.brands.map(brand => {
            if (brand.id !== -1)
              return (
                <option value={brand.name} key={"brand " + brand.id}>{brand.name}</option>
              )
          })}
        </select>
        <select>
          <option>--select a type--</option>
          {device.device.types.map(type => {
            if (type.id !== -1)
              return (
                <option value={type.name} key={"brand " + type.id}>{type.name}</option>
              )
          })}
        </select>
        <input placeholder='Enter device name' />
        <input placeholder='Enter device price' />
        <span>Enter device image</span>
        <input type="file" />
        <button onClick={addInfo}>
          add info
        </button>
        {info.map((i: any) => {
          return (
            <div key={i.id}>
              <input placeholder='Enter prop name' />
              <input placeholder='Enter prop description' />
              <button onClick={() => deleteInfo(i.id)}> delete prop</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CreateDevice