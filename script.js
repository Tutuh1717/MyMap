// Menu toggle para mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Validação do formulário
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();

    // Limpa mensagem anterior
    formMessage.textContent = '';

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if(nome.length < 3){
      formMessage.textContent = 'Por favor, informe um nome válido com ao menos 3 caracteres.';
      form.nome.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      formMessage.textContent = 'Por favor, informe um e-mail válido.';
      form.email.focus();
      return;
    }

    if(mensagem.length < 10){
      formMessage.textContent = 'A mensagem deve ter ao menos 10 caracteres.';
      form.mensagem.focus();
      return;
    }

    formMessage.style.color = 'green';
    formMessage.textContent = 'Mensagem enviada com sucesso!';

    // Simula envio
    form.reset();

    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.style.color = 'red';
    }, 5000);
  });
}

// Efeito hover dinâmico para cards (exemplo extra)
const productCards = document.querySelectorAll('.product-card, .product-item');
productCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 8px 16px rgba(0,123,255,0.6)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});
