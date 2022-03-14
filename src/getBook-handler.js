const books = require('../../dicoding-bookshelf-api/src/books');

const getAllBooksHandler = (request, h) => {
    let buku = books;
    let { name, reading, finished } = request.query;

    if (name !== undefined) {
        name = name.toLowerCase();
        buku = buku.filter((book) => book.name.toLowerCase().includes(name));
    }
    if (reading !== undefined) {
      reading = reading !== '0';
      buku = buku.filter((book) => book.reading === reading);
    }
    if (finished !== undefined) {
      finished = finished !== '0';
      buku = buku.filter((book) => book.finished === finished);
    }
      
    buku = buku.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
    }));
    const response = h.response({
      status: 'success',
      data: {
        books: buku,
      },
    });
    response.code(200);
    return response;
};

const getBookIdHandler = (request, h) => {
    const { bookId } = request.params;

    const book = books.filter((b) => b.id === bookId)[0];
    
    if (book !== undefined) {
      return h.response({
        status: 'success',
        data: {
          book,
        },
      });
    }

    const response = h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;
};

module.exports = { getAllBooksHandler, getBookIdHandler };