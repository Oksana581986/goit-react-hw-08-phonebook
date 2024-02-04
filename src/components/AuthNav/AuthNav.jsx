import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const location = useLocation();

  return (
    <div>
      <NavLink className={location.pathname === '/register' ? css.active : css.link} to="/register">
        Register
      </NavLink>
      <NavLink
        className={location.pathname === '/login' ? css.active : css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};