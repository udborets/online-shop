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
      <div className="nav-bar__container">
        <NavLink to={RouteConsts.SHOP} className='nav-bar__title'>
          Internet shop
        </NavLink>
        <div className="nav-bar__links">
          {
            user.isAuth
              ?
              <>
                <NavLink
                  className='nav-bar__link'
                  to={RouteConsts.ADMIN}
                >
                  Admin panel
                </NavLink>
                <NavLink
                  className='nav-bar__link'
                  to={RouteConsts.BASKET}
                >
                  Basket
                </NavLink>
              </>
              :
              <>
                <NavLink
                  className='nav-bar__link'
                  to={RouteConsts.SHOP}
                >
                  Shop
                </NavLink>
              </>
          }
        </div>
        {
          user.isAuth
            ?
            <NavLink
              className='nav-bar__link'
              to={RouteConsts.REGISTRATION}
            >
              Log out
            </NavLink>
            :
            <NavLink
              className='nav-bar__link auth'
              to={RouteConsts.REGISTRATION}
            >
              Log in
            </NavLink>
        }
      </div>
    </div>
  )
}

export default NavBar