import { combineReducers } from 'redux';
import notes from './noteReduce';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  notes,
  routing: routerReducer
});

export default rootReducer;
