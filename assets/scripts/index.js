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


//////////UP///////////

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 190){
        document.querySelector("#topBtn").style.right = "20px"
    } else{
        document.querySelector("#topBtn").style.right = "-200px"
    }
})


//////////DATA//////////

let card = document.querySelector("#card");
let searchInp = document.querySelector("#search");
let sort = document.querySelector("#sort");

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
            <a href="./add.html?id=${element.id}"><i class = "bi bi-arrow-clockwise"></i></a>
            <a href="./details.html?id=${element.id}"><i class = "bi bi-info-circle"></i></a>
            <a onclick = "deleteCard(${element.id})"><i class = "bi bi-trash"></i></a>
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
    if (e.target.value == 'asc') {
        filterArr.sort((a, b) => a.name.localeCompare(b.name));
    } else if (e.target.value == 'des') {
        filterArr.sort((a, b) => b.name.localeCompare(a.name));
    } else {
        filterArr = coppy;
    }
    getAll();
});

/////Delete/////

async function deleteCard(id){
    let res = await axios.delete(url + id)
    window.location.reload();
    return res.data;
}