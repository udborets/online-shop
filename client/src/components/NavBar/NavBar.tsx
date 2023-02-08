import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteConsts } from '../../utils/consts';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <NavLink
        to={RouteConsts.SHOP}
        className='nav-bar__title'
      >
        Internet shop
      </NavLink>
      <ul className='nav-bar__list'>
        <li className='nav-bar__link'>Auth</li>
        <li className='nav-bar__link'>Basket</li>
        <li className='nav-bar__link'>Device</li>
        <li className='nav-bar__link'>Shop</li>
      </ul>
    </div>
  )
}

export default NavBar