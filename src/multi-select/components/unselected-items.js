import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  background: #fff;
  border-color: #eff1f2;
  border-style: solid;  
  border-width: 0 2px 2px;
  font-size: initial;
  position: absolute;
  width: 100%;
`;

const Heading = styled.h4`
  font-size: .9em;
  font-weight: 300;
  margin: 0;
  padding: .5em 1rem 0;
  text-transform: capitalize;
`;

const SelectableItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 1.25em;
  margin: .25em 0;
  padding: .25em 1rem;

  &.highlighted {
    background-color: #f4f7f6;
  }

  & + h4 {
    border-top: 2px #eff1f2 solid;
  }
`;

const ImageWrapper = styled.div`
  display: inline-block;
  height: 26px;
  margin-right: .75rem;
  width: 26px;
`;

const Image = styled.img`
  width: 26px;
`;

const handleMouseDown = (e) => {
  e.preventDefault();
};

function UnselectedItems({ items, selectItem }) {
  const handleOnClick = (e) => {
    selectItem(e.target.dataset.id);
  };

  return (
    <Wrapper onMouseDown={handleMouseDown}>
      {items.map((item, i) => {
        const { displayName, id, image, type } = item;
        return [
          (
            type !== items[i-1]?.type &&
            <Heading key={type}>{type}</Heading>
          ),
          (
            <SelectableItem
              className={item.highlighted && "highlighted"}
              data-id={id}
              key={i}
              onClick={handleOnClick}
            >
              <ImageWrapper>
                <Image src={image} />
              </ImageWrapper>
              {displayName}
            </SelectableItem>
          )
        ];
      })}
    </Wrapper>
  );
}

UnselectedItems.propTypes = {
  items: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired
};

export default UnselectedItems;
