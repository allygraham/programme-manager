import { connect } from 'react-redux';

import { Search as SearchView } from './Search';

import { storeSearchValue } from '../../../actions/ProgrammeActions';
import { selectSearchValue } from '../../../selectors/simpleSelectors';

const MapStateToProps = (state) => ({
  searchValue: selectSearchValue(state),
});

const MapDispatchToProps = (dispatch) => ({
  handleSearch: (value) => dispatch(storeSearchValue(value)),
});

export const Search = connect(MapStateToProps, MapDispatchToProps)(SearchView);