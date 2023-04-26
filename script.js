/*----- constants -----*/ 
const numbers = [
    '1',
    '2',
    '3',
    '4',
    '5'
];

/*----- app's state (variables) -----*/
let game;
let slots; //array of 3 windows//
let turn; //1 or -1//
let winner; //null = loser; 1 or -1 winner; 
// var random = Math.floor(Math.random()* 5) + 1;

/*----- cached element references -----*/
winningCombos = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 4],
    [5, 5, 5],
  ];

const resetBtn = document.getElementById('reset')
/*----- event listeners -----*/


resetBtn.addEventListener('click', () => {
    console.log('reset button clicked')
});

function resetGame() {
    slots = null;
    window1, window2, window3 = null;
}

/*----- functions -----*/
class SlotsMachineGame {
    constructor(slotsElement, messageElement) {
        this.slotsElement = slotsElement;
        this.messageElement = messageElement;
    }
}

// init();

// function init() {
//     game = new SlotsMachineGame;
    
    // slots = [ window1 = 0, window2 = 0, window3 = 0]
    // render();


const playBtn = document.getElementById('play');
playBtn.addEventListener('click', play) 


function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
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
    message.innerHTML = "Congratulations You Won!"
}

function showLoserMessage () {
    message.innerHTML = "Ha Ha What a Loser!"
   
    
}

 function render() {}
// renderBoard()
 
function renderMessage() {
    const msg = document.getElementById('message');
 }
//     //Hide/show UI elements (controls)
// function renderControls();
  


//   function changeText() {
//     var message = document.getElementById('message');
//     message.innerHTML = "click";
// 