var nav = document.querySelector("nav");

window.onscroll = function () {
    if (window.pageYOffset > 100)
    {
        nav.classList.add("bg-dark", "shadow");
    }
    else
    {
        nav.classList.remove("bg-dark", "shadow");
    }
}