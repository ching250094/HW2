import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Calculator from './Calculator.jsx';
import reducer from './reducer';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={ store }>
      <Calculator />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))