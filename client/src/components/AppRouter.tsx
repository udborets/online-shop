import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { IRoute } from '../models/IRoute';
import { authRoutes, publicRoutes } from '../PageRoutes';
import { RouteConsts } from '../utils/consts';

const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      <Route path="*" element={<Navigate to={RouteConsts.SHOP}/>}/>
      {isAuth && authRoutes.map(({ path, Component }: IRoute) => (
        <Route key={path} element={<Component />} path={path} />
      ))}
      {publicRoutes.map(({ path, Component }: IRoute) => (
        <Route key={path} element={<Component />} path={path} />
      ))}
    </Routes>
  )
}

export default AppRouter