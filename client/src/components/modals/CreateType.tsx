import IModal from './../../models/IModal';
import '../../styles/Modal.scss';

const CreateType = ({active, setActive, children} : IModal) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className='modal__container' onClick={e => e.stopPropagation()}>
          {children}
      </div>
    </div>
  )
}

export default CreateType