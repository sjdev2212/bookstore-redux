import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { book } = props;

  const dispatch = useDispatch();

  const deleteBook = (event) => {
    const { id } = event.currentTarget;
    dispatch(removeBook(id));
  };

  return (
    <li>
      <div>
        <p>{book.title}</p>
        <h3>{book.author}</h3>

        <div>

          <button type="button" id={book.item_id} onClick={deleteBook}>Remove</button>

        </div>
      </div>

    </li>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
