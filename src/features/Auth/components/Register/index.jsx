import React from 'react';
import RegisterFrom from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
  const handleSubmit = (values) => {
    console.log('Submit Form: ', values);
  };
  return (
    <div>
      <RegisterFrom onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
