import IModal from '../../models/IModal';
import '../../styles/Modal.scss';
import '../../styles/LogoutSure.scss';
import { useUser } from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const LogoutSure = ({ active, setActive }: IModal) => {
  const navigate = useNavigate();
  const {toggleWannaLogout, toggleUserAuth, changeUser} = useUser();
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className='modal__container' onClick={e => e.stopPropagation()}>
        Are You sure you want to log out?
        <button onClick={() => {
          changeUser({});
          toggleUserAuth();
          toggleWannaLogout();
          navigate('/');
        }}>
          Yes
        </button>
        <button>
          No
        </button>
      </div>
    </div>
  )
}

export default LogoutSure