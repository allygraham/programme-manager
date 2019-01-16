import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { ProgrammeListPage as ProgrammeListPageView } from './ProgrammeListPage';
import { selectFilteredAndSortedProgrammeList, selectModalStatus } from '../../../selectors/simpleSelectors';
import { openProgrammeModal } from '../../../actions/ProgrammeActions';

const MapStateToProps = (state) => ({
  programmeList: selectFilteredAndSortedProgrammeList(state),
  isModalOpen: selectModalStatus(state),
});

const MapDispatchToProps = (dispatch) => ({
  openProgrammeModal: () => dispatch(openProgrammeModal()),
});

export const ProgrammeListPage = withRouter(
  connect(MapStateToProps, MapDispatchToProps)(ProgrammeListPageView)
);
