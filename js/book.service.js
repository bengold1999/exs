'use strict'
var Gbooks
getBooks()

function getBooks(){
Gbooks=[
   getBook('jjk','80')
]
}


function getBook(title,price){
    return{
        id: makeId(),
        title,
        price,
        imgUrl:'png'
    }
}



function makeId(length = 5) {
    var id = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return id
}


