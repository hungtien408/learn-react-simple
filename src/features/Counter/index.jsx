import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import styles from './styles.module.css';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 32,
    padding: '0 30px',
  },
});

function CounterFeature(props) {
  const classes = useStyles();
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
    <div className={styles.counter}>
      Counter: {counter}{' '}
      <div>
        <Button className={classes.root} onClick={handleInceaseClick}>
          Increase
        </Button>
        <Button className={classes.root} onClick={handleDeceaseClick}>
          Decrease
        </Button>
      </div>
    </div>
  );
}

export default CounterFeature;
