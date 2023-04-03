const quadrado = document.querySelector('.quadrado')

quadrado.addEventListener('click', () => {
    const classeAzul = quadrado.classList.contains('azul');

    if (classeAzul) {
        quadrado.classList.remove('azul')
        quadrado.style.backgroundColor = 'blue'
        alert('Esse quadrado TEM a classe Azul')
    }
})