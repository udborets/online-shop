import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { IRoute } from '../models/IRoute';
import IUserState from '../models/IUserState';
import { authRoutes, publicRoutes } from '../PageRoutes';
import { setIsAuth } from '../store/userSlice';
import { RouteConsts } from '../utils/consts';

const AppRouter = () => {
  const user = useSelector((state: IUserState) => state.user);
  const dispatch = useDispatch();
  function toggleIsAuth() {
    dispatch(setIsAuth({isAuth: !user.isAuth}));
  }
  console.log(user)

  return (
    <Routes>
      <Route path="*" element={<Navigate to={RouteConsts.SHOP}/>}/>
      {user.isAuth && authRoutes.map(({ path, Component }: IRoute) => (
        <Route key={path} element={<Component />} path={path} />
      ))}
      {publicRoutes.map(({ path, Component }: IRoute) => (
        <Route key={path} element={<Component />} path={path} />
      ))}
    </Routes>
  )
}

export default AppRouter