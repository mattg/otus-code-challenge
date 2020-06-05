import { connect } from 'react-redux';
import { getSelectedItems, getUnselectedItems } from '../selectors';
import {
  deselectItem,
  highlightItem,
  selectItem,
  updateTextInputValue
} from '../actions';
import Main from '../components/main';

const mapStateToProps = state => ({
  selectedItems: getSelectedItems(state),
  unselectedItems: getUnselectedItems(state),
  textInputValue: state.textInputValue
});

const mapDispatchToProps = dispatch => ({
  deselectItem: id => dispatch(deselectItem(id)),
  highlightItem: id => dispatch(highlightItem(id)),
  selectItem: id => dispatch(selectItem(id)),
  updateTextInputValue: value => dispatch(updateTextInputValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
