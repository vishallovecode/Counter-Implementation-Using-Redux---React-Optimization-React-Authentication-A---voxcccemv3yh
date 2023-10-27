import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../actions/action';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div id='main'>
      <button onClick={() => dispatch(increment())}>+</button>
      <span data-testid='counter'>{counter}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
