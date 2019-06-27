import React from 'react';
import { Provider } from 'react-redux';
import Router from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store} className="App">
      <Router />
    </Provider>
  );
}

export default App;
