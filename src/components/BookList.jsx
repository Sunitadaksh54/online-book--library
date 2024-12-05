import React from 'react';
import BookItem from './BookItem';
import './home.css'
function BookList (props) {
  return (
    <div className="book-list">
      {props.books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
