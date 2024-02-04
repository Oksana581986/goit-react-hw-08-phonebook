import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  const location = useLocation();
  const  isLoggedIn  = useSelector(selectIsLoggedIn);
  return (
    <nav>
    <NavLink
        className={location.pathname === '/' ? css.active : css.link} to="/">
      Home
    </NavLink>
    {isLoggedIn && (
       <NavLink
       className={location.pathname === '/contacts' ? css.active : css.link} to="/contacts">
        Contacts
      </NavLink>
    )}
  </nav>
);
};
