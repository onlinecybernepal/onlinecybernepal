// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Service Search
const searchInput = document.getElementById("serviceSearch");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();

        document.querySelectorAll(".card, .service-card, .category-card").forEach(item => {
            item.style.display = item.innerText.toLowerCase().includes(value)
                ? ""
                : "none";
        });
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Navbar Shadow on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 20) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});
window.onload = function () {
    window.scrollTo(0, 0);
};