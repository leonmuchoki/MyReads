import React, { Component } from 'react';
import BookDetails from './BookDetails';

const Shelf = ({title, books, onChangeBookShelf}) => (
  <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          {books ? <BookDetails books={books} onChangeBookShelf={onChangeBookShelf} /> : ''}
          
        </div>
      </div>
)


export default Shelf