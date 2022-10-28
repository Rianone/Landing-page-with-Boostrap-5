const preloader = document.getElementById("preloader");

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        preloader.style.display = "none"
    }, 2000)
})