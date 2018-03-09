import React, { Component } from 'react';
import  BookDetails from './BookDetails'


class CurrentlyReading extends Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <BookDetails books={this.props.books} />
        </div>
      </div>
    );
  }
}

export default CurrentlyReading