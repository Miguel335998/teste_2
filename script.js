document.querySelectorAll('.casa').forEach(casa => {
    casa.addEventListener('click', function() {
        this.classList.toggle('clicked'); // Alterna a cor ao clicar
    });
});
