import { NavLink } from 'react-router-dom';
import { RouteConsts } from '../utils/consts';
import { useUser } from '../hooks/useUser';
import '../styles/NavBar.scss';

const NavBar = () => {
  const { user, toggleIsShowingLogout } = useUser();
  return (
    <div className='nav-bar'>
      <div className="nav-bar__container">
        <NavLink to={RouteConsts.SHOP} className='nav-bar__title'>
          Online shop
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
                <NavLink
                  className='nav-bar__link'
                  to={RouteConsts.SHOP}
                >
                  Shop
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

        <div className='theme-chooser'>
          <input defaultChecked className='pink' type="radio" name="theme" />
          <input className='peach' type="radio" name="theme" />
          <input className='dark' type="radio" name="theme" />
        </div>

        {
          user.isAuth
            ?
            <div
              className='auth-link'>
              <span
                className='auth-link__username'
              >
                {user.user.email?.split('@')[0]}
              </span>
              <button
                onClick={() => toggleIsShowingLogout(true)}
                className='auth-link__button'
              >
                Log out
              </button>
            </div>
            :
            <NavLink
              className='auth-link__button'
              to={RouteConsts.LOGIN}
            >
              Log in
            </NavLink>
        }
      </div>
    </div>
  )
}

export default NavBar