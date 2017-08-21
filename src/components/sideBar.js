import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Hero, HeroBody, Button,HeroHead, Input } from 're-bulma';
import NoteList from './NoteList';
import FontAwesome from 'react-fontawesome';
import { addNote } from '../actions/noteActions';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this._addNote = this._addNote.bind(this);
  }
  _addNote() {
    this.props.dispatch(addNote());
  }
  render(){
    const ContainerStyle = {padding: '1rem'};
    return(
      <div className="sidebar">
        <Hero size="isFullheight" className="sidebar--hero">
          <HeroHead>
            <Container style={ContainerStyle}>
              <Button onClick={this._addNote} className="sidebar--add">Add new <FontAwesome name="plus" /></Button>
              <Input type="text" placeholder="Search ..." />
            </Container>
          </HeroHead>
          <HeroBody>
            <Container>
              <NoteList actions={this.props.actions} item={this.props.items} />
            </Container>
          </HeroBody>
        </Hero>
      </div>
    );
  }
}

SideBar.propTypes = {
  actions: PropTypes.object,
  items: PropTypes.array,
  dispatch: PropTypes.func
};

export default connect()(SideBar);