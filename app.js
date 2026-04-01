// Menu Mobile
function toggleMenu() {
    document.getElementById('nav-mobile').classList.toggle('aberto');
}

// FAQ Accordion
function toggleFaq(element) {
    const resposta = element.querySelector('.faq-resposta');
    const isOpen = resposta.classList.contains('aberto');
    
    // Fecha todos primeiro
    document.querySelectorAll('.faq-resposta').forEach(r => r.classList.remove('aberto'));
    document.querySelectorAll('.faq-pergunta span').forEach(s => s.innerText = '+');
    
    // Abre o clicado se não estava aberto
    if (!isOpen) {
        resposta.classList.add('aberto');
        element.querySelector('.faq-pergunta span').innerText = '-';
    }
}

// Formulário de Contacto redireciona para WhatsApp
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form-contato');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = this.querySelector('input[type="text"]').value;
            const tel = this.querySelector('input[type="tel"]').value;
            const msg = this.querySelector('textarea').value;
            const texto = `Olá! Mensagem do site de ${nome} (${tel}):\n\n${msg}`;
            window.open(`https://wa.me/258847640849?text=${encodeURIComponent(texto)}`, '_blank');
        });
    }
});
