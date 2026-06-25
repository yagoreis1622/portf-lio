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




function menuMobile(){
    const activeMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');
    
    
    activeMenu.addEventListener('click',()=>{
        activeMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });

}
menuMobile();

// Função aboutMe removida para dar lugar à nova Timeline Vertical

const listAll = document.querySelectorAll('.projects_storage ul li');
const buttomGeral = document.querySelectorAll('.projects_models ul li');
const buttomAll = document.querySelectorAll('.projects_models .all');


function removeClick(index){
    buttomGeral.forEach((item)=>{
        item.classList.remove('active');
    });
    buttomGeral[index].classList.add('active');
}

buttomGeral.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        removeClick(index);
    })
    
})

function showList(list, buttom = "all"){
    list.forEach((item) =>{
        item.classList.remove('active')
    });
    if(buttom == 'design'){
        list[0].classList.add('active');
        list[1].classList.add('active');
    }
    if(buttom == 'graphic'){
        list[2].classList.add('active');
        list[3].classList.add('active');
    }
    if(buttom == 'webSite'){
        list[4].classList.add('active');
        list[5].classList.add('active');
        list[6].classList.add('active');
        list[7].classList.add('active');
    }
    if(buttom == 'all'){
        list[0].classList.add('active');
        list[1].classList.add('active');
        list[2].classList.add('active');
        list[3].classList.add('active');
        list[4].classList.add('active');
        list[5].classList.add('active');
        list[6].classList.add('active');
        list[7].classList.add('active');
    }
}

buttomGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButtom = e.target
        if(currentButtom.classList.contains('all')){
            showList(listAll)
        }
        if(currentButtom.classList.contains('design')){
            showList(listAll, "design")
        }
        if(currentButtom.classList.contains('graphic')){
            showList(listAll, "graphic")
        }
        if(currentButtom.classList.contains('webSite')){
            showList(listAll, "webSite")
        }
        if(currentButtom.classList.contains('all')){
            showList(listAll, "all")
        }
    })
})

// === NOVAS FUNÇÕES (WOW FACTOR) ===

// 1. Reveal on Scroll (Animações de entrada)
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

// 2. Header Glassmorphism (Menu Fixo e Transparente)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 3. Animate Skill Bars
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}
animateSkills();