// SCRIPT DROPMENU

const btnMenu = document.getElementById('menu-drop');
const menuNav = document.getElementById('nav');

function toggleMenu(){
    menuNav.classList.toggle('ativo')
}


btnMenu.addEventListener('click', toggleMenu);

// SCRIPT DROPMENU





// SCRIPT MÁQUINA DE ESCREVER

const titulo = document.getElementById('titulo')

function typeWriter(e){
    const textoArray = e.innerHTML.split('');
    e.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => e.innerHTML += letra, 65 * i)
    })
}

typeWriter(titulo);

// SCRIPT MÁQUINA DE ESCREVER