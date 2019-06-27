import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronReduxSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({
    host: '192.168.0.2',
  })
    .use(reactotronRedux())
    .use(reactotronReduxSaga())
    .connect();
  tron.clear();
  // eslint-disable-next-line no-console
  console.tron = tron;
}
