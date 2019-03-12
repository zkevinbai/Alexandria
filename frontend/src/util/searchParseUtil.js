

export const narrowSearchResults = searchResults => {
  const firstFiveResults = searchResults.data.items.slice(0, 5);
  let firstFiveBooks = [];
  for(let i = 0; i < 5; i++){
    firstFiveBooks.push(translateBook(firstFiveResults[i]));
  }
  return firstFiveBooks;
}

const translateBook = bookResult => {
  let book = {};

  if(!bookResult.volumeInfo || !bookResult.volumeInfo.title){
    return book;
  }

  book.user = null;
  book.title = bookResult.volumeInfo.title;
  
  if (bookResult.volumeInfo.authors) {
    book.author = bookResult.volumeInfo.authors[0];
  } else {
    book.author = 'Unkown Author';
  }
  
  if (bookResult.volumeInfo.categories){
    book.genre = bookResult.volumeInfo.categories[0];
  } else{
    book.genre = 'Fiction';
  }
  
  if (bookResult.volumeInfo.description){
    book.description = bookResult.volumeInfo.description;
  } else{
    book.description = 'A great read!';
  }
  
  if (bookResult.volumeInfo.publishedDate) {
    book.publishedDate = bookResult.volumeInfo.publishedDate;
  } else {
    book.publishedDate = 'Unknown';
  }
  
  if (bookResult.volumeInfo.pageCount) {
    book.pageCount = bookResult.volumeInfo.pageCount;
  } else {
    book.pageCount = 'Unknown';
  }
  
  if (bookResult.volumeInfo.imageLinks) {
    if(bookResult.volumeInfo.imageLinks.thumbnail){
      book.imageUrl = bookResult.volumeInfo.imageLinks.thumbnail;
    } else if (bookResult.volumeInfo.imageLinks.smallThumbnail){
      book.imageUrl = bookResult.volumeInfo.imageLinks.smallThumbnail;
    }
  } else {
    book.imageUrl = 'https://openclipart.org/image/2400px/svg_to_png/211628/Book_thick_generic.png';
  }

  return book;
}


