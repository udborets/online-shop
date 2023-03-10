import { NavLink } from 'react-router-dom';
import { RouteConsts } from '../utils/consts';
import { useUser } from '../hooks/useUser';
import '../styles/NavBar.scss';
import { useLogout } from '../hooks/useLogout';

const NavBar = () => {
  const { isAuth, user } = useUser();
  const { toggleIsShowingLogout } = useLogout();
  return (
    <div className='nav-bar'>
      <div className="nav-bar__container">
        <NavLink to={RouteConsts.SHOP} className='nav-bar__title'>
          Online shop
        </NavLink>
        <div className="nav-bar__links">
          {
            isAuth
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
                <NavLink
                  className='nav-bar__link'
                  to={RouteConsts.BASKET}
                >
                  Basket
                </NavLink>
              </>
          }
        </div>

        <div className='theme-chooser'>
          <input
            defaultChecked={localStorage.getItem("color") === "pink"}
            onClick={() => localStorage.setItem("color", "pink")}
            className='pink'
            type="radio"
            name="theme" />
          <input
            defaultChecked={localStorage.getItem("color") === "peach"}
            onClick={() => localStorage.setItem("color", "peach")}
            className='peach'
            type="radio"
            name="theme" />
          <input
            defaultChecked={localStorage.getItem("color") === "dark"}
            onClick={() => localStorage.setItem("color", "dark")}
            className='dark'
            type="radio"
            name="theme" />
        </div>

        {
          isAuth
            ?
            <div
              className='auth-link'>
              <span
                className='auth-link__username'
              >
                {user.email?.split('@')[0]}
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