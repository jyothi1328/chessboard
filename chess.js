const populateKnights = (moves) => {
    console.log(moves);
    for(i=0; i<moves.length; i++) {
        document.getElementById(moves[i]).classList.add('add-knight');
    }    
}
const resetBoard = () => {
    if(!validKnightMoves) return;
    for(i=0; i<validKnightMoves.length; i++) {
        document.getElementById(validKnightMoves[i]).classList.remove('add-knight');
    }
    validKnightMoves = [];
}
var validKnightMoves = [];

const calculateKnightMoves = (id) => {
    resetBoard();
    var knightPosition = id;
    var xAxis = knightPosition.substring(0, 1).charCodeAt(0) - 96;
    var yAxis = parseInt(knightPosition.substring(1, 2));

    var blah = [{ x: 2, y: 1 }, { x: 2, y: -1 }, { x: -2, y: 1 }, { x: -2, y: -1 }, { x: 1, y: 2 }, { x: 1, y: -2 }, { x: -1, y: 2 }, { x: -1, y: -2 }];
    var allKnightPositions = [];
    
    /**Getting all the positions where knight can move  */
    for (var i = 0; i < 8; i++) {
        var newPosition = { x: xAxis + blah[i].x, y: yAxis + blah[i].y }
        allKnightPositions.push(newPosition);
    }
    /**Removing the positions which are coming outside the board */
    for (i = 0; i < 8; i++) {
        if (
            allKnightPositions[i].x <= 8 && allKnightPositions[i].x > 0 &&
            allKnightPositions[i].y <= 8 && allKnightPositions[i].y > 0
        ) {
            var xPosition = String.fromCharCode(96 + parseInt(allKnightPositions[i].x));
            var yPosition = (allKnightPositions[i].y);
            var chessPosition = `${xPosition}${yPosition}`;
            validKnightMoves.push(chessPosition);
        }
    }
    populateKnights(validKnightMoves);
}

var board = document.getElementById('chessBoard23');

/**Creating chess board alignment */
const renderBoard1 = () => {
    for (var i = 1; i <= 8; i++) {
        var row = document.createElement('DIV');
        row.className = 'row23';
        for (var j = 8; j >= 1; j--) {
            var square = document.createElement('DIV');
            square.addEventListener('click', (event) => calculateKnightMoves(event.target.id));
            square.id = `${String.fromCharCode(96 + i)}${j}`;
            square.className = 'square23';
            square.style.backgroundColor = (i + j) % 2 === 0 ? 'white' : 'grey';
            row.appendChild(square);
        }
        board.appendChild(row)
    }
}

renderBoard1();