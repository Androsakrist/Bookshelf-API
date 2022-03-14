const { getAllBooksHandler, getBookIdHandler } = require('./getBook-handler');
const createBookHandler = require('./postBook-handler');
const putBookByIdHandler = require('./putBook-handler');
const deleteBookHandler = require('./deleteBook-handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: createBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: putBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookHandler,
    },
];

module.exports = routes;