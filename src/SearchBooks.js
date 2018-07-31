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
    query: '',
    books_searched: [],
    isSearching: false
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    });
    this.searchQuery(query.trim())
  }

  searchQuery = (query) => {
    //console.log('calling search api...' + query);
    this.setState({isSearching: true})
    BooksAPI.search(query).then((res)=> {
      //console.log('search mastuff...' + JSON.stringify(res));
      this.setState({
        books_searched: res,
        isSearching: false
      });
    });
  }

  addShelfs = () => {
    let bookSearches = this.state.books_searched;
    let allBooks = this.props.all_books;
    let newBks
    if (bookSearches !== undefined) {
      newBks = bookSearches.map((bk) => {
        bk["shelf"] = "None"
        return bk
      })
      .map((bk2)=>{
        let bkTitle = bk2.title 
        let bkSubTitle = bk2.subtitle 
        let checkExists = allBooks.filter((fbk)=>{
          if (fbk.title === bkTitle && fbk.subtitle === bkSubTitle) {
            bk2["shelf"] = fbk.shelf
            return bk2
          } else {
            return bk2
          } 
        })
       // console.log('---checkExists---bk2---' + JSON.stringify(bk2))
       return bk2
      })
    } else {
      newBks = []
    }
    //console.log(JSON.stringify(newBks))
    return newBks
  }

  render() {
    const all_books = this.props.all_books;
    let query = this.state.query.trim();
    let showingBooks = this.state.books_searched;
    const nomaSana = this.addShelfs()
    //console.log('... showingBooks ... ' + JSON.stringify(showingBooks));
    //console.log('... all_books ... ' + JSON.stringify(all_books));
   /*  if (query !== undefined && query.length > 0) {
      const match = new RegExp(escapeRegExp(query), 'i')
      this.searchQuery(query);//all_books.filter((book) => match.test(book.title) || match.test(book.authors[0]));
    }
    else {
      showingBooks = [];
    } */

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          {/*<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>*/}
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" 
                   value={query} onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          {showingBooks !== undefined && (
            <BookDetails books={nomaSana} onChangeBookShelf={this.props.onChangeBookShelf}/>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBooks