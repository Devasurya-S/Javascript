let cards = []
let sum = 0
let isAlive = false
let hasBlckJack = false
let flag1 = false
let flag2 = false
let message = ""
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
let player = {
    name : "Player",
    credit : 145
}

function getRandomCard() {
    //foor - removes everything after decimal, random * 13 - generates a number between 0 and 12.999 , + 1 makes the value range 1 to 13
    let flooredNum = Math.floor(Math.random()*13) + 1
    if(flooredNum === 1){
        flooredNum = 11
    } else if (flooredNum > 10) {
        flooredNum = 10
    }
    return flooredNum
}

function startGame(){
    if(!isAlive && !flag1){
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard,secondCard]
        if(firstCard >0 && secondCard >0){
            flag2 = true
        }
        if(flag2) {
            isAlive = true
            renderGame()
        }    
    }
}


function newCard() {
    if(isAlive && !hasBlckJack) {
        let nextCard = getRandomCard()
        cards.push(nextCard)
        renderGame()
    }
}

function renderGame() {
    for(let i=1; i<cards.length; i++) {
        sum += cards[i]
    }
    if (sum <= 20) {
        message = "Do you want to draw another card ?"
    } else if (sum === 21) {
        message = "You've got Blackjack !!"
        hasBlckJack = true
        player.credit += 10
    } else {
        message = "Sorry You're out of the game."
        isAlive = false
        flag1 = true
    }
    
    messageEl.textContent = message   
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
    for (let i=0; i<cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    playerEl.textContent = player.name + ": $" + player.credit 
}
