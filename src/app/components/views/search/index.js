import { connect } from 'react-redux';

import { Search as SearchView } from './Search';

import { storeSearchValue, clearSearchValue } from '../../../actions/ProgrammeActions';
import { selectSearchValue } from '../../../selectors/simpleSelectors';

const MapStateToProps = (state) => ({
  searchValue: selectSearchValue(state),
});

const MapDispatchToProps = (dispatch) => ({
  handleSearch: (value) => dispatch(storeSearchValue(value)),
  clearSearch: () => dispatch(clearSearchValue()),
});

export const Search = connect(MapStateToProps, MapDispatchToProps)(SearchView);