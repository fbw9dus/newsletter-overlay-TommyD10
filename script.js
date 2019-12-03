var trigger = document.querySelector(".mail")
var modal = document.querySelector(".modal")
var modalContent = document.querySelector(".modal-content")
var newsText = document.querySelector(".newsText")
var inputDel = document.querySelector("[type = email]")
var bestellen = document.querySelector(".bestellen")
var exitButton = document.querySelector(".exitButton")
var xButton = document.querySelector(".xButton")


const getNews = (event) =>{
    modal.style.display = "block"
}


const exit = (event) => {
    event.stopPropagation()
    modal.style.display = "none"
}

const content = (event) => {
    event.stopPropagation()
    modal.style.display = "block"
}

const bestellenDel = (event) => {

    if(inputDel.value == ""){
        alert("Bitte geben Sie Ihre E-mail ein")
    }
    else{
    newsText.textContent = "Danke für die bestellung"
    inputDel.style.display = "none"
    bestellen.style.display = "none"
    exitButton.style.display = "initial"}
}



trigger.addEventListener("click", getNews)
modal.addEventListener("click", exit)
modalContent.addEventListener("click",content)
bestellen.addEventListener("click",bestellenDel)
exitButton.addEventListener("click",exit)
xButton.addEventListener("click",exit)