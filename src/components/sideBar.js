import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Hero, HeroBody, Button,HeroHead, Input } from 're-bulma';
import NoteList from './NoteList';

class SideBar extends React.Component {
  render(){
    const ContainerStyle = {padding: '1rem'};
    return(
      <div className="sidebar">
        <Hero size="isFullheight" className="sidebar--hero">
          <HeroHead>
            <Container style={ContainerStyle}>
              <Title className="sidebar__title">Note App</Title>
              <Input type="text" placeholder="Search ..." />
              <Button>Add new</Button>
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
  items: PropTypes.array
};

export default SideBar;