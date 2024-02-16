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

function onReadBook(ev,todoId){
    ev.stopPropagation()
    const Details = readBook(todoId)

    const elBookDetails = document.querySelector('.Book-details')
    const elSpan = elBookDetails.querySelector('h3 span')
    const elPre = elBookDetails.querySelector('pre')

    elPre.innerText = JSON.stringify(Details)
    elSpan.innerText = Details.title
    
    elBookDetails.showModal()
}