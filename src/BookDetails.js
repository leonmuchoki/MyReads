import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookDetails extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }
  
  render() {
    const books = this.props.books
    const onChangeBookShelf = this.props.onChangeBookShelf

    return(
        <ol className="books-grid">
        {books.map((book, index) => (
          <li key={index}>
            <div className="book">
              <div className="book-top">
                {book.imageLinks.thumbnail !== null > 0 && (
                  <div className="book-cover" style={{ width: 128, 
                                                      height: 193, 
                                                      backgroundImage: `url(${book.imageLinks.thumbnail})` 
                  }}>
                  </div>
                )}

                <div className="book-shelf-changer">
                  <select onClick={(e) => onChangeBookShelf(book,e.target.value)} value={book.shelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
                </div>
                
                {book.title !== null && (
                  <div className="book-title">{book.title}</div>
                )}
                {book.authors !== null && (
                  <div className="book-authors">{book.authors}</div>
                )}               
            </div>
          </li>
     ) )
        }
      </ol>
    );
  }
}

export default BookDetails