/*----- cached element references -----*/

const symbols = [
    '&#x1F353', '&#x1F4A9', '&#x1F34D', '&#x1F349', '&#x1F480' 
]
/*----- app's state (variables) -----*/
let game;
let slots; //array of 3 windows//
let winner; 


  /*----- event listeners -----*/
  
const resetBtn = document.getElementById('reset')
  
resetBtn.addEventListener('click', resetGame)

const playBtn = document.getElementById('play');
playBtn.addEventListener('click', play) 


/*----- functions -----*/

function getRandomNumber() {
    return symbols[Math.floor(Math.random() * symbols.length)] 
}

function getElementById(id) {
    return document.getElementById(id);
}
//connect the numbers to each window?
function play() {
    const window1 = getElementById('window1');
    const window2 = getElementById('window2');
    const window3 = getElementById('window3');
    
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();
    
    window1.innerHTML = `${num1}`;
    window2.innerHTML = `${num2}`;
    window3.innerHTML = `${num3}`;
    
    if (num1 === num2 && num1 === num3) {
        showWinMessage();
    } else {
        showLoserMessage();
        
    }
}

function showWinMessage () {
    message.innerHTML = "Congratulations You Won!&#x1F389"
    
}

function showLoserMessage () {
    message.innerHTML = "Ha Ha What a Loser! &#x1F602"
    message.style.innerHTML 
    
}

function resetGame() {
    const window1 = getElementById('window1');
    const window2 = getElementById('window2');
    const window3 = getElementById('window3');

    window1.innerHTML = ``;
    window2.innerHTML = ``;
    window3.innerHTML = ``;
    
    message.textContent = "Let's Play Again!"

}









