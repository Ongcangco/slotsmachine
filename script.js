/*----- constants -----*/
const numbers = [
    '1',
    '2',
    '3',
    '4',
    '5'
];

const window = document.querySelectorAll(".window");



/*----- app's state (variables) -----*/
let board; //array of 3 windows//
let turn; //1 or -1//
let winner: //null = loser; 1 or -1 winner; 
// var random = Math.floor(Math.random()* 5) + 1;

/*----- cached element references -----*/
winningCombos = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 4],
    [5, 5, 5],
  ];

/*----- event listeners -----*/


/*----- functions -----*/
function render() {
    renderBoard();
    renderMessage();
    //Hide/show UI elements (controls)
    renderControls();
  }


//   function changeText() {
//     var message = document.getElementById('message');
//     message.innerHTML = "click";
// }





