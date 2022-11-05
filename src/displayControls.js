import { knightMoves } from './knightMoves';

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
            cell.setAttribute('id', `cell-${board[i][j][0]}-${board[i][j][1]}`);
            cell.classList.add('cell');
            cell.setAttribute('data-coord', `${board[i][j][0]}-${board[i][j][1]}`);
            cell.innerHTML = `<p class="cell-text">( ${board[i][j][0]}, ${board[i][j][1]} )</p>`;
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
    const board = [[[0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7]],
                    [[1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7]],
                    [[2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7]],
                    [[3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7]],
                    [[4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7]],
                    [[5,0], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7]],
                    [[6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7]],
                    [[7,0], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7]]]
    // Welcome message
    let welcomeMessage = `Welcome to Knights Travails!

    Please select a starting square...`;    

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
            // Get the coord
            let coord = cell.getAttribute('data-coord').split('-');
            // If start is not defined, set this coord to start
            if (start === null) {
                cells.forEach(function(cell) {
                    cell.style.backgroundColor = 'white';
                });
                start = coord;
                cell.style.backgroundColor = 'yellowgreen';
                updateComment();
                updateComment('Starting cell: ' + start + `

                ` + 'Please select an ending cell...');
                return start
            // Otherwise, set this coord to end
            } else if (start !== null && end === null) {
                let end = coord;
                cell.style.backgroundColor = 'red';
                updateComment('Starting cell: ' + start + `
                ` +'Ending cell: ' + end + `
                
                ` + knightMoves(start, end));
                // Call the function to move from start to end
                knightMoves(start, end);
                start = null;
                return knightMoves(start, end);
            } 
           
        });
    })

    
    
}


export { beginGame, updateComment }