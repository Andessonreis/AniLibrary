//Dynamic Navigation Highlight

document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname.split('/').pop();
    console.log('Página Atual:', currentPage);

    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    var activeLink = document.querySelector('a[href="' + currentPage + '"]');
    if (activeLink) {
        activeLink.classList.add('active');
    }
});


// recursivide
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// Mudança de tema
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle-button");
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === "dark-theme") {
            icon.classList.remove("bi-sun");
            icon.classList.add("bi-moon");
        }
    }

    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            icon.classList.remove("bi-moon");
            icon.classList.add("bi-sun");
            localStorage.setItem("theme", "light-theme"); 
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            icon.classList.remove("bi-sun");
            icon.classList.add("bi-moon");
            localStorage.setItem("theme", "dark-theme"); 
        }
    });
});

// banner
document.addEventListener("DOMContentLoaded", function () {
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

//mangas

class Manga {
    constructor(title, genre) {
        this.title = title;
        this.genre = genre;
    }

    generateHTML() {
        return `
            <div class="manga-item">
                <img src="images/catalog/jujutsu.jpg" alt="Manga Image">
                <h3>${this.title}</h3>
                <p>Gênero: ${this.genre}</p>
            </div>
        `;
    }
}

const mangaCatalog = [
    new Manga("Jujutsu Kaisen", "Ação, Sobrenatural, Shounen")
];

function displayMangaCatalog(mangaList, container, itemCount) {
    let catalogHTML = '';
    for (let i = 0; i < itemCount; i++) {
        catalogHTML += mangaList[i].generateHTML();
    }
    container.innerHTML = catalogHTML;
}

// Agora, exiba a lista de mangas usando a função apropriada
displayMangaCatalog(mangaCatalog, mangaEmphasisList, 4);
displayMangaCatalog(mangaCatalog, mangareleaseslist, 4);
displayMangaCatalog(mangaCatalog, mangapopularlist, 4);
displayMangaCatalog(mangaCatalog, manganextreleaselist, 4);


// Get the description from the database or server-side script.
//const description = "Prepare-se para uma experiência cinematográfica com os melhores animes em destaque"
//const description = "Prepare-se para uma experiência cinematográfica com os melhores animes em destaque. Entre na ação como nunca antes.";"
