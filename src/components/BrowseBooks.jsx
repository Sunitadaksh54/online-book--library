
    
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { booksData } from '../utils/bookData';
import "./home.css"
function BrowseBooks() {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState('');

 
  const filteredBooks = booksData.filter(
    (book) => (category ? book.category === category : true) &&
              (book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
               book.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <h2 className='head'>Browse Books</h2>
      <input className='input' 
        type="text" 
        placeholder="Search by title or author..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <ul className='books'>
        {filteredBooks.map((book) => (
         
          <li className='singlebook' key={book.id}>
            <h3>{book.title}</h3>
            <p>by {book.author}</p><br/>
            <Link  className="link" to={`/book-details/${book.id}`}>View Details</Link>
          </li>
         
        ))}
      </ul>
    </div>
  );
}

export default BrowseBooks;
