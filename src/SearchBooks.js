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
    query: ''
  }

  updateQuery =  (query) => {
    this.setState({
      query: query.trim()
    });
  }

  render() {
    const all_books = this.props.all_books;
    const query = this.state.query;
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
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" 
                   value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
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