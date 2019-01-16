import { connect } from 'react-redux';
import { removeProgramme, storeEditProgrammeId } from '../../../actions/ProgrammeActions';

import { TableRow as TableRowView } from './TableRow';

const MapDispatchToProps = (dispatch) => ({
  handleProgrammeRemove: (id) => dispatch(removeProgramme(id)),
  handleProgrammeEdit: (id) => dispatch(storeEditProgrammeId(id)),
});

export const TableRow = connect(undefined, MapDispatchToProps)(TableRowView);