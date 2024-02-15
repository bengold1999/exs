'use strict'
var Gbooks
getBooks()

function getBooks() {
    Gbooks = [
        getBook('jjk', 80),
        getBook('jjk s2', 90)
    ]
}


function getBook(title, price) {
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
        <button onclick="onUpdateBook(event,'${book.id}')">Update</button>
        <button onclick="onRemoveBook('${book.id}')">Delete</button>
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
    render()
}




function makeId(length = 5) {
    var id = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return id
}


