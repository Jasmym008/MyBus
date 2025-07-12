// script.js para o MyBus - Rotas de Ônibus em Tempo Real

document.addEventListener('DOMContentLoaded', function() {
    // ============ MENU MOBILE ============
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('active');
        
        // Animação do ícone do menu
        if (!expanded) {
            this.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // ============ ANIMAÇÕES AO SCROLL ============
    const animateElements = document.querySelectorAll('.animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // ============ SCROLL SUAVE ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se estiver aberto
                if (navLinks.classList.contains('active')) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    navLinks.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });

    // ============ FORMULÁRIO DE CONTATO ============
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio do formulário
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = 'Mensagem enviada com sucesso!';
            formMessage.style.color = '#4CAF50';
            formMessage.style.display = 'block';
            
            // Limpar o formulário
            contactForm.reset();
            
            // Esconder a mensagem após 5 segundos
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }

    // ============ BOTÕES DE LOGIN/CADASTRO ============
    const btnLogin = document.querySelector('.btn-login');
    const btnRegister = document.querySelector('.btn-register');
    
    if (btnLogin && btnRegister) {
        btnLogin.addEventListener('click', function(e) {
            e.preventDefault();
            // Simulação de redirecionamento para login
            alert('Redirecionando para a página de login...');
            // window.location.href = '#login'; // Descomente para redirecionar
        });
        
        btnRegister.addEventListener('click', function(e) {
            e.preventDefault();
            // Simulação de redirecionamento para cadastro
            alert('Redirecionando para a página de cadastro...');
            // window.location.href = '#register'; // Descomente para redirecionar
        });
    }

    // ============ ATUALIZAÇÃO DINÂMICA DO HEADER AO SCROLL ============
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            header.style.backgroundColor = 'rgba(238, 226, 223, 0.95)'; // Platinum com transparência
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.backgroundColor = 'var(--platinum)';
        }
    });
});