//////////MENU//////////

document.querySelector(".bi-list").addEventListener("click", ()=>{
    document.querySelector(".menudiv").style.display = "block"
})

document.querySelector(".bi-x").addEventListener("click", ()=>{
    document.querySelector(".menudiv").style.display = "none"
})

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 992){
        document.querySelector(".menudiv").style.display = "none"
    }
})

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 500){
        document.querySelector("nav").style.backgroundColor = "rgb(82,182,245)"
    } else{
        document.querySelector("nav").style.backgroundColor = "transparent"
    }
})