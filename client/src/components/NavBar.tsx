import { NavLink } from 'react-router-dom';
import { RouteConsts } from '../utils/consts';
import '../styles/NavBarComponent.scss';
import { useUser } from '../hooks/useUser';

const NavBar = () => {
  const { user, toggleUserAuth } = useUser();
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

            <button
              onClick={toggleUserAuth}
              className='nav-bar__link auth'
            >
              Log out
            </button>

            :
            <NavLink
              className='nav-bar__link auth'
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