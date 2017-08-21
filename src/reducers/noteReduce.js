import { FETCH_NOTE, LOADING_NOTES, ADD_NOTE, SELECT_NOTE, DEACTIVE_NOTE, UPDATE_NOTE } from '../constants/actionTypes';
import initialState from './initialState';

// const initialState = { isLoading: null };

export default function fetchNote(state = initialState, action) {
  switch (action.type) {
    case LOADING_NOTES:
      return {...state, isLoading: action.isLoading};
    case FETCH_NOTE:
      return {...state, isLoading: action.isLoading};
    case DEACTIVE_NOTE:
      return {...state, selectedNote: action.selectedNote};
    case UPDATE_NOTE:
      let newSubState = state.notes.map(note => {
        if(note.id !== action.note.id) {
          return note;
        }
        return {
          ...note,
          title: action.note.title,
          text: action.note.text,
          dateCreated: action.note.dateCreated,
          dateModified: action.note.dateModified,
        };
      });
      return {...state, notes: newSubState};
    case ADD_NOTE:
      return {...state, notes: state.notes.concat(action.note) };
    case SELECT_NOTE:
      return {...state, selectedNote: state.notes.find(note => {
        return note.id == action.note.id;
      })};
    default:
      return state;
  }
}