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
    <>
      <div className="all-books">
        <ul>
          {
          booksStore.map((book) => (
            <Book key={book.title} book={book} />
          ))
        }
        </ul>

        <div />
      </div>
      <h2 className="form-title">ADD NEW BOOK</h2>

      <form
        className="form"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addBooks();
        }}
      >
        <input className="input-book" type="text" name="" placeholder="Book Title" id="books-input" required />
        <input className="input-category" type="text" name="" placeholder="Category" id="category-input" required />
        <button className="add-btn" type="submit">ADD BOOK</button>
      </form>

    </>
  );
}

export default BooksList;
