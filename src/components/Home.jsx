
import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"
function Home() {
  return (
    <div>
      <h1 className='head'>Welcome to the Online Library!</h1>
      <h2>Book Categories</h2>
      <ul className='categories'>
        <li><Link to="/books/Fiction" className='links'>Fiction</Link></li>
        <li><Link to="/books/Non-Fiction" className='links'>Non-Fiction</Link></li>
        <li><Link to="/books/Sci-Fi" className='links'>Sci-Fi</Link></li>

      </ul>

      <h2>Popular Books</h2>
      <ul className='popular'>
        <li><Link to="/book-details/1" className='links'>The Great Gatsby</Link></li>
        <li><Link to="/book-details/2" className='links'>A Brief History of Time</Link></li>
        <li><Link to="/book-details/3" className='links'>The Sixth Extinction</Link></li>
        <li><Link to="/book-details/4" className='links'>Dune</Link></li>
      </ul>
    </div>
  );
}



export default Home;
