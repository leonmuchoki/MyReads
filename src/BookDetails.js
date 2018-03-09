import React, { Component } from 'react';

class BookDetails extends Component {
  render() {
    const bookDetails = this.props.books;
    console.log(bookDetails);
    return(
        <ol className="books-grid">
        {bookDetails.map((book, index) => (
          <li key={index}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: book.imageDetails.width, 
                                                     height: book.imageDetails.height, 
                                                     backgroundImage: `url(${book.imageDetails.thumb_url})` 
                                                   }}>
                </div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
          </li>
     ) )
        }
      </ol>
    );
  }
}

export default BookDetails