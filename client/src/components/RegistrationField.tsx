import { NavLink, useLocation } from 'react-router-dom';
import { RouteConsts } from '../utils/consts';
import RegistrationInput from './ui/RegistrationInput';
import '../styles/RegistrationField.scss';
import { login, registration } from '../http/userApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './../hooks/useUser';
import { AxiosError } from 'axios';
import Error from './modals/Error';


const RegistrationField = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === RouteConsts.LOGIN;
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toggleUserAuth, changeUser } = useUser();

  const authFn = async () => {
    let data;
    if (isLogin) {
      data = await login(email, password);
      if (data instanceof AxiosError) {
        setError(data.response?.data?.message);
        setIsError(true)
        return
      }
    }
    else {
      data = await registration(email, password);
      if (data instanceof AxiosError) {
        setError(data.response?.data?.message);
        setIsError(true)
        return
      }
    }
    setEmail('');
    setPassword('');
    toggleUserAuth();
    changeUser(data);
    navigate('/');
  }
  return (
    <div className='registration'>
      <Error active={isError} setActive={setIsError} error={error} />
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