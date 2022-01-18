import logo from './logo.svg';
import './App.css';
//to get the store into app.js
import { useSelector } from 'react-redux';

function App() {
  // use selector is a hook that gives us
  // access to the redux store
  const count = useSelector(store => store.count);
  return (
    <div className="App">
      <h3>count is {count}</h3>
    </div>
  );
}

export default App;
