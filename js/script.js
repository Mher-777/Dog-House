document.addEventListener("mousemove", parallax);
function parallax(event) {
    this.querySelectorAll(".intro__parallax").forEach((shift) => {
        const y = (window.innerHeight - event.pageY * 6) / 90;

        shift.style.transform = `translateY(${y}px)`;
    });
}