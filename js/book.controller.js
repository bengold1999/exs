'use strict'


function onInit() {
    render()
}



function onRemoveBook(ev,bookId){
    ev.stopPropagation()
    removeBook(bookId)
    render()
}

function onUpdateBook(ev,booId) {
    ev.stopPropagation()
    const bookIdx = Gbooks.findIndex(book => book.id = booId)
    Gbooks[bookIdx].price =prompt('enter new price pls')
    render()
}



function onAddBook(ev){
    ev.preventDefault()
    const elInput = document.querySelector('input')
    if (!elInput.value) return
    const newPrice = prompt('enter a price pls')
    addBook(elInput.value,newPrice)
    elInput.value=''
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
// function onCloseModal(){
//     const elBookDetails = document.querySelector('.Book-details')
//     elBookDetails.closeModal()
// }