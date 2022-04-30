import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterFrom from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      // auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      // unwrapResult dùng để lấy kết quả từ action object nếu success(fulfilled) => return data, fail(rejected) => throw error
      const user = unwrapResult(resultAction);
      console.log('New user: ', user);
    } catch (error) {
      console.log('Failed to register: ', error);
    }
  };
  return (
    <div>
      <RegisterFrom onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
