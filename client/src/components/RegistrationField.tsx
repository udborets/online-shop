import { NavLink, useLocation } from 'react-router-dom';
import '../styles/RegistrationFieldComponent.scss'
import { RouteConsts } from '../utils/consts';
import RegistrationInput from './RegistrationInput';

const RegistrationField = () => {
  const location = useLocation();
  const isLogin = location.pathname === RouteConsts.LOGIN;
  console.log(location)
  return (
    <div className='registration'>
      <div className="registration__container">
        <span className='registration__title'>
          {isLogin ? "Authorization" : "Registration"}
        </span>
        <form className='registration__form' action="">
          <RegistrationInput
            type={'text'}
            text={'Введите ваш email...'}
          />
          <RegistrationInput
            type={'password'}
            text={'Введите ваш пароль...'}
          />
        </form>
        <div className="registration__under-input">
          <span>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </span>
          {
            isLogin ?
              <NavLink to={RouteConsts.REGISTRATION}>
                Create one!
              </NavLink>
              :
              <NavLink to={RouteConsts.LOGIN}>
                Log in
              </NavLink>
          }
          <button>
            {isLogin ? "Login" : "Create"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegistrationField