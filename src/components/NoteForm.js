import React from 'react';
import PropTypes from 'prop-types';
import { Hero, HeroBody, Nav, NavGroup, NavItem, Textarea, HeroHead, Container, Input, Button } from 're-bulma';

class NoteForm extends React.Component {
  constructor(props){
    super(props);
    this.handeInputChange = this.handeInputChange.bind(this);
    this._DeactiveNote = this._DeactiveNote.bind(this);
    this._UpdateNote = this._UpdateNote.bind(this);
    this.state = {
      noteId: '',
      noteTitle: '',
      noteText: '',
      noteDate: '',
      noteDateModified: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props != nextProps) {
      this.setState({
        noteId: nextProps.note.id,
        noteTitle: nextProps.note.title,
        noteText: nextProps.note.text,
        noteDate: nextProps.note.dateCreated,
        noteDateModified: nextProps.note.dateModified,
      });
    }
  }

  handeInputChange(e){
    const target = e.target;
    if(target.name === 'title') {
      this.setState({ noteTitle: target.value });
    } else if(target.name === 'text') {
      this.setState({ noteText: target.value });
    }
    // this.setState({textVal: e.target.value});
  }

  _DeactiveNote() {
    this.props.actions.diactiveNote();
  }
  
  _UpdateNote() {
    const { noteId, noteText, noteTitle, noteDate } = this.state;
    let noteDateModified = Date.now();
    const newNote = {
      id: noteId,
      title: noteTitle,
      text: noteText,
      dateCreated: noteDate,
      dateModified: noteDateModified,
    };
    this.props.actions.updateNote(newNote);
    this.props.actions.diactiveNote();
  }

  render(){
    const { noteDate, noteDateModified } = this.state;
    return(
      <div>
        <Hero size="isFullheight" className={this.props.note === false ? 'noteform hidden' : 'noteform'}>
          <HeroHead>
            <Container>
              <Nav className="noteform--nav">
                <NavGroup align="left">
                  <NavItem className="noteform--nav__item">
                    <Input name="title" className="noteform--title" value={this.state.noteTitle} onChange={this.handeInputChange} />
                  </NavItem>
                </NavGroup>
                <NavGroup align="right">
                  <NavItem>
                    <Button onClick={this._UpdateNote} color="isSuccess">Update</Button>
                    <Button onClick={this._DeactiveNote}>Cancel</Button>
                  </NavItem>
                </NavGroup>
              </Nav>
            </Container>
          </HeroHead>
          <HeroBody className="noteform--body">
            <Container>
                <p>Date Created: {noteDate}</p>
                <p>Date Modified: {noteDateModified === null ? 'never' : noteDateModified }</p>  
              <Textarea name="text" value={this.state.noteText} onChange={this.handeInputChange} />
            </Container>
          </HeroBody>
        </Hero>
        <div className={this.props.note !== false ? 'hidden' : 'nothingToShow'}>
          <p>Select a note from left sidebar</p>
        </div>
      </div>
    );
  }
}

NoteForm.propTypes = {
  note: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  actions: PropTypes.object,
};

export default NoteForm;