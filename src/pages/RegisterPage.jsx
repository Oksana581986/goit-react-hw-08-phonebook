import React from 'react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';

 const RegisterPage = () => {
  return (
    <div>
    <SectionTitle title="Registration" />
    <RegisterForm />
  </div>
  )
}
export default RegisterPage;
