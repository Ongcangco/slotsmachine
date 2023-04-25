/*----- constants -----*/ 
const numbers = [
    '1',
    '2',
    '3',
    '4',
    '5'
];



//const window = document.querySelectorAll(".window");



/*----- app's state (variables) -----*/
let board; //array of 3 windows//
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

/*----- event listeners -----*/


/*----- functions -----*/
function getRandomNumber() {
    return Math.floor(math.random() * 5) + 1;
}

function getElement(id) {
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
        showMessage();
    } else {
        showMessage2();

}
}

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





