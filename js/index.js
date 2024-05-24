//! formar de captar elementos del DOM
// querySelector -> selecciona un elemento del DOM
// si queremos seleccionar un elemento por su clase o id
// usamos un punto para las clases y un # para los id
// ejemplo:
// querySelector('.clase') -> selecciona un elemento por su clase
// querySelector('#id') -> selecciona un elemento por su id
// querySelectorAll -> selecciona todos los elementos del DOM
// getElementById -> selecciona un elemento del DOM por su id
// getElementsByClassName -> selecciona todos los elementos del DOM por su clase

//! tipos de eventos
//addEventListener(un evento, una funcion)
// los eventos pueden ser 
// -> click 
// -> mouse over 
// -> mouse out 
// -> keydown 
// -> keyup 
// -> keypress

//! funciones callback (breve, brevisima explicación)
// un callback es una function que se pasa como parámetro de otra function


const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')


h1.addEventListener('click', () => {

    h1.classList.add('rojo')
    // al h1 de la lista de clases agregame la clase rojo

    h2.classList.remove('oculto')
    // al h2 de la lista de clases quitame la clase oculto
})