//Creating two cards-first card and second card
//set their values to a random number between 2-11
//creating a variable sum which shall contain the sum of first card and second card
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
//array is the list of elements. In this array we are storing the first and second card
let cards = []
let sum = 0
//keeps track of whether the player got blackjack or not. Initially, the player doesn't have blackjack, hence the initial valuje is et to false
let hasBlackJack = false
//boolean starts with lowercase in js
//variable keeps track of whether the person is in game yet or not. Initially, the person is in game so true
//The message value is reassigned to the string we're logging out
let message = ""
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
//creater the object player to store name and chips
let player = {
    nam : "Per",
    chips : 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.nam + ": $" + player.chips
//querySelector is another method used to retrive data. # is used to denote id while . is used for class
//let sumEl = document.querySelector("#sum-el")
//function getRandomCard() returns random number from 1-13
//here J,Q,K(11,12,13) are assigned the value 10 while A(1) is assigned the value 11
function getRandomCard() {
    let rando = Math.floor((Math.random() * 13)) + 1
    if (rando === 11 || rando === 12 ||rando == 13) {
        rando = 10

    } else if (rando === 1) {
        rando = 11
    }
    return rando   
}
function startGame() {
    //all these variables will be initiated once the start button is clicked
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    //adding the existing cards from the array cards
    for (let i=0; i<cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you wanna draw a new card?"
        
    } else if (sum === 21) {
        message = "Wohoo!You've got blackjack "
        hasBlackJack = true
    // here in javascript === is used to check whether lhs === rhs    
    } else {
        message = "You're out of game lol"
        isAlive = false
    }
    messageEl.textContent = message
    
   }
   function newCard() {
       //new card can only be taken if the player is alive and doesn't have blackjack

    
       //this variable contains the number that the user will draw when the sum is less that 20
       if (isAlive === true && hasBlackJack === false) {
           let card = getRandomCard()
           sum += card
           cards.push(card)
           renderGame()

       }

       
   }

