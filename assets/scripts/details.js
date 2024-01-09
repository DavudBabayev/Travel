let id = new URLSearchParams(window.location.search).get("id");

let card = document.querySelector("#card");

let url = "http://localhost:3000/data/";

async function getCard(id){
    let res = await axios.get(url + id);
    let data = res.data;

    card.innerHTML +=`
    <div>
    <img src="${data.img}" alt="">
    <h2>${data.name}</h2>
    <p>${data.text}</p>
</div>
    `
}

getCard(id);



//////////MENU//////////

document.querySelector(".bi-list").addEventListener("click", () => {
    document.querySelector(".menudiv").style.display = "block"
})

document.querySelector(".bi-x").addEventListener("click", () => {
    document.querySelector(".menudiv").style.display = "none"
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        document.querySelector(".menudiv").style.display = "none"
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        document.querySelector("nav").style.backgroundColor = "rgb(82,182,245)"
    } else {
        document.querySelector("nav").style.backgroundColor = "transparent"
    }
})