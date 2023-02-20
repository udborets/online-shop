import IModal from './../../models/IModal';
import '../../styles/Modal.scss';
import { useState } from 'react';
import { createType } from './../../http/deviceApi';
import { useDevice } from '../../hooks/useDevice';

const CreateType = ({ active, setActive }: IModal) => {
  const [value, setValue] = useState('');
  const { updateTypes } = useDevice();
  const addType = () => {
    createType(value)
      .then(() => {
        setValue('');
      })
    updateTypes();
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
          onClick={() => addType()}
        >
          Add type
        </button>
      </div>
    </div>
  )
}

export default CreateType