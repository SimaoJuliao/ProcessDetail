import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { processReducer } from './process/reducers';
import { controlsReducer } from './controls/reducers';
import { logsReducer } from './log/reducers';
import { transferLogReducer } from './transferLog/reducers';

const appReducers = combineReducers({
  controls: controlsReducer,
  process: processReducer,
  transferLogs: transferLogReducer,
  logs: logsReducer,
});

export const store = createStore(appReducers, composeWithDevTools());
