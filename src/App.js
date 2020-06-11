import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import data from 'data/payload';
import MultiSelect from 'multi-select';

const globalStyles = css`
  @import url(//fonts.googleapis.com/css?family=Lato); 

  body {
    color: #2a265a;
    font-family: Lato;
    margin: 50px;
  }

  div,
  label,
  input[type=text] {
    box-sizing: border-box;
  }

  label {
    display: block;
    font-size: 1.25em;
    margin: 1.25em 0 0 .25rem;
  }

  input[type=text] {
    border: 2px #eff1f2 solid;
    font-family: Lato;
    font-size: 1.25em;
    max-width: 100%;
    padding: .25em .5rem .5em;
    width: 400px;
  }
`;

const Input = styled.input`
  border: 1px #ccc solid;
  display: block;
  font-size: 1em;
  padding: .25em .5em .5em;
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <form>
        <label htmlFor='first-field'>First Field</label>
        <Input type='text' id='first-field' />
        <MultiSelect
          data={data}
          fieldName='students_and_groups'
          label='Select Students and Groups'
        />
        <label htmlFor='third-field'>Third Field</label>
        <Input type='text' id='third-field' />
      </form>
    </>
  );
}

export default App;
