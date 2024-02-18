'use strict'
const gQueryOptions = {
    filterBy: { title: '', Rating: 0 },
    // sortBy: {},
    // page: { idx: 0, size: 3 }
}

function onInit() {
    render()
}



function onRemoveBook(ev, bookId) {
    ev.stopPropagation()
    removeBook(bookId)
    render()
    showMessage('Book was successfully deleted.')
}

function onUpdateBook(ev, booId) {
    ev.stopPropagation()
    const newPrice = +prompt('Enter a new price')
    if (!newPrice) return alert('You must enter a new price')
    updateBook(booId, newPrice)
    renderBooks()
    showMessage('Book was successfully update.')

}

function onSetFilterBy(elInput) {
    // if(!elInput.value)elInput.value===0
    const filterBy = elInput.value
    if (!filterBy) return
    console.log(filterBy)
    setFilterBy(filterBy)
    const elSearch = document.querySelector('.search')
    const elRating = document.querySelector('.range')

    gQueryOptions.filterBy.title = elSearch.value
    gQueryOptions.filterBy.Rating = elRating.value

    // gQueryOptions.page.idx = 0
    // renderCars()
    render()
}
function render() {
    const books = getBooks()
    const strHtmls = books.map(book => ` 
     <tr>
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td>${book.rating}</td>
    <td class="action-buttons">
        <button onclick="onReadBook(event,'${book.id}')">Read</button>
        <button onclick="onUpdateBook(event,'${book.id}')">Update</button>
        <button onclick="onRemoveBook(event,'${book.id}')">Delete</button>
    </td>
</tr>
    `)

    // console.log(strHtmls.join(''))
    const elRender = document.querySelector('tbody')
    elRender.innerHTML = strHtmls.join('')
    stats()
}



function onAddBook(ev) {
    ev.preventDefault()
    const title = prompt('Book title')
    const price = +prompt('Book price')
    const rating = +prompt('pls give rating 1-5')
    // const imgUrl = prompt('Book image url')
    if (!title || !price || rating < 0 || rating > 5 || !rating) return
    addBook(title, price, rating)
    render()
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

// function Onsearch(elSearch) {
//     const value = elSearch.value.toLowerCase()
//     const filteredBooks = sBook(value)
//     render(filteredBooks)
//     // console.log(JSON.parse(titleSearch))



// }
function onResetFilter() {

    setFilterBy('')
    render()

    // clean the inputs 
    const elTitle = document.querySelector('.search')
    elTitle.value = ""
}

// function clearSearch() {
//     var elInput = document.querySelector('.search')
//     elInput.value = ''
//     render()

// }


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