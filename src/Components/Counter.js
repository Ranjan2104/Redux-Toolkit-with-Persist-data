import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterDecrement, counterIncrement } from '../Store/Slices/CounterSlice';


const Counter = () => {
  const dispatch = useDispatch();
  const counterData = useSelector((state) => state.counterSlice.count);
  return (
    <div className='App-header'>
        <h1>Count - {counterData}</h1>
        <div style={{ display: 'flex', gap: '50px', justifyContent:'center' }}>
            <button className='btn' onClick={() => dispatch(counterIncrement())}>Increase</button>
            <button className='btn' onClick={() => dispatch(counterDecrement())}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter