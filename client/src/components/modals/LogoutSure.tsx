import IModal from '../../models/IModal';
import '../../styles/Modal.scss';
import '../../styles/LogoutSure.scss';
import { useUser } from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const LogoutSure = ({ active, setActive }: IModal) => {
  const navigate = useNavigate();
  const { toggleIsShowingLogout, toggleUserAuth, changeUser } = useUser();
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className='modal__container' onClick={e => e.stopPropagation()}>
        Are You sure you want to log out?
        <div className="modal__yes-no">
          <button
            className="modal__btn modal__yes-btn"
            onClick={() => {
              changeUser({});
              toggleUserAuth();
              toggleIsShowingLogout();
              navigate('/');
            }}>
            Yes
          </button>
          <button
            className="modal__btn modal__no-btn"
            onClick={toggleIsShowingLogout}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutSure