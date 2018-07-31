import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Shelf from './Shelf';


const MyReads = ({books_curr_reading, books_want_to_read, books_read, onChangeBookShelf}) => (
  <div> 
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf title="Currently Reading" books={books_curr_reading} onChangeBookShelf={onChangeBookShelf}/>
          <Shelf title="Want To Read" books={books_want_to_read} onChangeBookShelf={onChangeBookShelf}/>
          <Shelf title="Read" books={books_read} onChangeBookShelf={onChangeBookShelf}/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  </div>  
)

MyReads.propTypes = {
  books_curr_reading: PropTypes.array.isRequired,
  books_want_to_read: PropTypes.array.isRequired,
  books_read: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
}

export default MyReads