import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;

        dispatch(
          logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
        form.reset();
      };
    
      return (
        <form className={css.logForm} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.logLabel}>
            Email
            <input className={css.logInput} type="email" name="email" />
          </label>
          <label className={css.logLabel}>
            Password
            <input className={css.logInput} type="password" name="password" />
          </label>
          <button className={css.btnLog} type="submit">Log In</button>
        </form>
      );
    };
    