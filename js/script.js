// 1. Efeito de Digitação no Título (Hero Section)
function writeTitle(){
    const title = document.querySelector('.digitando');
    if(!title) return;
    
    const words = ["Web Developer", "UX/UI Designer", "Desenvolvedor Front-End"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            title.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            title.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // pausa ao terminar de digitar
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // pausa antes de digitar a próxima
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    title.textContent = ''; 
    typeEffect();
}
writeTitle();

// 2. Menu Mobile
function menuMobile(){
    const activeMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');
    if(!activeMenu || !navMenu) return;
    
    activeMenu.addEventListener('click',()=>{
        activeMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });
}
menuMobile();

// 3. Filtragem Dinâmica de Projetos (Orientada a Classes)
function initProjectFilter(){
    const filterButtons = document.querySelectorAll('.projects_models ul li');
    const projectCards = document.querySelectorAll('.projects_storage ul li.project-card');
    
    if (filterButtons.length === 0 || projectCards.length === 0) return;
    
    // Define o botão "All" como ativo por padrão no carregamento
    const allBtn = document.querySelector('.projects_models ul li.all');
    if (allBtn) allBtn.classList.add('active');
    
    filterButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            // Remove classe active de todos os botões e adiciona ao clicado
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Pega a classe de filtro (ex: all, design, webSite)
            const filter = e.target.className.split(' ')[0];
            
            projectCards.forEach(card => {
                card.classList.remove('active');
                card.style.display = 'none';
                
                if (filter === 'all' || card.classList.contains(filter)) {
                    // Força um reflow para reiniciar as animações CSS
                    void card.offsetWidth;
                    card.style.display = 'flex';
                    card.classList.add('active');
                }
            });
        });
    });
}
initProjectFilter();

// 4. Alternador de Tema (Dark / Light Mode)
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;
    
    const icon = themeBtn.querySelector('i');
    
    // Verifica a preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
    
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        
        // Atualiza a preferência no localStorage
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Altera o ícone do botão
        if (icon) {
            if (isLight) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    });
}
initThemeToggle();

// 5. Integração com WhatsApp (Formulário de Contato Dinâmico)
function initContactForm() {
    const contactForm = document.getElementById('whatsapp-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameVal = document.getElementById('form-name').value.trim();
        const emailVal = document.getElementById('form-email').value.trim();
        const messageVal = document.getElementById('form-message').value.trim();
        
        if (!nameVal || !emailVal || !messageVal) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }
        
        const phone = "5511953937222"; // Seu número configurado
        
        // Monta a mensagem formatada para o WhatsApp
        const formatMsg = `Olá Yago!\n\nMe chamo *${nameVal}* (${emailVal}).\n\n*Mensagem:*\n${messageVal}`;
        
        // Codifica a mensagem para a URL
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(formatMsg)}`;
        
        // Abre o link do WhatsApp em uma nova aba
        window.open(whatsappUrl, '_blank');
        
        // Limpa o formulário após o envio
        contactForm.reset();
    });
}
initContactForm();

// === NOVAS FUNÇÕES (WOW FACTOR) ===

// Reveal on Scroll (Animações de entrada)
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}
revealOnScroll();

// Header Glassmorphism (Menu Fixo e Transparente)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(!header) return;
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animate Skill Bars
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
            }
        });
    }, { threshold: 0.2 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}
animateSkills();