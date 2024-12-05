
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { booksData } from '../utils/bookData';
import "./home.css"
function BookDetails() {
  const { id } = useParams();
  const book = booksData.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    
    <div className='book'>
    
      <h2>{book.title}</h2><br/>
      <img   src={book.img} alt="" height="200px" width="200px" />
      <h3>Author:{book.author}</h3>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating} </p><br/>
      <Link className="link" to="/browse-books">Back to Browse</Link>
    
    </div>
  
  );
}

export default BookDetails;
