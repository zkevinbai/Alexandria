import { combineReducers } from 'redux';
import searchQueryReducer from './searchQueryReducer';
import searchResultsReducer from './searchResultsReducer';


export default combineReducers({
  query: searchQueryReducer,
  results: searchResultsReducer
});