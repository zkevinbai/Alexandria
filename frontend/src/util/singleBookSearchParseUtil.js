export const translateBook = bookResult => {
    let book = {};

    if (!bookResult) {
        return book;
    }

    book.user = null;
    book.title = bookResult.title;
    book.volumeId = bookResult.id;

    if (bookResult.authors) {
        book.author = bookResult.authors[0];
    } else {
        book.author = 'Unknown Author';
    }

    if (bookResult.categories) {
        book.genre = bookResult.categories[0];
    } else {
        book.genre = 'Fiction';
    }

    if (bookResult.description) {
        book.description = bookResult.description;
    } else {
        book.description = 'A great read!';
    }

    if (bookResult.publishedDate) {
        book.publishedDate = bookResult.publishedDate;
    } else {
        book.publishedDate = 'Unknown';
    }

    if (bookResult.pageCount) {
        book.pageCount = bookResult.pageCount;
    } else {
        book.pageCount = 'Unknown';
    }
   
    if (bookResult.imageLinks) {
        if (bookResult.imageLinks.thumbnail) {
            book.imageUrl = bookResult.imageLinks.thumbnail;
        } else if (bookResult.imageLinks.smallThumbnail) {
            book.imageUrl = bookResult.imageLinks.smallThumbnail;
        }
    } else {
        book.imageUrl = 'https://cdn.pixabay.com/photo/2016/03/31/18/29/book-1294406_960_720.png';
    }

    return book;
};
