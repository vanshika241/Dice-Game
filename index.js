
let randomNUmber1 = Math.floor((Math.random()*6))+1
let image1 = `images/dice${randomNUmber1}.png`

const el1 = document.querySelector(".img1")
el1.setAttribute("src" , image1)

let randomNUmber2 = Math.floor((Math.random()*6))+1
let image2 = `images/dice${randomNUmber2}.png`
const el2 = document.querySelector(".img2")
el2.setAttribute("src" , image2)

const display = document.querySelector("h1")
if(randomNUmber1>randomNUmber2){
    display.innerText = "Player 1 Wins"
}
else if(randomNUmber1<randomNUmber2){
    display.innerText = "Player 2 Wins"

}
else{
    display.innerText = "Draw"

}

const btn = document.getElementById("btn")
btn.addEventListener('click',()=>{
    location.reload()
})