import IModal from './../../models/IModal';
import '../../styles/Modal.scss';

const CreateBrand = ({ active, setActive }: IModal) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className='modal__container' onClick={e => e.stopPropagation()}>

      </div>
    </div>
  )
}

export default CreateBrand