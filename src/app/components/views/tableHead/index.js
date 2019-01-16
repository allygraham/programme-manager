import { connect } from 'react-redux';

import { TableHead as TableHeadView } from './TableHead';

import { storeSortBy } from '../../../actions/ProgrammeActions';
import { selectSortCriteria } from '../../../selectors/simpleSelectors';

const MapStateToProps = (state) => ({
  sortCriteria: selectSortCriteria(state),
});

const MapDispatchToProps = (dispatch) => ({
  sortBy: (column) => dispatch(storeSortBy(column)),
});

export const TableHead = connect(MapStateToProps, MapDispatchToProps)(TableHeadView);