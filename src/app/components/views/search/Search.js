import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '@opuscapita/react-searchbar';

import './Search.css';

export const Search = ({
  handleSearch, searchValue, clearSearch
}) => (
  <SearchBar
    onSearch={handleSearch}
    value={searchValue}
    dynamicSearchStartsFrom={1}
    onCloseClick={clearSearch}
    inputClassName="search-bar"
    searchPlaceHolder="Search a name..."
  />
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};