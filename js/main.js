let menu_open = document.querySelector('.mobile_menu__open')
let menu_close = document.querySelector('.mobile_menu__close')
let mobile_menu = document.querySelector('.mobile_menu');

menu_open.onclick = () => {
    mobile_menu.classList.toggle('active')
}

menu_close.onclick = () => {
    mobile_menu.classList.toggle('active')
}