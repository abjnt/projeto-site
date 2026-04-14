const container = document.querySelector(".datas-container");
const progress = document.querySelector(".scroll-progress");
const bar = document.querySelector(".scroll-bar");
const datasDiv = document.querySelector(".datas");
const btnReservar = document.getElementById("btnReservar");

let isDragging = false;

const diasSemana = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
const meses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

function gerarDatas(qtd = 14) {
    datasDiv.innerHTML = "";
    const hoje = new Date();

    for (let i = 0; i < qtd; i++) {
        const d = new Date();
        d.setDate(hoje.getDate() + i);

        datasDiv.innerHTML += `
            <button class="data-btn">
                <span class="dia">${diasSemana[d.getDay()]}</span>
                <span class="numero">${d.getDate()}</span>
                <span class="mes">${meses[d.getMonth()]}</span>
            </button>
        `;
    }
}

gerarDatas();

[".data-btn",".pessoas-btn",".hora-btn",".ambiente-btn"].forEach(sel => {
    document.addEventListener("click", e => {
        const el = e.target.closest(sel);
        if (!el) return;

        document.querySelectorAll(sel).forEach(b => b.classList.remove("ativo"));
        el.classList.add("ativo");
        salvarDados();
    });
});

container.style.scrollSnapType = "x mandatory";
document.querySelectorAll(".data-btn").forEach(b => b.style.scrollSnapAlign = "center");

function updateBar() {
    const max = container.scrollWidth - container.clientWidth;
    if (max <= 0) return;

    const w = (container.clientWidth / container.scrollWidth) * 100;
    const p = container.scrollLeft / max;

    progress.style.width = w + "%";
    progress.style.left = p * (100 - w) + "%";
}

container.addEventListener("scroll", updateBar);
window.addEventListener("resize", updateBar);

bar.addEventListener("mousedown", () => isDragging = true);
document.addEventListener("mouseup", () => isDragging = false);

document.addEventListener("mousemove", e => {
    if (!isDragging) return;

    const rect = bar.getBoundingClientRect();
    let p = (e.clientX - rect.left) / rect.width;
    p = Math.max(0, Math.min(1, p));

    container.scrollLeft = p * (container.scrollWidth - container.clientWidth);
});

function pegarAtivo(sel) {
    return document.querySelector(sel)?.innerText;
}

function salvarDados() {
    const dados = {
        data: pegarAtivo(".data-btn.ativo"),
        pessoas: pegarAtivo(".pessoas-btn.ativo"),
        hora: pegarAtivo(".hora-btn.ativo"),
        ambiente: pegarAtivo(".ambiente-btn.ativo")
    };

    localStorage.setItem("reserva", JSON.stringify(dados));
    return dados;
}

btnReservar.addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    const dados = salvarDados();

    if (!nome || !telefone || Object.values(dados).some(v => !v)) {
        alert("Preencha tudo!");
        return;
    }

    btnReservar.innerText = "Reserva feita";
    btnReservar.classList.add("sucesso");
    btnReservar.disabled = true;

    setTimeout(() => {
        btnReservar.innerText = "Reservar Mesa";
        btnReservar.classList.remove("sucesso");
        btnReservar.disabled = false;
    }, 3000);
});

document.getElementById("menu-toggle").onclick = () => {
    document.getElementById("menu-toggle").classList.toggle("active");
    document.getElementById("nav-bar").classList.toggle("active");
};

updateBar();