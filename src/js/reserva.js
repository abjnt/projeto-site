const container = document.querySelector(".datas-container");
const progress = document.querySelector(".scroll-progress");
const bar = document.querySelector(".scroll-bar");

let isDragging = false;

/* atualiza posição da barra */
function updateBar() {
    const maxScroll = container.scrollWidth - container.clientWidth;
    const percent = container.scrollLeft / maxScroll;

    const barWidth = bar.clientWidth;
    const progressWidth = progress.clientWidth;

    const maxMove = barWidth - progressWidth;

    progress.style.left = percent * maxMove + "px";
}

/* arrastar barra */
progress.addEventListener("mousedown", () => {
    isDragging = true;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const barRect = bar.getBoundingClientRect();
    let x = e.clientX - barRect.left;

    const progressWidth = progress.clientWidth;
    const maxMove = bar.clientWidth - progressWidth;

    x = Math.max(0, Math.min(x, maxMove));

    const percent = x / maxMove;

    container.scrollLeft = percent * (container.scrollWidth - container.clientWidth);
});

/* sincroniza quando rolar */
container.addEventListener("scroll", updateBar);
window.addEventListener("resize", updateBar);

/* inicia */
updateBar();