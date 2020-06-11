const textInputValue = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TEXT_INPUT_VALUE':
      return action.value;
    default:
      return state;
  }
};

export default textInputValue;
