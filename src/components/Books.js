import React from 'react';

const submitBookToStore = (e) => {
  e.preventDefault();
  // const newBook = {
  //     id, // make sure it's unique
  //     title,
  //     author
  // }
  // eslint-disable-next-line no-console
  console.log('dinitis');
  // // dispatch an action and pass it the newBook object (your action's payload)
  // dispatch(addBook(newBook));
};
const removeBookTFromStore = (e) => {
  e.preventDefault();
  // const newBook = {
  //     id, // make sure it's unique
  //     title,
  //     author
  // }
  // eslint-disable-next-line no-console
  console.log('lololo');
  // // dispatch an action and pass it the newBook object (your action's payload)
  // dispatch(addBook(newBook));
};

const Books = () => (
  <div>
    <h1>books</h1>
    <button type="button" onClick={removeBookTFromStore}>Remove</button>
    <form action="">
      <input type="text" />
      <button type="submit" onClick={submitBookToStore}>Add Book</button>
    </form>
  </div>
);
export default Books;
