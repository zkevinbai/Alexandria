

export const narrowSearchResults = searchResults => {
  const firstFiveResults = searchResults.items.slice(0, 5);
  let firstFiveBooks = [];
  for(let i = 0; i < 5; i++){
    firstFiveBooks.push(translateBook(firstFiveResults[i]));
  }
  return firstFiveBooks;
}

const translateBook = bookResult => {
  let book = {};

  book.user = null;
  book.title = bookResult.volumeInfo.title;
  book.author = bookResult.volumeInfo.authors[0];
  book.genre = bookResult.volumeInfo.categories[0];
  book.description = bookResult.volumeInfo.description;
  book.publishedDate = bookResult.volumeInfo.publishedDate;
  book.pageCount = bookResult.volumeInfo.pageCount;
  book.imageUrl = bookResult.volumeInfo.imageLinks.thumbnail;

  return book;
}


