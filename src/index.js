import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//how to add redux:
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

// reducer!
// this will be a click counter
// this replaces
//    const [count, setCount] = useState(5)
const count = () => {
  // whatever we return from the reducer:
  // is the value of that state (in this case, count)
  return 5;
}

// create global redux store
// aka "global state"
// and store all the reducers inside of here
const store = createStore(
  // store === { count: 5 }
  combineReducers({
    count: count,
  })
);





ReactDOM.render(
  <React.StrictMode>
    {/* wrap App in Provider and give Provider access to store*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
