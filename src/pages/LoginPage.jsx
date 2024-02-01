import React from 'react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';

const LoginPage= () => {
  return (
    <div>
       <SectionTitle title="Log In" />
        <LoginForm />
    </div>
  )
}
  export default LoginPage;