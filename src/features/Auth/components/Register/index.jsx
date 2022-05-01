import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterFrom from '../RegisterForm';
import PropTypes from 'prop-types';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { closeDialog } = props;

  const handleSubmit = async (values) => {
    try {
      // auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      // unwrapResult dùng để lấy kết quả từ action object nếu success(fulfilled) => return data, fail(rejected) => throw error
      const user = unwrapResult(resultAction);

      if (closeDialog) {
        closeDialog();
      }

      enqueueSnackbar(`Register ${user.username} successfully!!!`, { variant: 'success' });
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
