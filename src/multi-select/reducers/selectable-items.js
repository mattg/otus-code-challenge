const selectableItems = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_INITIAL_DATA':
      const initialState = [];
      for (let [type, items] of Object.entries(action.data)) {
        items.forEach(item => {
          const { avatar_attachment_id, id, name, title } = item;
          initialState.push({
            id: initialState.length,
            originalId: id,
            displayName: name || title, 
            image: avatar_attachment_id,
            type,
            highlighted: false,
            selected: false
          });
        });
      }
      return initialState;
    case 'HIGHLIGHT_ITEM':
      return state.map(item => {
        if (item.id !== parseInt(action.id)) {
          return { ...item, highlighted: false };
        }
        return { ...item, highlighted: true };
      });
    case 'SELECT_ITEM':
      return state.map(item => {
        if (item.id !== parseInt(action.id)) {
          return { ...item, highlighted: false };
        }
        return { ...item, highlighted: false, selected: Date.now() }
      });
    case 'DESELECT_ITEM':
      return state.map(item => {
        if (item.id !== parseInt(action.id)) {
          return item;
        }
        return { ...item, selected: false }
      });
    default:
      return state;
  }
};

export default selectableItems;
