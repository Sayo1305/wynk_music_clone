
console.log("working");
const change_theme = document.getElementById('theme');
const change_theme_repo = document.getElementById('theme_repo');
const nav = document.getElementById('nav');
const body = document.getElementById('sk');
const font_ch = document.querySelectorAll('[font_change]');
let theme = "dark";
const promo = document.getElementById('promo');
const nav_repo_tile = document.getElementById('nav_repo_tile');
const search = document.querySelector('#searched');
const search_bar = document.getElementsByClassName('.search_bar');
let active_cell = 1;
const nav_rep = document.getElementById("navbar_repo");
const deactive = document.querySelector('.decative');
const drop_down = document.querySelector('.drop_down');


nav_rep.addEventListener('click',()=>{
    if(active_cell == 1)
    {
        drop_down.classList.remove('deactive');
        active_cell = 0;
    }    
    else{
        active_cell = 1;
        drop_down.classList.add('deactive');
    }
});

drop_down.addEventListener('mouseleave',()=>{
    active_cell = 1;
    drop_down.classList.add('deactive');
});





change_theme.addEventListener('click',()=>{
    console.log('clicking');
    if(theme == "dark")
    {
        change_theme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        change_theme.style.color = "black";
        nav.style.backgroundColor = "white";
        body.style.backgroundColor = "white";
        promo.style.backgroundColor = "rgb(242 242 242)";
        font_ch.forEach((f)=>{
            f.setAttribute("style","color: black;");
        });
        theme = "light";
    }
    else
    {
        change_theme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        theme = "dark";
        change_theme.style.color = "white";
        nav.style.backgroundColor = "rgb(33 37 45)";
        body.style.backgroundColor = "rgb(23, 25, 29)";

        promo.style.backgroundColor = "rgb(43, 43, 43)";
        font_ch.forEach((f)=>{
            f.setAttribute("style","color: white;");
        })
    }
})

change_theme_repo.addEventListener('click',()=>{
    console.log('clicking');
    if(theme == "dark")
    {
        change_theme_repo.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        change_theme_repo.style.color = "black";
        nav.style.backgroundColor = "white";
        body.style.backgroundColor = "white";
        promo.style.backgroundColor = "rgb(242 242 242)";
        nav_repo_tile.style.backgroundColor = "white";
        font_ch.forEach((f)=>{
            f.setAttribute("style","color: black;");
        });
        theme = "light";
    }
    else
    {
        change_theme_repo.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        theme = "dark";
        change_theme_repo.style.color = "white";
        nav.style.backgroundColor = "rgb(33 37 45)";
        body.style.backgroundColor = "rgb(23, 25, 29)";
        promo.style.backgroundColor = "rgb(43, 43, 43)";
        nav_repo_tile.style.backgroundColor = "rgb(33 37 45)";
        font_ch.forEach((f)=>{
            f.setAttribute("style","color: white;");
        })
    }
})



