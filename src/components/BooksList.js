import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addBookToAApi } from '../redux/books/books';
import Book from './Book';

function BooksList() {
  const booksStore = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const addBooks = () => {
    const id = uuidv4();
    const titleInput = document.getElementById('books-input');
    const categoryInput = document.getElementById('category-input');

    const newBook = {
      itemId: id,
      title: titleInput.value,
      category: categoryInput.value,
    };

    dispatch(addBookToAApi(newBook));

    titleInput.value = '';
    categoryInput.value = '';
  };

  return (
    <div>
      <ul>
        {
          booksStore.map((book) => (
            <Book key={book.title} book={book} />
          ))
        }
      </ul>

      <div />

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addBooks();
        }}
      >
        <h2>ADD NEW BOOK</h2>
        <input type="text" name="" placeholder="Book" id="books-input" required />
        <input type="text" name="" placeholder="Category" id="category-input" required />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default BooksList;
