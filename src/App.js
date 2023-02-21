import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux';
import Counter from './Counter';


const initialState ={
  count:0
};


function reducer( state = initialState,action){
  switch(action.type){
    case 'INCREMENT':
      return { count: state.count + 1};
    case 'DECREASE':
      return { count: state.count - 1};
    case 'IncrementBy5':
      return { count: state.count +5};
    case 'Decremenenby5':
      return { count: state.count -5};
    default:
      return state;
  }
}


const store = createStore( reducer);
 

function App() {
  return (
    <Provider store ={store}>
      <Counter/>
    </Provider>

  );
}

export default App;
