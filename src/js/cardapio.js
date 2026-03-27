
const menuToggle = document.getElementById('menu-toggle');
const navBar = document.getElementById('nav-bar');

menuToggle.addEventListener('click', function() {
    // Liga/desliga a classe ativo que criamos no CSS
    menuToggle.classList.toggle('ativo');
    navBar.classList.toggle('ativo');
});

function fecharTodasAsSecoes() {
    const todasAsSecoes = document.querySelectorAll('.secao-detalhes');
    todasAsSecoes.forEach(secao => {
        secao.classList.remove('aberto');
    });
}

// ==========================================
// LÓGICA 1: CARNES
// ==========================================
const btnCarnes = document.getElementById('btn-carnes');
const conteudoCarnes = document.getElementById('conteudo-carnes');
const fecharCarnes = document.getElementById('fechar-carnes');
const setaDirCarnes = document.getElementById('dir-carnes');
const setaEsqCarnes = document.getElementById('esq-carnes');
const slidesCarnes = conteudoCarnes.querySelectorAll('.slide'); 

let slideAtualCarnes = 0;

btnCarnes.addEventListener('click', function() {
    fecharTodasAsSecoes(); // <-- Manda fechar as outras primeiro!
    conteudoCarnes.classList.add('aberto');
    conteudoCarnes.scrollIntoView({ behavior: 'smooth' });
});
fecharCarnes.addEventListener('click', function() { conteudoCarnes.classList.remove('aberto'); });

function mostrarSlideCarnes(index) {
    slidesCarnes.forEach(slide => slide.classList.remove('ativo'));
    if (index >= slidesCarnes.length) slideAtualCarnes = 0;
    else if (index < 0) slideAtualCarnes = slidesCarnes.length - 1;
    else slideAtualCarnes = index;
    slidesCarnes[slideAtualCarnes].classList.add('ativo');
}

setaDirCarnes.addEventListener('click', function() { mostrarSlideCarnes(slideAtualCarnes + 1); });
setaEsqCarnes.addEventListener('click', function() { mostrarSlideCarnes(slideAtualCarnes - 1); });

// ==========================================
// LÓGICA 2: FRANGO
// ==========================================
const btnFrango = document.getElementById('btn-frango');
const conteudoFrango = document.getElementById('conteudo-frango');
const fecharFrango = document.getElementById('fechar-frango');
const setaDirFrango = document.getElementById('dir-frango');
const setaEsqFrango = document.getElementById('esq-frango');
const slidesFrango = conteudoFrango.querySelectorAll('.slide'); 

let slideAtualFrango = 0;

btnFrango.addEventListener('click', function() {
    fecharTodasAsSecoes(); // <-- Manda fechar as outras primeiro!
    conteudoFrango.classList.add('aberto');
    conteudoFrango.scrollIntoView({ behavior: 'smooth' });
});
fecharFrango.addEventListener('click', function() { conteudoFrango.classList.remove('aberto'); });

function mostrarSlideFrango(index) {
    slidesFrango.forEach(slide => slide.classList.remove('ativo'));
    if (index >= slidesFrango.length) slideAtualFrango = 0;
    else if (index < 0) slideAtualFrango = slidesFrango.length - 1;
    else slideAtualFrango = index;
    slidesFrango[slideAtualFrango].classList.add('ativo');
}

setaDirFrango.addEventListener('click', function() { mostrarSlideFrango(slideAtualFrango + 1); });
setaEsqFrango.addEventListener('click', function() { mostrarSlideFrango(slideAtualFrango - 1); });

// ==========================================
// LÓGICA 3: PEIXES
// ==========================================
const btnPeixes = document.getElementById('btn-peixes');
const conteudoPeixes = document.getElementById('conteudo-peixes');
const fecharPeixes = document.getElementById('fechar-peixes');
const setaDirPeixes = document.getElementById('dir-peixes');
const setaEsqPeixes = document.getElementById('esq-peixes');
const slidesPeixes = conteudoPeixes.querySelectorAll('.slide'); 

let slideAtualPeixes = 0;

btnPeixes.addEventListener('click', function() {
    fecharTodasAsSecoes(); // <-- Manda fechar as outras primeiro!
    conteudoPeixes.classList.add('aberto');
    conteudoPeixes.scrollIntoView({ behavior: 'smooth' });
});
fecharPeixes.addEventListener('click', function() { conteudoPeixes.classList.remove('aberto'); });

function mostrarSlidePeixes(index) {
    slidesPeixes.forEach(slide => slide.classList.remove('ativo'));
    if (index >= slidesPeixes.length) slideAtualPeixes = 0;
    else if (index < 0) slideAtualPeixes = slidesPeixes.length - 1;
    else slideAtualPeixes = index;
    slidesPeixes[slideAtualPeixes].classList.add('ativo');
}

setaDirPeixes.addEventListener('click', function() { mostrarSlidePeixes(slideAtualPeixes + 1); });
setaEsqPeixes.addEventListener('click', function() { mostrarSlidePeixes(slideAtualPeixes - 1); });

// ==========================================
// LÓGICA 4: SOBREMESAS
// ==========================================
const btnSobremesas = document.getElementById('btn-sobremesas');
const conteudoSobremesas = document.getElementById('conteudo-sobremesas');
const fecharSobremesas = document.getElementById('fechar-sobremesas');
const setaDirSobremesas = document.getElementById('dir-sobremesas');
const setaEsqSobremesas = document.getElementById('esq-sobremesas');
const slidesSobremesas = conteudoSobremesas.querySelectorAll('.slide'); 

let slideAtualSobremesas = 0;

btnSobremesas.addEventListener('click', function() {
    fecharTodasAsSecoes(); // <-- Manda fechar as outras primeiro!
    conteudoSobremesas.classList.add('aberto');
    conteudoSobremesas.scrollIntoView({ behavior: 'smooth' });
});
fecharSobremesas.addEventListener('click', function() { conteudoSobremesas.classList.remove('aberto'); });

function mostrarSlideSobremesas(index) {
    slidesSobremesas.forEach(slide => slide.classList.remove('ativo'));
    if (index >= slidesSobremesas.length) slideAtualSobremesas = 0;
    else if (index < 0) slideAtualSobremesas = slidesSobremesas.length - 1;
    else slideAtualSobremesas = index;
    slidesSobremesas[slideAtualSobremesas].classList.add('ativo');
}

setaDirSobremesas.addEventListener('click', function() { mostrarSlideSobremesas(slideAtualSobremesas + 1); });
setaEsqSobremesas.addEventListener('click', function() { mostrarSlideSobremesas(slideAtualSobremesas - 1); });

