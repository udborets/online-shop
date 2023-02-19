import '../../styles/Error.scss';
import IError from './../../models/IError';

const Error = ({ active, setActive, errorMessage, setError }: IError) => {
  return (
    <div
      className={active ? 'error active' : 'error'}
      onClick={() => {
        setActive(false);
        setError(null)
      }}
    >
      <div className='error__container' onClick={e => e.stopPropagation()}>
        <div className="error-msg">
          <i
            className="fa fa-times-circle"
            onClick={() => {
              setActive(false);
              setError(null)
            }}
          ></i>
          <span>{errorMessage}</span>
        </div>
      </div>
    </div>
  )
}

export default Error

