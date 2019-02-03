import { applyMiddleware, combineReducers, compose } from 'redux';
import { createStore } from 'react-hooks-global-state';

import logger from 'redux-logger';
import { reduxDevToolsExt } from 'react-hooks-global-state/src/devtools';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from './epics';
import { initialState, counterReducer } from './reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
});
const epicMiddleware = createEpicMiddleware();

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(epicMiddleware, logger), reduxDevToolsExt()),
);

epicMiddleware.run(rootEpic);
