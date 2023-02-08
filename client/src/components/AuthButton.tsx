import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setIsAuth } from '../store/userSlice';
import IUserState from './../models/IUserState';

const AuthButton = () => {
  const user = useSelector((state: IUserState) => state.user);
  const dispatch = useDispatch(); 
  function changeAuth() {
    dispatch(setIsAuth({isAuth: !user.isAuth}));
    console.log('helloing');
  }
  return (
    <button
      onClick={changeAuth}
    >
      change auth
    </button>
  )
}

export default AuthButton