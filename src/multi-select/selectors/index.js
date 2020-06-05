import { createSelector } from 'reselect';

const getSelectableItems = state => state.selectableItems;
const getTextInputValue = state => state.textInputValue;

export const getSelectedItems = createSelector(
  [getSelectableItems],
  selectableItems => {
    return selectableItems
      .filter(i => i.selected)
      .sort((a, b) => (a.selected > b.selected) ? 1 : -1);
  }
);

export const getUnselectedItems = createSelector(
  [getSelectableItems, getTextInputValue],
  (selectableItems, textInputValue) => {
    return selectableItems.filter(i => {
      const re = new RegExp(textInputValue, 'i');
      return !i.selected && i.displayName.match(re)
    })
  }
);
