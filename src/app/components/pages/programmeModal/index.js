import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { ProgrammeModal as ProgrammeModalView } from './ProgrammeModal';

import { completeModalForm } from '../../../actions/ProgrammeActions';
import { selectFormData, selectIsProgrammeBeingEdited } from '../../../selectors/simpleSelectors';

const MapStateToProps = (state) => ({
  formData: selectFormData(state),
  isEditing: selectIsProgrammeBeingEdited(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (form) => dispatch(completeModalForm(form))
});

export const ProgrammeModal = withRouter(connect(MapStateToProps, mapDispatchToProps)(ProgrammeModalView));
