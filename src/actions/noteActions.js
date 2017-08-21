import * as types from '../constants/actionTypes';

export function fetchNotes() {
  return (dispatch) => {
    dispatch({ type: types.LOADING_NOTES, isLoading: true });
    dispatch({ type: types.FETCH_NOTE, isLoading: false });
  };
}

export function addNote() {
  return (dispatch) => {
    dispatch({
      type: types.ADD_NOTE,
      note: {
        id: Date.now(),
        title: 'New note',
        text: '',
        dateCreated: Date.now(),
        dateModified: null
      }
    });
  };
}

export function selectNote(id) {
  return (dispatch) => {
    dispatch({
      type: types.SELECT_NOTE,
      note: {
        id
      }
    });
  };
}

export function diactiveNote() {
  return (dispatch) => {
    dispatch({
      type: types.DEACTIVE_NOTE,
      selectedNote: false
    });
  };
}

export function updateNote(note) {
  return (dispatch) => {
    dispatch({
      type: types.UPDATE_NOTE,
      note,
    });
  };
}