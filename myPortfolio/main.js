document.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
            el.classList.add("visible");
        }
    });
});