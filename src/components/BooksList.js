import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import Book from './Book';

function BooksList() {
  const booksStore = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const addBooks = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const titleInput = document.getElementById('books-input');
    const authorInput = document.getElementById('author-input');

    const newBook = {
      item_id: id,
      title: titleInput.value,
      author: authorInput.value,
    };

    dispatch(addBook(newBook));

    titleInput.value = '';
    authorInput.value = '';
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

      <form action="" onSubmit={addBooks}>
        <h2>ADD NEW BOOK</h2>
        <input type="text" name="" placeholder="Book" id="books-input" required />
        <input type="text" name="" placeholder="Author" id="author-input" required />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default BooksList;
