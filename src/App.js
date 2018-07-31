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
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.all_books !== this.props.all_books) {
      //pre-poluate fields
      //this.processDeckInfo()
    }
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        all_books: books,
        curr_reading: books.filter((c) => (c.shelf === "currentlyReading")),
        want_to_read: books.filter((c) => ( c.shelf === "wantToRead")),
        read: books.filter((c) => ( c.shelf === "read"))
      });
      //console.log('...-changed state getAllBooks-...')
    });
  }


  changeBookShelf = (book, value) => {
    console.log(JSON.stringify('---book--value-' + JSON.stringify(value)));
    if (value !== undefined && book !== undefined)
    {
        book.shelf = value;
        console.log(JSON.stringify('---book---' + JSON.stringify(book)));
        BooksAPI.update(book, value).then((response) => {
          this.getAllBooks(); 
         /*  this.setState({
            all_books: response,
            curr_reading: response.currentlyReading,
            want_to_read: response.wantToRead,
            read: response.read
          });  */
          //console.log("state currentlyReading<<<<" + response.currentlyReading);
          //console.log("state response wantToRead<<<<" + response.wantToRead);
          //console.log("state read<<<<" + response.currentlyReading);
          //console.log(JSON.stringify(response));
          
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
