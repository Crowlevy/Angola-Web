var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('activate')
    )
    this.classList.add('activate')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.side-menu')


btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expande')

})
function activateMenu(x) {
    x.classList.toggle("change");
}