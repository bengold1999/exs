'use strict'
var book_dt = 'book_dt'
var Gbooks
_createBooks()
// var emty = []
var gFilterBy = ''

function getBooks() {
    if (!gFilterBy) return Gbooks

    var books = Gbooks.filter((book) =>
        book.title.toLowerCase().includes(gFilterBy.toLowerCase())
    )
    return books
}



function _createBooks() {
    var books = loadFromStorage(book_dt)
    if (!books || !books.length) {
        books = [
            _createBook('jjk', 80 , 5),
            _createBook('jjk s2', 90 , 3)
        ]
    }
    Gbooks = books
    _saveBooks()
    return books
}
function getBook(bookId) {
    const book = Gbooks.find((book) => book.id === bookId)
    if (book) return book
}

function _createBook(title, price , rating) {
    return {
        id: makeId(),
        title,
        price,
        imgUrl: 'png',
        rating
    }
}
// function sBook(value) {
//     return Gbooks.filter((book) => book.title.toLowerCase().startsWith(value))
// }


function showMessage(message) {
    const messageContainer = document.querySelector('.message')
    const messagespan = messageContainer.querySelector('span')
    messagespan.innerText = message
    messageContainer.showModal()
    setTimeout(() => {
        messageContainer.close()
    }, 2000);
}

function removeBook(booId) {
    const bookIdx = Gbooks.findIndex(book => book.id = booId)
    Gbooks.splice(bookIdx, 1)
    _saveBooks()
}

function readBook(readId) {
    const read = Gbooks.find(read => read.id === readId)
    return read
}
function updateBook(bookId, newPrice) {
    const book = getBook(bookId)

    book.price = newPrice

    _saveBooks()
    return book
}

function _saveBooks() {
    saveToStorage(book_dt, Gbooks)
}

function addBook(elInput, newPrice ,rating) {
    const newBook = _createBook(elInput, newPrice,rating)
    Gbooks.unshift(newBook)
    _saveBooks(book_dt, Gbooks)
}

function expensiveBook() {
    return Gbooks.filter(book => book.price > 200).length
}
function avgBook() {
    return Gbooks.filter(book => book.price > 80 && book.price < 200).length
}
function cheapBook() {
    return Gbooks.filter(book => book.price <= 80).length
}
function setFilterBy(filterBy) {
    gFilterBy = filterBy
}
function getFilterBy() {
    return gFilterBy
}


