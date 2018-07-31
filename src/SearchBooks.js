import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import BookDetails from './BookDetails';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  static propTypes = {
    all_books: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  }

  state = {
    query: [],
    books_searched: []
  }

  updateQuery =  (query) => {
    let qy = [];
    qy.push(query);
    this.setState({
      query: qy
    });
  }

  searchQuery = (query) => {
    console.log('calling search api...' + query);
    BooksAPI.search(query).then((res)=> {
      
      console.log('search mastuff...' + JSON.stringify(res));
      this.setState({
        books_searched: res
      });
    });
  }

  render() {
    const all_books = this.props.all_books;
    const query = this.state.query.join();
    let showingBooks = this.state.books_searched;
    console.log('query ... ' + query);

    if (query !== undefined && query.length > 0) {
      const match = new RegExp(escapeRegExp(query), 'i')
      this.searchQuery(query);//all_books.filter((book) => match.test(book.title) || match.test(book.authors[0]));
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
          {showingBooks !== undefined && (
            <BookDetails books={showingBooks} onChangeBookShelf={this.props.onChangeBookShelf}/>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBooks