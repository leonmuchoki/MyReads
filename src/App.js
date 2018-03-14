import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MyReads from './MyReads';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    all_books: [],
    curr_reading: [],
    want_to_read: [],
    read: []
  }
  

  componentDidMount() {
    this.getAllBooks();
  }
  

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        all_books: books,
        curr_reading: books.filter((c) => (c.shelf === "currentlyReading")),
        want_to_read: books.filter((c) => ( c.shelf === "wantToRead")),
        read: books.filter((c) => ( c.shelf === "read"))
      });
    });
  }


  changeBookShelf = (book, shelf) => {
    let res;
    if (shelf !== "none")
    {
        BooksAPI.update(book, shelf).then((response) => {
          res = response;  
          //console.log(response);
          this.getAllBooks(); 
        });        
    }
  }

  render() {
    return(
      <div>
        <Route path="/search" render={() => (
                                <SearchBooks all_books={this.state.all_books} onChangeBookShelf={this.changeBookShelf} />
                              )} 
        />        
        <Route exact path="/" 
               render={() => (
                 <MyReads books_curr_reading={this.state.curr_reading}
                          books_want_to_read={this.state.want_to_read}
                          books_read={this.state.read} 
                          onChangeBookShelf={this.changeBookShelf} 
                 />
               )} 
        />
      </div>
    );
  }
}

export default BooksApp
