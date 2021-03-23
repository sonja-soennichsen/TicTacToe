/*----- constants -----*/

/*----- app's state (variables) -----*/
let board;
let turn = "X";

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/
function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    [idx] = turn;
    console.log(board);
};

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark;
    });
};

init();