'use strict'


function onInit() {
    render(Gbooks)
}



function onRemoveBook(ev, bookId) {
    ev.stopPropagation()
    removeBook(bookId)
    render(Gbooks)
    showMessage('Book was successfully deleted.')
}

function onUpdateBook(ev, booId) {
    ev.stopPropagation()
    const bookIdx = Gbooks.findIndex(book => book.id = booId)
    Gbooks[bookIdx].price = prompt('enter new price pls')
    render(Gbooks)
    showMessage('Book was successfully update.')
    _saveBooks()
}



function onAddBook(ev) {
    ev.preventDefault()
    const elInput = document.querySelector('.add')
    if (!elInput.value) return
    const newPrice = prompt('enter a price pls')
    addBook(elInput.value, newPrice)
    elInput.value = ''
    render(Gbooks)
    showMessage('Book was successfully added.')
}

function onReadBook(ev, todoId) {
    ev.stopPropagation()
    const Details = readBook(todoId)

    const elBookDetails = document.querySelector('.Book-details')
    const elSpan = elBookDetails.querySelector('h3 span')
    const elPre = elBookDetails.querySelector('pre')

    elPre.innerText = JSON.stringify(Details)
    elSpan.innerText = Details.title

    elBookDetails.showModal()
}

function Onsearch(elSearch) {
    const value = elSearch.value.toLowerCase()
    const filteredBooks = sBook(value)
    render(filteredBooks)
    // console.log(JSON.parse(titleSearch))



}


function clearSearch() {
    var elInput = document.querySelector('.search')
    elInput.value = ''
    if (elInput.value === '') render(Gbooks)

}


function stats() {
    var elExp = document.querySelector('.expensive')
    console.log(elExp)
    var elAvg = document.querySelector('.average')
    var elChp = document.querySelector('.cheap')

    elExp.innerText = expensiveBook()
    elAvg.innerText = avgBook()
    elChp.innerText = cheapBook()
}

// function onCloseModal(){
//     const elBookDetails = document.querySelector('.Book-details')
//     elBookDetails.closeModal()
// }