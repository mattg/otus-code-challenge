import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { loadInitialData } from './actions';
import Main from './containers/main';

const store = createStore(rootReducer, composeWithDevTools());

function MultiSelect({ data, fieldName, label }) {
  store.dispatch(loadInitialData(data));

  return (
    <Provider store={store}>
      <Main fieldName={fieldName} label={label} />
    </Provider>
  );
}

MultiSelect.propTypes = {
  data: PropTypes.object.isRequired,
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default MultiSelect;
