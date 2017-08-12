import React from 'react';
import PropTypes from 'prop-types';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    this._SelectNote = this._SelectNote.bind(this);
  }
  _SelectNote(e) {
    let keyCode = e.target.dataset.key;
    this.props.actions.selectNote(keyCode);
  }
  render(){
    const item = this.props.item;
    return(
      <div className="sidebar--list">
        <ul>
          {item.map(({id, text, title}) => {
            return(
              <li key={id}>
                <h2>{title}</h2>
                <div className="sidebar--actions">
                  <div>
                    <i className="fa fa-trash fa-lg"></i>
                  </div>
                  <div>
                    <i data-key={id} onClick={this._SelectNote} className="fa fa-pencil fa-lg"></i>
                  </div>
                </div>
                <p>{text.length > 30 ? text.substr(0,30) + ' ...' : text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

NoteList.propTypes = {
  item: PropTypes.array,
  actions: PropTypes.object,
};

export default NoteList;