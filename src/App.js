import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterState';

const App = () => {
	const { count } = useSelector(state => state.counter);
	const dispatch = useDispatch();
	return (
		<div>
			<div>value: {count}</div>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
};

export default App;