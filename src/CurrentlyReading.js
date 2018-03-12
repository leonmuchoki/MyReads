import React, { Component } from 'react';
import  BookDetails from './BookDetails'


class CurrentlyReading extends Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <BookDetails books={this.props.books} onChangeBookShelf={this.props.onChangeBookShelf} />
        </div>
      </div>
    );
  }
}

export default CurrentlyReading