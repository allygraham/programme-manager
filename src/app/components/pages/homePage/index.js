import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { HomePage as HomePageView } from './HomePage';

import { resetToInitialState } from '../../../actions/ProgrammeActions';

const mapDispatchToProps = (dispatch) => ({
  resetApplicationState: () => dispatch(resetToInitialState())
});

export const HomePage = withRouter(connect(undefined, mapDispatchToProps)(HomePageView));
