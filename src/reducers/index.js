import { combineReducers } from 'redux';
import cardDataReducer from './cardDataReducer';

/**
 * root reducer - contains all the reducers
 *
 * @param  {object} - reducers
 *
 */
const reducers = combineReducers({
  card: cardDataReducer
});

export default reducers;