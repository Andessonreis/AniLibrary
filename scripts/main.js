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
