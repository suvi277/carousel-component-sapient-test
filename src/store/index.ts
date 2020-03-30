import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from '../reducers';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
