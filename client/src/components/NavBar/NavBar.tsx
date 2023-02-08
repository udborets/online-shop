import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteConsts } from '../../utils/consts';
import './NavBar.scss';
import { useSelector } from 'react-redux/es/exports';
import IUserState from './../../models/IUserState';

const NavBar = () => {
  const user = useSelector((state: IUserState) => state.user);
  return (
    <div className='nav-bar'>
      <NavLink
        to={RouteConsts.SHOP}
        className='nav-bar__title'
      >
        Internet shop
      </NavLink>
      <ul className='nav-bar__list'>
        {
          user.isAuth
            ?
            <>
              <li className='nav-bar__link'>Basket</li>
              <li className='nav-bar__link'>Log out</li>
              <li className='nav-bar__link'>Shop</li>
            </>
            :
            <>
              <li className='nav-bar__link'>Device</li>
              <li className='nav-bar__link'>Shop</li>
            </>
        }
      </ul>
      {
        user.isAuth
          ?
          <li className='nav-bar__link'>Log in</li>
          : 
          <li className='nav-bar__link'>Log out</li>
      }
    </div>
  )
}

export default NavBar