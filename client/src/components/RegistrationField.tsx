import { NavLink, useLocation } from 'react-router-dom';
import { RouteConsts } from '../utils/consts';
import RegistrationInput from './ui/RegistrationInput';
import '../styles/RegistrationField.scss';
import { login, registration } from '../http/userApi';
import { useState } from 'react';

const RegistrationField = () => {
  const location = useLocation();
  const isLogin = location.pathname === RouteConsts.LOGIN;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authFn = async () => {
    if (isLogin) {
      const response = await login(email, password);
      console.log(response)
    }
    else {
      const response = await registration(email, password);
      console.log(response)
    }
  }
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
            value={email}
            setValue={setEmail}
            />
          <RegistrationInput
            type={'password'}
            text={'Введите ваш пароль...'}
            value={password}
            setValue={setPassword}
          />
        </form>
        <div className="registration__help">
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
          <button onClick={authFn}>
            {isLogin ? "Login!" : "Create!"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegistrationField