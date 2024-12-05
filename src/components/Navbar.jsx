
import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
function Navbar() {
  return (
    <nav>
      <ul className='navbar'>
        <li className='li'><Link to="/" className='link'>Home</Link></li>
        <li  className='li'><Link to="/browse-books" className='link'>Browse Books</Link></li>
        <li  className='li'><Link to="/add-book" className='link'>Add Book</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
