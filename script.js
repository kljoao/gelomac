// SCRIPT DROPMENU

const btnMenu = document.getElementById('menu-drop');
const menuNav = document.getElementById('nav');

function toggleMenu(event){
    if(event.type === 'touchstart'){
        event.preventDefault();
    }
    menuNav.classList.toggle('ativo')
}


btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);

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



const linkInterno = document.querySelectorAll('a[href^="#"')

function scrollSuave(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    const topo = section.offsetTop;

    window.scrollTo({
        top: topo,
        behavior: 'smooth',
    })
}

linkInterno.forEach((i) => {
    i.addEventListener('click', scrollSuave)
})