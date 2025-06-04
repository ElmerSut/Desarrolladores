const menu = document.querySelector(".menu"); //selecciona el elemento con una clase menu y lo guarda en constante menu
const toggle = document.querySelector(".toggle"); // selecciona el botón con la clase toggle y lo guarda en la constante toggle
toggle.addEventListener("click", () => { //agrega un escuchador de evento al botón de compartir toggle cuando el usuario 
                                        //realice un click, se ejecuta la función
    menu.classList.toggle("active"); //Esta linea alterna agrega o quita la calase active en el menu,
                                    //  sirve para mostra u ocultar con animaciones definidas en css
})