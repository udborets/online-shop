import IModal from './../../models/IModal';
import '../../styles/Modal.scss';
import { useState } from 'react';
import { createType } from './../../http/deviceApi';
import { useType } from '../../hooks/useType';

const CreateType = ({ active, setActive }: IModal) => {
  const [value, setValue] = useState('');
  const { updateTypes } = useType();
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