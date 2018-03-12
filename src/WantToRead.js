import React, { Component } from 'react';
import BookDetails from './BookDetails';

class WantToRead extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <BookDetails books={this.props.books} onChangeBookShelf={this.props.onChangeBookShelf} />
        </div>
      </div>
    );
  }
}

export default WantToRead;