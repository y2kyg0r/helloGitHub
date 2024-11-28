document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const pais = document.getElementById('pais').value;
        const estado = document.getElementById('estado').value;
        const cidade = document.getElementById('cidade').value;
        const bairro = document.getElementById('bairro').value;
        let enderecos = JSON.parse(localStorage.getItem('enderecos')) || [];
        let id = enderecos.length ? enderecos[enderecos.length - 1].id + 1 : 1;
        while (enderecos.some(endereco => endereco.id === id)) {
    		id++;
}
        const endereco = { id, pais, estado, cidade, bairro};
        enderecos.push(endereco);
        localStorage.setItem('enderecos', JSON.stringify(enderecos));
        modal.style.display = "block";
        form.reset();
    });
});
// Obtém o modal
let modal = document.getElementById("myModal");

// Obtém o elemento <span> que fecha o modal
let span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}
// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

