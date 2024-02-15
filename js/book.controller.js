'use strict'


function onInit() {
    render()
}



function onRemoveBook(){
    return removeBook()
}

function onUpdateBook(ev,booId) {
    ev.stopPropagation()
    const bookIdx = Gbooks.findIndex(book => book.id = booId)
    Gbooks[bookIdx].price =prompt('enter new price pls')
    render()
}



function onAddBook(){
    const elInput = document.querySelector('input')
    const newPrice = prompt('enter a price pls')
    const newBook = getBook(elInput.value,newPrice)
    Gbooks.unshift(newBook)
    render()
}