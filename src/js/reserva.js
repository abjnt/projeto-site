const container = document.querySelector(".datas-container");
const progress = document.querySelector(".scroll-progress");
const bar = document.querySelector(".scroll-bar");

let isDragging = false;

function updateBar() {
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) return;

    const widthPercent = (clientWidth / scrollWidth) * 100;
    progress.style.width = widthPercent + "%";

    const percent = container.scrollLeft / maxScroll;
    const maxMove = bar.clientWidth - progress.clientWidth;

    progress.style.left = percent * maxMove + "px";
}

progress.addEventListener("mousedown", () => {
    isDragging = true;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const rect = bar.getBoundingClientRect();
    let x = e.clientX - rect.left;

    const maxMove = bar.clientWidth - progress.clientWidth;

    x = Math.max(0, Math.min(x, maxMove));

    const percent = x / maxMove;

    container.scrollLeft = percent * (container.scrollWidth - container.clientWidth);
});

bar.addEventListener("click", (e) => {
    const rect = bar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;

    container.scrollLeft = percent * (container.scrollWidth - container.clientWidth);
});

container.addEventListener("scroll", updateBar);
window.addEventListener("resize", updateBar);

updateBar();