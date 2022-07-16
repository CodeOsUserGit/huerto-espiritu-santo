/* TODOS LOS DERECHOS RESERVADOS POR LA IGLESIA INTERNACIONAL HUERTO DEL ESPIRITU SANTO */

/* NAVBAR RESPONSIVO */

const menu = document.getElementById('menu')

function mostrar(menu) {
    const contMenu = document.getElementById('menu-container')
    if (menu.value == "ocultar") {
        contMenu.style.display = "block"
        menu.value = "mostrar"
    } else {
        contMenu.style.display = "none"
        menu.value = "ocultar"
    }
}

//mi codigo
const nav_button = document.querySelector('.nav__button')
const nav__input = document.querySelector('.nav__input')

nav_button.addEventListener('click', () => {
    nav__input.classList.toggle('activar_buscar')
})

//menu
const menu__ac = document.getElementById('menu__ac')
const nav__links = document.querySelector('.nav__links')

menu__ac.addEventListener('click', () => {
    nav__links.classList.toggle('activado')
})