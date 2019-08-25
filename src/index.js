import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Calculator from './Calculator.jsx';

const reducer = ( data = { storedNumber: '' } , action ) => {
  console.log(action, 'action')
  if ( data.storedNumber && action.value && action.type === 'EQUALS' ) {

    switch( data.operator ) {
      case '+' :
        data.storedNumber = Number( data.storedNumber + action.value );
        console.log(Number( data.storedNumber + action.value ))
        return data
        break;

      case '-' :
        data.storedNumber -= action.value;
        console.log(data.storedNumber)
        return data;
        break;

        default:
        return data;
    }
  } else if ( action.type === 'RESET') {

    data.storedNumber = '';
    return data;
    
  } else if ( action.type === 'SET_NUMBER' ) {

    data.storedNumber = action.value;
    data.operator = action.operator
  
    return data;

  } else {

    return data;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={ store }>
      <Calculator />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))