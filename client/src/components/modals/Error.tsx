import '../../styles/Error.scss';
import IError from './../../models/IError';

const Error = ({ active, setActive, error }: IError) => {
  return (
    <div className={active ? 'error active' : 'error'} onClick={() => setActive(false)}>
      <div className='error__container' onClick={e => e.stopPropagation()}>
        <div className="error-msg">
          <i className="fa fa-times-circle" onClick={() => setActive(false)}></i>
          <span>{error}</span>
        </div>
      </div>
    </div>
  )
}

export default Error

