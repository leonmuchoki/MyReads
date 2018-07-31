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
    //console.log('----bookdetails...' + JSON.stringify(books))
    return(
        <ol className="books-grid">
        {books !== undefined && books.map((book, index) => (
          <li key={index}>
            <div className="book">
              <div className="book-top">
                {book.imageLinks.thumbnail !== undefined && (
                  <div className="book-cover" style={{ width: 128, 
                                                      height: 193, 
                                                      backgroundImage: `url(${book.imageLinks.thumbnail})` 
                  }}>
                  </div>
                )}

                <div className="book-shelf-changer">
                 {book.shelf !== "None"
                   ? <select onChange={(e) => onChangeBookShelf(book,e.target.value)} value={book.shelf}>
                      <option value="" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                     </select>
                   :
                    <select onChange={(e) => onChangeBookShelf(book,e.target.value)} value="none">
                      <option value="" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                  </select>
                 }
                </div>
                </div>
                
                {book.title ?  <div className="book-title">{book.title}</div> : '' }
                {
                  book.authors ? <div className="book-authors">{book.authors.join(',')}</div> : ''
                }               
            </div>
          </li>
     ) )
        }
      </ol>
    );
  }
}

export default BookDetails