import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';


export const RegisterForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = event => {
      event.preventDefault();
      const form = event.currentTarget;
      console.log(event);
      console.log(form.elements.name.value);
      console.log(form.elements.email.value);
      console.log(form.elements.password.value);
      
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    };
  
    return (
      <form className={css.regForm} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input className={css.regInput} type="text" name="name" minLength={3} required/>
        </label>
        <label className={css.label}>
          Email
          <input className={css.regInput} type="email" name="email" required/>
        </label>
        <label className={css.label}>
          Password
          <input className={css.regInput} type="password" name="password" minLength={7} required/>
        </label>
        <button className={css.regBtn} type="submit">Register</button>
      </form>
    );
  };
  