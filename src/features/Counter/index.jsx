import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

function CounterFeature(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleInceaseClick = () => {
    const action = increase();
    console.log(action);
    dispatch(action);
  };

  const handleDeceaseClick = () => {
    const action = decrease();
    console.log(action);
    dispatch(action);
  };

  return (
    <div>
      Counter: {counter}{' '}
      <div>
        <button onClick={handleInceaseClick}>Increase</button>
        <button onClick={handleDeceaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
