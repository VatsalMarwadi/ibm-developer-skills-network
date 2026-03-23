const axios = require('axios');

async function getAllBooks() {
    const response = await axios.get('http://localhost:5000/');
    return response.data;
}

async function getBookByISBN(isbn) {
    const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
    return response.data;
}

async function getBookByAuthor(author) {
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    return response.data;
}

async function getBookByTitle(title) {
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    return response.data;
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};
