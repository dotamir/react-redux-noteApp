import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/noteActions';

import { Columns, Column } from 're-bulma';
import SideBar from './sideBar';
import NoteForm from './NoteForm';

// import {Link} from 'react-router';

export class HomePage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const style = { padding: '10px', position: 'relative' };
    return (
      <div>
        <Columns className="noteApp">
          <Column style={style} size="isOneQuarter">
            <SideBar items={this.props.notes} actions={this.props.actions} />
          </Column>
          <Column style={style}>
            <NoteForm actions={this.props.actions} note={this.props.selectedNote} />
          </Column>
        </Columns>
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  notes: PropTypes.array,
  selectedNote: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ])
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes.notes,
    isLoading: state.notes.isLoading,
    err: state.notes.error,
    selectedNote: state.notes.selectedNote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
