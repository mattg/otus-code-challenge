import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.ul`
  display: inline;
  margin: 0;
  padding: 0;
`;

const SelectedItem = styled.li`
  align-items: center;
  background-color: #f4f7f6;
  border-radius: 3px;
  display: inline-flex;
  font-size: 1em;
  margin: .25em .5rem 0 0;
  padding: .3em .5em;
`;

const CloseButton = styled.div`
  background: #2a265a url(/img/close.png) no-repeat center center;
  background-size: 10px;
  border-radius: 9px;
  color: #f4f7f6;
  cursor: pointer;
  display: inline-block;
  height: 18px;
  margin: 0 0 0 .5em;
  padding: 0 .25em;
  width: 18px;
`;

function SelectedItems({ deselectItem, items, fieldName }) {
  const handleSelectedItemClick = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleCloseButtonClick = e => {
    e.preventDefault();
    e.stopPropagation();
    deselectItem(e.target.dataset.id);
  };

  return (
    <Wrapper>
      {items.map((item, i) => {
        const { displayName, id, originalId, type } = item;
        return (
          <SelectedItem key={i} onClick={handleSelectedItemClick}>
            <input
              name={`${fieldName}[]`}
              type='hidden'
              value={`${type.replace(' ', '_')}-${originalId}`}
            />
            <div>{displayName}</div>
            <CloseButton data-id={id} onClick={handleCloseButtonClick} />
          </SelectedItem>
        );
      })}
    </Wrapper>
  );
}

SelectedItems.propTypes = {
  deselectItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  fieldName: PropTypes.string.isRequired
};

export default SelectedItems;
