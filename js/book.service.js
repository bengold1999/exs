'use strict'
var book_dt = 'book_dt'
var Gbooks
_getBooks()
var emty =[]

function _getBooks() {
    Gbooks = loadFromStorage(book_dt)
    console.log(Gbooks)
    if (!Gbooks) {
        Gbooks = [
            _getBook('jjk', 80),
            _getBook('jjk s2', 90)
        ]
        _saveBooks()
    }
}


function _getBook(title, price) {
    return {
        id: makeId(),
        title,
        price,
        imgUrl: 'png'
    }
}


function render() {
    const strHtmls = Gbooks.map(book => ` 
     <tr>
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td class="action-buttons">
        <button>Read</button>
        <button onclick="onReadBook(event,'${book.id}')">Details</button>
        <button onclick="onUpdateBook(event,'${book.id}')">Update</button>
        <button onclick="onRemoveBook(event,'${book.id}')">Delete</button>
    </td>
</tr>
    `)

    console.log(strHtmls.join(''))
    const elRender = document.querySelector('tbody')
    elRender.innerHTML = strHtmls.join('')

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


function _saveBooks() {
    saveToStorage(book_dt, Gbooks)
}

function addBook(elInput,newPrice){
    const newBook = _getBook(elInput.value,newPrice)
    Gbooks.unshift(newBook)
    _saveBooks()
}



function makeId(length = 5) {
    var id = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return id
}


