var knightPosition = process.argv[2];
var x = knightPosition.substring(0,1).charCodeAt(0) - 96;
var y = parseInt(knightPosition.substring(1,2));
if(x > 8 || x < 0 || y > 8 || y < 0) {console.log('wrong input, exiting'); process.exit(1)}
// console.log(x, '_', y);             // 74

/**Getting all the positions where knight can move */
var blah = [
    {x:2, y:1}, {x:2, y:-1}, {x:-2, y:1}, {x:-2, y:-1},             // move two squares along x-axis and one square along y-axis
    {x:1, y:2}, {x:1, y:-2}, {x:-1, y:2}, {x:-1, y:-2}              // move two squares along y-axis and one square along x-axis
]
var allKnightPositions = [];
for(var i=0; i<8; i++) {
    var newPosition = {x: x+blah[i].x, y: y+blah[i].y}
    allKnightPositions.push(newPosition);
}
// console.log(allKnightPositions);

/**Removing the positions which are coming outside the board */
 var validKnightMoves = [];              // e5
for(i=0; i<8; i++) {
    if(
        allKnightPositions[i].x <= 8 && allKnightPositions[i].x > 0 &&
        allKnightPositions[i].y <= 8 && allKnightPositions[i].y > 0
    ) {
        // console.log(allKnightPositions[i]);
        var xPosition = String.fromCharCode(96 + parseInt(allKnightPositions[i].x));
        var yPosition = (allKnightPositions[i].y);
        var chessPosition = `${xPosition}${yPosition}`;        
        validKnightMoves.push(chessPosition);
    }
}
console.log(validKnightMoves);
