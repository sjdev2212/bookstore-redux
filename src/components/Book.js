import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookFromApi } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
import styles from './Books.module.css';

function Book(props) {
  const { book } = props;

  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(removeBookFromApi(id));
  };
  const percentage = 74;
  return (

    <div className={styles.container}>
      <div className={styles.firstBook}>
        <h3 className={styles.category}>{book.category}</h3>
        <p className={styles.title}>{book.title}</p>
        <p className={styles.author}>Author</p>
        <button type="button" className="buttons button-comment"> Comment </button>
        <button type="button" className="buttons button-remove" id={book.itemId} onClick={() => deleteBook(book.itemId)}>Remove</button>
        <button className="buttons button-edit" type="button">Edit</button>

      </div>
      <div className={styles.smContainer}>
        <div className={styles.progCircle}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>

        <div>
          <span className={styles.percentage}>74%</span>
          <br />
          <p className={styles.completed}>Completed</p>
        </div>

      </div>

      <div className={styles.chapterMaine}>
        <p className={styles.current}>CURRENT CHAPTER</p>
        <p className={styles.chapter}>First Chapter</p>
        <button className={styles.updateBtn} type="button">UPDATE PROGRESS</button>
      </div>

    </div>

  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
