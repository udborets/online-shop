import IModal from './../../models/IModal';
import '../../styles/Modal.scss';
import { useState } from 'react';
import { createBrand } from './../../http/deviceApi';
import { useDevice } from '../../hooks/useDevice';

const CreateBrand = ({ active, setActive }: IModal) => {
  const [value, setValue] = useState('');
  const { updateBrands } = useDevice();
  const addBrand = () => {
    createBrand(value)
      .then(() => {
        setValue('');
      })
    updateBrands();
  }
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className='modal__container' onClick={e => e.stopPropagation()}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => addBrand()}
        >
          Add brand
        </button>
      </div>
    </div>
  )
}

export default CreateBrand