import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setIsAuth } from '../store/userSlice';
import { useUser } from '../hooks/useUser';
import IUserState from './../models/IUserState';

const AuthButton = () => {
  const {user, toggleUserAuth} = useUser()
  return (
    <button
      onClick={toggleUserAuth}
    >
      Now: {user.isAuth ? "auth" : "not auth"}
    </button>
  )
}

export default AuthButton