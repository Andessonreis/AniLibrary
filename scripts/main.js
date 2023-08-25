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


//


const posts = [
    {img: "", title:"dd"},
    
]

const div = document.querySelector('.anime-list');


const item = document.querySelector('.anime-item');
console.log(item)

const gerarItem=()
item.innerHTML = 
 <img src="images/hellparadise.jpe" alt="Hell's Paradise">
<h3>Hell's Paradise</h3>
<p>Gênero: Ação, Sobrenatural, Seinen</p> 

`
for (let index = 0; index < 4; index++) {
   div.appendChild(item);
}
