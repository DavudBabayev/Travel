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


//////////DATA//////////

let card = document.querySelector("#card");
let searchInp = document.querySelector("#search");
let sort = document.querySelector(".sort");

let url = ' http://localhost:3000/data/'

let filterArr = [];
let coppy = [];

async function getAll() {
    let res = await axios.get(url);
    let data = res.data;
    coppy = data;

    card.innerHTML = '';

    filterArr = filterArr.length || searchInp.value ? filterArr : data;

    filterArr.forEach(element => {
        card.innerHTML += `
        <div>
        <img src="${element.img}" alt="">
        <h2>${element.name}</h2>
        <p>${element.text}</p>
        <span>
            <a href="#"><i class = "bi bi-arrow-clockwise"></i></a>
            <a href="#"><i class = "bi bi-info-circle"></i></a>
            <a href="#"><i class = "bi bi-trash"></i></a>
        </span>
    </div>
        `
    })
}

getAll();

/////Search/////

searchInp.addEventListener("input", element => {
    filterArr = coppy;
    filterArr = filterArr.filter(e => {
        return e.name.toLocaleLowerCase().includes(element.target.value.toLocaleLowerCase())
    });
    getAll()
});

/////Sort/////

sort.addEventListener('change', (e) => {
    if (e.target.value == 'A-Z') {
        filterArr.sort((a, b) => a.name - b.name);
    } else if (e.target.value == 'Z-A') {
        filterArr.sort((a, b) => b.name - a.name);
    } else {
        filterArr = coppy;
    }
    getAll()
})