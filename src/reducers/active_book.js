// State is not application state it is only the part of the state the
// reducer is concerned with
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
