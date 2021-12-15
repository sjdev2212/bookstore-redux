import axios from 'axios';

const ADD_BOOK = 'bookstore-redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-redux/books/REMOVE_BOOK';

const apiKey = 'R17LFxLFRI3DTK3sTbER';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.itemId !== action.payload);
    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
export const addBookToAApi = ({ itemId, title, category }) => function middle(dispatch) {
  axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`, {

    item_id: itemId,
    title,
    category,

  })
    .then((response) => {
      if (response.status === 201) {
        dispatch(addBook({ itemId, title, category }));
      }
    });
};

export const removeBookFromApi = (id) => function middle(dispatch) {
  axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books/${id}`,
    { item_id: id })
    .then(() => {
      dispatch(removeBook(id));
    });
};

export default booksReducer;
