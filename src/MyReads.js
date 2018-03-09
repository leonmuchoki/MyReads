import React, { Component } from 'react';
import 

/**
 * main component
 */
class MyReads extends Component {
    const BOOKS_CURR_READING = [
    {
      title: 'To Kill a Mockingbird',
      authors: 'Harper Lee',
      imageUrl: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
    },
    {
      title: "Ender's Game",
      authors: 'Orson Scott Card',
      imageUrl: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
      }
  ];
  
  const BOOKS_WANT_READ = [
    {
      title: '',
      authors: '',
      imageUrl: ''
    }    
  ];
  const BOOKS_READ = [];
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading books={BOOKS_CURR_READING} />      
          </div>
        </div>
      </div>    
    );
  }
}

export default MyReads