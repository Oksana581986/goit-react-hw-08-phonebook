import React from 'react';
import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppHeader.module.css';

export const AppHeader = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    return (
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    );
  };