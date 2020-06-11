import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SelectedItems from './selected-items';
import UnselectedItems from './unselected-items';

const Wrapper = styled.div`
  display: inline-block;
  max-width: 600px;
  position: relative;
`;

const InputBox = styled.div`
  border: 2px #eff1f2 solid;
  background: url(/img/search.png) no-repeat right 1rem bottom .6rem;
  background-size: 20px;
  display: inline-block;
  min-width: 400px;
  padding-left: .5rem;
  padding-right: 40px;
`;

const Input = styled.input`
  border: 0 !important;
  font-size: 1.25em;
  width: 200px !important;
  outline: none;
  padding: .25em 0 .5em !important;
`;

function Main({
  deselectItem,
  fieldName,
  highlightItem,
  label,
  selectedItems,
  selectItem,
  textInputValue,
  unselectedItems,
  updateTextInputValue
}) {
  const [hasFocus, setHasFocus] = useState(false);

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleBlur = () => {
    setHasFocus(false);
  };

  const handleFocus = () => {
    setHasFocus(true);
  };

  const handleKeyDown = e => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = unselectedItems.findIndex(item => item.highlighted) + 1;
        if (-1 < nextIndex && nextIndex < unselectedItems.length) {
          highlightItem(unselectedItems[nextIndex].id);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        const previousIndex = unselectedItems.findIndex(item => item.highlighted) - 1;
        if (-1 < previousIndex && previousIndex < unselectedItems.length) {
          highlightItem(unselectedItems[previousIndex].id);
        }
        break;
      case 'Backspace':
      case 'Delete':
        if (textInputValue.length === 0 && selectedItems.length) {
          deselectItem(selectedItems[selectedItems.length-1].id);
        }
        break;
      case 'Escape':
        inputRef.current.blur();
        break;
      case 'Enter':
        inputRef.current.blur();
        // falls through
      case 'Tab':
        const highlightedItems = unselectedItems.filter(item => item.highlighted);
        if (highlightedItems.length) {
          selectItem(highlightedItems[0].id);
        }
        updateTextInputValue('');
        break;
      default:
        break;
    };
  };

  const handleChange = e => {
    updateTextInputValue(e.target.value);
  };

  return (
    <Wrapper>
      <label htmlFor='multi-select-input'>{label}</label>
      <InputBox onClick={handleClick}>
        <SelectedItems
          deselectItem={deselectItem}
          items={selectedItems}
          fieldName={fieldName}
        />
        <Input
          id='multi-select-input'
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          type='text'
          value={textInputValue}
        />
      </InputBox>
      {
        hasFocus && !!unselectedItems.length &&
        <UnselectedItems
          items={unselectedItems}
          selectItem={selectItem}
        />
      }
    </Wrapper>
  );
}

Main.propTypes = {
  deselectItem: PropTypes.func.isRequired,
  fieldName: PropTypes.string.isRequired,
  highlightItem: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  selectedItems: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  textInputValue: PropTypes.string.isRequired,
  unselectedItems: PropTypes.array.isRequired,
  updateTextInputValue: PropTypes.func.isRequired
};

export default Main;
