import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { FormWrapper } from '../styles';

const Search = props => {
  return (
    <FormWrapper inline onSubmit={props.handleFormSubmit}>
      <FormGroup>
        <Label for="searchTerm" hidden>
          Search by Location
        </Label>
        <Input
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="Denver, CO"
          value={props.searchTerm}
          onChange={props.handleInputChange}
        />
      </FormGroup>
      <Button onClick={props.handleFormSubmit}>Search</Button>
    </FormWrapper>
  );
};

export default Search;
