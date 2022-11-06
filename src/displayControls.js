import { knightMoves, makeGraph } from './knightMoves';

function printBoard(board) {
    // Grab main and build container
    const main = document.getElementById('main');
    const div = document.createElement('div');
    div.setAttribute('id', 'board-container');
    main.appendChild(div);
    // for each row of the board
    for (let i = 0; i < board.length; i++) {
        // For each cell in each row
        for (let j = 0; j < board[i].length; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', `cell-${board[i][j]}`);
            cell.classList.add('cell');
            cell.setAttribute('data-coord', `${board[i][j]}`);
            cell.innerHTML = `<p class="cell-text">${board[i][j]}</p>`;
            div.appendChild(cell);
        }
    }
}

function updateComment(message) {
    const comment = document.getElementById('comment');
    comment.innerText = message;
}

function beginGame() {
    // Declare variables
    // Instantiate the Graph to represent the board
    const boardGraph = makeGraph();
    // Board array for printing and making cells
    const board = [
        [0,1,2,3,4,5,6,7],
        [8,9,10,11,12,13,14,15],
        [16,17,18,19,20,21,22,23],
        [24,25,26,27,28,29,30,31],
        [32,33,34,35,36,37,38,39],
        [40,41,42,43,44,45,46,47],
        [48,49,50,51,52,53,54,55],
        [56,57,58,59,60,61,62,63]
    ]
    // Welcome message
    let welcomeMessage = `Welcome to Knights Travails!

    Please select a starting square...`;    
    // Start and end vertices set to null
    let start = null;
    let end = null;

    // Print the board and comment
    updateComment(welcomeMessage);
    printBoard(board);

    // Get all the cells
    const cells = document.querySelectorAll('.cell');

    // Iterate through each cell 
    cells.forEach(function(cell) {
        cell.addEventListener('click', function() {   
            // Get the coord/index number
            let coord = cell.getAttribute('data-coord');
            // get the vertex with this index number
            let thisVertex = boardGraph.list[coord]
            // If start is not defined, set this coord to start
            if (start === null) {
                cells.forEach(function(cell) {
                    cell.style.backgroundColor = 'white';
                });
                start = thisVertex;
                cell.style.backgroundColor = 'yellowgreen';
                updateComment();
                updateComment('Starting cell: ' + start.coord + `

                ` + 'Please select an ending cell...');
                return start

            // Otherwise, set this coord to end
            } else if (start !== null && end === null) {
                let end = thisVertex;
                cell.style.backgroundColor = 'red';
                updateComment('Starting cell: ' + start.coord + `
                ` +'Ending cell: ' + end.coord + `
                
                ` + `Moving the Knight from [${start.coord}] to [${end.coord}]...`);
                
                // Call the function to move from start to end
                knightMoves(boardGraph, start, end);

                // reset start to null for next click
                start = null;
                return;
            } 
          
        });
    });
    
}


export { beginGame, updateComment }