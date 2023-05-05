const titulo = document.getElementById('titulo')

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 65 * i)
    })
}

typeWriter(titulo);