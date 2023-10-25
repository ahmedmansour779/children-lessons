let btn = document.getElementById('btn')
let inp = document.getElementById('inp')
let box = document.querySelectorAll('.box');

btn.onclick = function () {
    if (inp.value != '') {
        box[0].innerHtml += `
        <p>item</p>
        `
        inp.value = ''
    }

    dragItem()
}

function dragItem() {
    let items = document.querySelectorAll('.item')
    items.forEach(item => {
        item.addEventListener("dragstart", function () {

        })

        item.addEventListener("dragend", function () {

        })
    })
}