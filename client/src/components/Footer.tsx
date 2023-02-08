import React, { useCallback } from 'react'
import '../styles/Footer.scss';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import IUserState from '../models/IUserState';
import { setIsAuth } from '../store/userSlice';
import AuthButton from './AuthButton';


const Footer = () => {

  return (
    <div className='footer'>
      <div className="footer__container">
        <span className="footer__title">
          Footer
        </span>
        <AuthButton />
      </div>
    </div>
  )
}

export default Footer