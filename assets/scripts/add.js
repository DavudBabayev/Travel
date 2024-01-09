let id = new URLSearchParams(window.location.search).get("id");

let url = "http://localhost:3000/data/";

let nameInp = document.querySelector("#name");
let textInp = document.querySelector("#text");
let fileInp = document.querySelector("#file");
let image = document.querySelector("#img2");
let form = document.querySelector("form")

axios(url + id).then((res)=>{
    nameInp.value = res.data.name;
    textInp.value = res.data.text;
    image.src = res.data.img;
});

fileInp.addEventListener("input", (e)=>{
    let file = e.target.files[0];
    if(file){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>{
            image.src = reader.result;
        }
    }
});

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!id){
        axios.post(url, {
            img: image.src,
            name: nameInp.value,
            text: textInp.value
        })
    } else{
        axios.patch(url + id, {
            img: image.src,
            name: nameInp.value,
            text: textInp.value
        })
    }
    window.location = "./index.html";
});