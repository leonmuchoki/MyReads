import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';

/**
 * main component
 */

class MyReads extends Component {
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
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading books={this.state.curr_reading} onChangeBookShelf={this.changeBookShelf} />
            <WantToRead books={this.state.want_to_read} onChangeBookShelf={this.changeBookShelf} />   
            <Read books={this.state.read} onChangeBookShelf={this.changeBookShelf} />     
          </div>
        </div>
      </div>    
    );
  }
}

export default MyReads