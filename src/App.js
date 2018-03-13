import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MyReads from './MyReads';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  render() {
    return(
      <div>
        <Route path="/search" component={SearchBooks} /> 
        <Route exact path="/" component={MyReads} />
      </div>
    );
  }
}

export default BooksApp
