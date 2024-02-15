'use strict'


function onInit() {
    render()
}

function render() {
    const strHtmls = Gbooks.map(book => ` 
     <tr>
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td class="action-buttons">
        <button>Read</button>
        <button>Update</button>
        <button>Delete</button>
    </td>
</tr>
    `)

    console.log(strHtmls.join(''))
    const elRender = document.querySelector('tbody')
    elRender.innerHTML = strHtmls.join('')

}