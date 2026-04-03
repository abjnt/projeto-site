const container = document.querySelector(".datas-container");
const progress = document.querySelector(".scroll-progress");
const bar = document.querySelector(".scroll-bar");
const datasDiv = document.querySelector(".datas");
const btnReservar = document.getElementById("btnReservar");

let isDragging = false;


// =============================
// GERAR DATAS AUTOMÁTICAS
// =============================
const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

function gerarDatas(qtd = 14) {
    datasDiv.innerHTML = "";

    const hoje = new Date();

    for (let i = 0; i < qtd; i++) {
        const data = new Date();
        data.setDate(hoje.getDate() + i);

        const dia = diasSemana[data.getDay()];
        const numero = data.getDate();
        const mes = meses[data.getMonth()];

        const btn = document.createElement("button");
        btn.classList.add("data-btn");

        btn.innerHTML = `
            <span class="dia">${dia}</span>
            <span class="numero">${numero}</span>
            <span class="mes">${mes}</span>
        `;

        datasDiv.appendChild(btn);
    }
}

gerarDatas();


// =============================
// SELEÇÃO (ATIVO)
// =============================
function ativarSelecao(selector) {
    document.addEventListener("click", (e) => {
        if (!e.target.closest(selector)) return;

        const grupo = document.querySelectorAll(selector);
        grupo.forEach(btn => btn.classList.remove("ativo"));

        e.target.closest(selector).classList.add("ativo");

        salvarDados();
    });
}

ativarSelecao(".data-btn");
ativarSelecao(".pessoas-btn");
ativarSelecao(".hora-btn");
ativarSelecao(".ambiente-btn");


// =============================
// SCROLL SNAP
// =============================
container.style.scrollSnapType = "x mandatory";

function aplicarSnap() {
    document.querySelectorAll(".data-btn").forEach(btn => {
        btn.style.scrollSnapAlign = "center";
    });
}

aplicarSnap();


// =============================
// ATUALIZA BARRA
// =============================
function updateBar() {
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;

    const widthPercent = (clientWidth / scrollWidth) * 100;
    progress.style.width = widthPercent + "%";

    const percent = container.scrollLeft / maxScroll;
    progress.style.left = percent * (100 - widthPercent) + "%";
}

container.addEventListener("scroll", updateBar);
window.addEventListener("resize", updateBar);


// =============================
// DRAG NA BARRA
// =============================
bar.addEventListener("mousedown", (e) => {
    isDragging = true;

    const rect = bar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;

    container.scrollLeft = percent * (container.scrollWidth - container.clientWidth);
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const rect = bar.getBoundingClientRect();
    let percent = (e.clientX - rect.left) / rect.width;

    percent = Math.max(0, Math.min(1, percent));

    container.scrollLeft = percent * (container.scrollWidth - container.clientWidth);
});


// =============================
// SALVAR DADOS
// =============================
function salvarDados() {
    const dados = {
        data: document.querySelector(".data-btn.ativo")?.innerText,
        pessoas: document.querySelector(".pessoas-btn.ativo")?.innerText,
        hora: document.querySelector(".hora-btn.ativo")?.innerText,
        ambiente: document.querySelector(".ambiente-btn.ativo")?.innerText
    };

    localStorage.setItem("reserva", JSON.stringify(dados));
}


// =============================
// BOTÃO RESERVAR (SEM POPUP)
// =============================
btnReservar.addEventListener("click", () => {

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    const data = document.querySelector(".data-btn.ativo")?.innerText;
    const pessoas = document.querySelector(".pessoas-btn.ativo")?.innerText;
    const hora = document.querySelector(".hora-btn.ativo")?.innerText;
    const ambiente = document.querySelector(".ambiente-btn.ativo")?.innerText;

    if (!nome || !telefone || !data || !pessoas || !hora || !ambiente) {
        alert("Preencha tudo!");
        return;
    }

    // 🔥 feedback visual
    btnReservar.innerText = "Reserva feita ✅";
    btnReservar.classList.add("sucesso");
    btnReservar.disabled = true;

    // volta ao normal depois
    setTimeout(() => {
        btnReservar.innerText = "Reservar Mesa 🔥";
        btnReservar.classList.remove("sucesso");
        btnReservar.disabled = false;
    }, 3000);
});


const menuToggle = document.getElementById('menu-toggle');
const navBar = document.getElementById('nav-bar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navBar.classList.toggle('active');
});



updateBar();