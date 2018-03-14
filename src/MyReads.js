import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';


class MyReads extends Component {
  static propTypes = {
    books_curr_reading: PropTypes.array.isRequired,
    books_want_to_read: PropTypes.array.isRequired,
    books_read: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

  render() {
    return (
      <div> 
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading books={this.props.books_curr_reading} onChangeBookShelf={this.props.onChangeBookShelf} />
            <WantToRead books={this.props.books_want_to_read} onChangeBookShelf={this.props.onChangeBookShelf} />   
            <Read books={this.props.books_read} onChangeBookShelf={this.props.onChangeBookShelf} />     
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
      </div>    
    );
  }
}

export default MyReads