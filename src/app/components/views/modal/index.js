import { connect } from 'react-redux';

import { Modal as ModalView } from './Modal';

import { closeProgrammeModal } from '../../../actions/ProgrammeActions';
import { selectModalStatus } from '../../../selectors/simpleSelectors';

const MapStateToProps = (state) => ({
  isModalOpen: selectModalStatus(state),
});

const MapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeProgrammeModal()),
});

export const Modal = connect(MapStateToProps, MapDispatchToProps)(ModalView);