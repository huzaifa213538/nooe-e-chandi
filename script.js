function toggleMenu(){

document.getElementById("nav")
.classList.toggle("active")

}


function changeImage(img){

document.getElementById("mainImage").src
= img.src

}


const params =
new URLSearchParams(window.location.search)

if(params.get("name")){

document.getElementById("productName")
.innerText = params.get("name")

document.getElementById("productPrice")
.innerText = "₹" + params.get("price")

}


function payNow(){

const price =
params.get("price") || ""

window.location.href =
`upi://pay?pa=9821201453@ptyes&pn=Noore-e-Chandi&am=${price}&cu=INR`

}
