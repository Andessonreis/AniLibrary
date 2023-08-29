// recursivide menu-icons
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

// Mudança de tema
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle-button");
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");

        if (body.classList.contains("dark-theme")) {
            icon.classList.remove("bi-moon");
            icon.classList.add("bi-sun");
        } else {
            icon.classList.remove("bi-sun");
            icon.classList.add("bi-moon");
        }
    });
});

// banner
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const banners = document.querySelectorAll('.banner');
    let currentIndex = 0;

    function showBanner(index) {
        for (let i = 0; i < banners.length; i++) {
            banners[i].classList.remove('active');
        }
        banners[index].classList.add('active');
    }

    function nextBanner() {
        currentIndex = (currentIndex + 1) % banners.length;
        showBanner(currentIndex);
    }

    // Iniciar o carrossel
    showBanner(currentIndex);
    setInterval(nextBanner, 5000); // Alterne os banners a cada 5 segundos
});

//Mostra animes  //Mudar a logica!! posivelmente uma api ira substituir
class Anime {
    constructor(title, genre) {
        this.title = title;
        this.genre = genre;
    }

    generateHTML() {
        return `
            <div class="anime-item">
                <img src="images/catalog/Hell's_Paradise-_Jigokuraku,_Vol._5_by_Yuji_Kaku.jpg" alt="Anime Image">
                <h3>${this.title}</h3>
                <p>Gênero: ${this.genre}</p>
            </div>
        `;
    }
}

const animeCatalog = [
    new Anime("Hell's Paradise", "Ação, Sobrenatural, Seinen")
    
];

const animeEmphasisList = document.querySelector('.anime-emphasis-list');
const animereleaseslist = document.querySelector('.anime-releases-list');
const animepopularlist = document.querySelector('.anime-popular-list');
const animenextreleaselist = document.querySelector('.anime-next-release-list');

function displayAnimeCatalog(animeList, container, itemCount) {
    let catalogHTML = '';
    for (let i = 0; i < itemCount; i++) {
        catalogHTML += animeList[0].generateHTML();
    }
    container.innerHTML = catalogHTML;
}

displayAnimeCatalog(animeCatalog, animeEmphasisList, 4); 
displayAnimeCatalog(animeCatalog, animereleaseslist, 4);
displayAnimeCatalog(animeCatalog, animepopularlist, 4);
displayAnimeCatalog(animeCatalog, animenextreleaselist, 4);



// Get the description from the database or server-side script.
//const description = "Prepare-se para uma experiência cinematográfica com os melhores animes em destaque"
//const description = "Prepare-se para uma experiência cinematográfica com os melhores animes em destaque. Entre na ação como nunca antes.";"

