const id = Date.now();
const date = Date.now();
export default {
  error: null,
  isLoading: null,
  notes: [
    {
      id: id,
      title: 'Halo',
      text: 'React note app demo',
      dateCreated: date,
      dateModified: null
    }
  ],
  selectedNote: false
};
