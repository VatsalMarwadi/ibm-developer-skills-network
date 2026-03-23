const axios = require('axios');

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/');
        return response.data;
    } catch (error) {
        return { error: "Error fetching all books" };
    }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
        return response.data || { message: "Book not found" };
    } catch (error) {
        return { error: "Error fetching book by ISBN" };
    }
}

// Get book by Author
async function getBookByAuthor(author) {
    try {
        const response = await axios.get(`http://localhost:5000/author/${author}`);
        return response.data.length ? response.data : { message: "Author not found" };
    } catch (error) {
        return { error: "Error fetching books by author" };
    }
}

// Get book by Title
async function getBookByTitle(title) {
    try {
        const response = await axios.get(`http://localhost:5000/title/${title}`);
        return response.data.length ? response.data : { message: "Title not found" };
    } catch (error) {
        return { error: "Error fetching books by title" };
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};
