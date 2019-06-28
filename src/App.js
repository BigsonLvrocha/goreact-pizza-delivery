import React from 'react';
import { Provider } from 'react-redux';
import Router from './routes';
import { Creators as SessionActions } from './store/ducks/session';
import store from './store';

store.dispatch(SessionActions.fetchLoginStorage());
function App() {
  return (
    <Provider store={store} className="App">
      <Router />
    </Provider>
  );
}

export default App;
