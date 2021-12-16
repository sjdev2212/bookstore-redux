import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/books';

function Book(props) {
  const { book } = props;

  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(removeBookFromApi(id));
  };

  return (
    <li>
      <div>
        <p>{book.title}</p>
        <h3>{book.category}</h3>

        <div>

          <button type="button" id={book.itemId} onClick={() => deleteBook(book.itemId)}>Remove</button>

        </div>
      </div>

    </li>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
