import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({
  handleSearch, searchValue
}) => (
  <div className="field">
    <p className="control">
      <input
        type="search"
        onChange={(event) => handleSearch(event.target.value)}
        value={searchValue}
        className="input is-medium"
        placeholder="Search a name..."
      />
    </p>
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};