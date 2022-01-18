import logo from './logo.svg';
import './App.css';
//to get the store into app.js
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // gain access ot the dispatch function
  const dispatch = useDispatch();

  // use selector is a hook that gives us
  // access to the redux store
  const count = useSelector(store => store.count);

  const onIncrease = () => {
    // make an announcement:
    // "The count shall be increased!"
    // this will call the reducer function
    dispatch({
      // The type indicates our intention
      // it can be any type of string you want
      // UPPER_SNAKE_CASE means its important, or its a thing you want to happen
      type: 'INCREASE_COUNT'
    })
  };
  const onDecrease = () => {
    // make an announcement:
    // "The count shall be increased!"
    // this will call the reducer function
    dispatch({
      // The type indicates our intention
      // it can be any type of string you want
      // UPPER_SNAKE_CASE means its important, or its a thing you want to happen
      type: 'DECREASE_COUNT'
    })
  };
  return (
    <div className="App">
      <h3>count is {count}</h3>
      <button onClick={onIncrease}>⬆️</button>
      <button onClick={onDecrease}>⬇️</button>
    </div>
  );
}

export default App;
