'use strict'
var book_dt = 'book_dt'
var Gbooks
_createBooks()
// var emty = []
var gFilterBy = ''

function getBooks(options) {
    const books = _filterBooks(options.filterBy)

   
    if(options.sortBy.price) { 
        books.sort((book1, book2) => (book1.price - book2.price) * options.sortBy.price)
    } else if(options.sortBy.title) {
        books.sort((book1, book2) => (book1.title.localeCompare(book2.title)) * options.sortBy.title)
    }else if(options.sortBy.rating) { 
        books.sort((book1, book2) => (book1.rating - book2.rating) * options.sortBy.rating)
    }
    const startIdx = options.page.idx * options.page.size
    return books.slice(startIdx, startIdx + options.page.size)
}

function _filterBooks(filterBy) {
    return Gbooks.filter((book) => 
       book.title.includes(filterBy.title)||
        book.rating >= filterBy.Rating)
}

function _createBooks() {
    var books = loadFromStorage(book_dt)
    if (!books || !books.length) {
        books = [
            _createBook('jjk', 80 , 5),
            _createBook('jjk', 80 , 5),
            _createBook('jjk', 80 , 5),
            _createBook('jjk', 80 , 5),
            _createBook('jjk', 80 , 5),
            _createBook('jjk', 80 , 5),
            _createBook('jjk', 80 , 5),
            _createBook('jjk', 80 , 5),
            _createBook('jjk', 80 , 5),
            _createBook('jjk', 80 , 5),
            _createBook('jjk', 80 , 5),
            _createBook('jjk', 80 , 5),
            _createBook('jjk', 80 , 5),
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


function getTotalPageCount(options) {
    const books = _filterBooks(options.filterBy)
    return Math.ceil(books.length / options.page.size)
}