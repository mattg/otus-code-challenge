export const loadInitialData = data => ({
  type: 'LOAD_INITIAL_DATA',
  data
});

export const highlightItem = id => ({
  type: 'HIGHLIGHT_ITEM',
  id
});

export const selectItem = id => ({
  type: 'SELECT_ITEM',
  id
});

export const deselectItem = id => ({
  type: 'DESELECT_ITEM',
  id
});

export const updateTextInputValue = value => ({
  type: 'UPDATE_TEXT_INPUT_VALUE',
  value
});
