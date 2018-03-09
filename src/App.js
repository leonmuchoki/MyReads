import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MyReads from './MyReads';

class BooksApp extends React.Component {
  render() {
    return(
     <MyReads />
    );
  }
}

export default BooksApp
