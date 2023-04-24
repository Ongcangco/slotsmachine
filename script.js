/*----- constants -----*/
const numbers = [
    '1',
    '2',
    '3',
    '4',
    '5'
];



/*----- app's state (variables) -----*/
let board; //array of 3 windows//
let turn; //1 or -1//
let winner: //null = loser; 1 or -1 winner; 

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
function changeText() {
    var message = document.getElementById('message');
    message.innerHTML = "clicked";
}