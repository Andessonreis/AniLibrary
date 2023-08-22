document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-icon");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");
    const navLinks = document.querySelectorAll(".nav-items li a");

    menuBtn.addEventListener("click", () => {
        items.classList.toggle("active");
        menuBtn.classList.toggle("hide");
        searchBtn.classList.toggle("hide");
        cancelBtn.classList.toggle("show");
    });

    cancelBtn.addEventListener("click", () => {
        items.classList.remove("active");
        menuBtn.classList.remove("hide");
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        form.classList.remove("active");
    });

    searchBtn.addEventListener("click", () => {
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            items.classList.remove("active"); // Fechando o menu
            menuBtn.classList.remove("hide");
            searchBtn.classList.remove("hide");
            cancelBtn.classList.remove("show");
            form.classList.remove("active");
        });
    });
});

// Catalago de animes
class Anime {
    constructor(title, genre) {
        this.title = title;
        this.genre = genre;
    }

    generateHTML() {
        return `
            <div class="anime-item">
                <h3>${this.title}</h3>
                <p>Gênero: ${this.genre}</p>
            </div>
        `;
    }
}

const animeCatalog = [
    new Anime("Hell's Paradise", "Ação, Sobrenatural, Seinen");
];

const animeList = document.querySelector('.anime-list');

function displayAnimeCatalog() {
    let catalogHTML = '';
    for (const anime of animeCatalog) {
        catalogHTML += anime.generateHTML();
    }
    animeList.innerHTML = catalogHTML;
}

displayAnimeCatalog();


