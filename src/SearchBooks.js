import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import BookDetails from './BookDetails';

class SearchBooks extends Component {
  static propTypes = {
    all_books: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

  state = {
    query: []
  }

  updateQuery =  (query) => {
    let qy = [];
    qy.push(query);
    this.setState({
      query: qy
    });
  }

  render() {
    const all_books = this.props.all_books;
    const query = this.state.query.join();
    let showingBooks;

    if (query && all_books.length > 0) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = all_books.filter((book) => match.test(book.title) || match.test(book.authors[0]));
    }
    else {
      showingBooks = [];
    }

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          {/*<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>*/}
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" 
                   value={this.state.query.join()} onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          {showingBooks.length > 0 && (
            <BookDetails books={showingBooks} onChangeBookShelf={this.props.onChangeBookShelf}/>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBooks