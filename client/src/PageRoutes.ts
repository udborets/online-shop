import Admin from './pages/AdminPage';
import BasketPage from './pages/BasketPage';
import DevicePage from './pages/DevicePage';
import ShopPage from './pages/ShopPage';
import AuthPage from './pages/AuthPage';
import { RouteConsts } from './utils/consts';

export const authRoutes = [
  {
    path: RouteConsts.ADMIN,
    Component: Admin,
  },
  {
    path: RouteConsts.BASKET,
    Component: BasketPage,
  },
]

export const publicRoutes = [
  {
    path: RouteConsts.SHOP,
    Component: ShopPage,
  },
  {
    path: RouteConsts.REGISTRATION,
    Component: AuthPage,
  },
  {
    path: RouteConsts.LOGIN,
    Component: AuthPage,
  },
  {
    path: RouteConsts.DEVICE + "/:id",
    Component: DevicePage,
  },
]