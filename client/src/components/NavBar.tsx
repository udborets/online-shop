import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteConsts } from '../utils/consts';
import '../styles/NavBar.scss';
import { useSelector } from 'react-redux/es/exports';
import IUserState from '../models/IUserState';

const NavBar = () => {
  const user = useSelector((state: IUserState) => state.user);
  return (
    <div className='nav-bar'>
      <NavLink to={RouteConsts.SHOP} className='nav-bar__title'>
        Shop
      </NavLink>
    </div>
  )
}

export default NavBar