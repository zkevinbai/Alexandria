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
        book.author = 'Unkown Author';
    }

    if (bookResult.categories) {
        book.genre = bookResult.categories[0];
    } else {
        book.genre = 'Fiction';
    }

    if (bookResult.description) {
        book.description = bookResult.description.slice(3, bookResult.description.length - 3);
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
        book.imageUrl = 'https://openclipart.org/image/2400px/svg_to_png/211628/Book_thick_generic.png';
    }

    return book;
};
