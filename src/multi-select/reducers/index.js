import { combineReducers } from 'redux';
import selectableItems from './selectable-items';
import textInputValue from './text-input-value';

export default combineReducers({
  selectableItems,
  textInputValue
});
