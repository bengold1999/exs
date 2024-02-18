'use strict'
const gQueryOptions = {
    filterBy: { title: '', Rating: 0 },
    sortBy: {},
    page: { idx: 0, size: 5 }
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

function onSetFilterBy() {
    const elSearch = document.querySelector('.search')
    // if(!elInput.value)elInput.value===0
    const filterBy = elSearch.value
    if (!filterBy) return
    // console.log(filterBy)
    setFilterBy(filterBy)
    const elRating = document.querySelector('.range')
    // console.log(elRating)

    gQueryOptions.filterBy.title = elSearch.value
    gQueryOptions.filterBy.Rating = parseInt(elRating.value)
    // gQueryOptions.page.idx = 0
    // console.log(gQueryOptions)
    // renderCars()
    render()
}
function render() {
    const books = getBooks(gQueryOptions)

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

function onSetSortBy() {
    const elSortBy = document.querySelector('.sort-list')
    const elDir = document.querySelector('.ascending')


    const dir = elDir.checked ? -1 : 1



    if (elSortBy.value === 'title') {
        gQueryOptions.sortBy = { title: dir }
    } else if (elSortBy.value === 'price') {
        gQueryOptions.sortBy = { price: dir }
    } else if (elSortBy.value === 'rating') {
        gQueryOptions.sortBy = { rating: dir }
    }
    // gQueryOptions.page.idx = 0
    render()
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
function onNextPage() {
    const totalPageCount = getTotalPageCount(gQueryOptions)
    if(gQueryOptions.page.idx < totalPageCount - 1){
        gQueryOptions.page.idx++
    } else {
        gQueryOptions.page.idx = 0
    }
    render()
}

function onPrevPage() {
    gQueryOptions.page.idx--
    if (gQueryOptions.page.idx) return

    render()
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
    const elRating = document.querySelector('.range')
    elTitle.value = ""
    elRating.value = 0
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