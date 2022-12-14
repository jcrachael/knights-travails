import { knightMoves, makeGraph } from './knightMoves';
import knightImg from './assets/business-strategy-chess-horse-knight-svgrepo-com.svg';

function makeKnight() {
    const knight = document.createElement('img');
    knight.src = knightImg;
    knight.classList.add('knight');
    knight.alt = 'Neigh!';
    return knight;
};

function printBoard(board) {
    const main = document.getElementById('main');
    const div = document.createElement('div');
    div.setAttribute('id', 'board-container');
    main.appendChild(div);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', `cell-${board[i][j]}`);
            cell.classList.add('cell');
            cell.setAttribute('data-coord', `${board[i][j]}`);
            div.appendChild(cell);
        };
    };
};

function setChessCoord(cell, coord) {
    if (coord == 0) {
        cell.setAttribute('data-chess', 'A8');
    } else if (coord == 1) {
        cell.setAttribute('data-chess', 'B8');
    } else if (coord == 2) {
        cell.setAttribute('data-chess', 'C8');
    } else if (coord == 3) {
        cell.setAttribute('data-chess', 'D8');
    } else if (coord == 4) {
        cell.setAttribute('data-chess', 'E8');
    } else if (coord == 5) {
        cell.setAttribute('data-chess', 'F8');
    } else if (coord == 6) {
        cell.setAttribute('data-chess', 'G8');
    } else if (coord == 7) {
        cell.setAttribute('data-chess', 'H8');
    } else if (coord == 8) {
        cell.setAttribute('data-chess', 'A7');
    } else if (coord == 9) {
        cell.setAttribute('data-chess', 'B7');
    } else if (coord == 10) {
        cell.setAttribute('data-chess', 'C7');
    } else if (coord == 11) {
        cell.setAttribute('data-chess', 'D7');
    } else if (coord == 12) {
        cell.setAttribute('data-chess', 'E7');
    } else if (coord == 13) {
        cell.setAttribute('data-chess', 'F7');
    } else if (coord == 14) {
        cell.setAttribute('data-chess', 'G7');
    } else if (coord == 15) {
        cell.setAttribute('data-chess', 'H7');
    } else if (coord == 16) {
        cell.setAttribute('data-chess', 'A6');
    } else if (coord == 17) {
        cell.setAttribute('data-chess', 'B6');
    } else if (coord == 18) {
        cell.setAttribute('data-chess', 'C6');
    } else if (coord == 19) {
        cell.setAttribute('data-chess', 'D6');
    } else if (coord == 20) {
        cell.setAttribute('data-chess', 'E6');
    } else if (coord == 21) {
        cell.setAttribute('data-chess', 'F6');
    } else if (coord == 22) {
        cell.setAttribute('data-chess', 'G6');
    } else if (coord == 23) {
        cell.setAttribute('data-chess', 'H6');
    } else if (coord == 24) {
        cell.setAttribute('data-chess', 'A5');
    } else if (coord == 25) {
        cell.setAttribute('data-chess', 'B5');
    } else if (coord == 26) {
        cell.setAttribute('data-chess', 'C5');
    } else if (coord == 27) {
        cell.setAttribute('data-chess', 'D5');
    } else if (coord == 28) {
        cell.setAttribute('data-chess', 'E5');
    } else if (coord == 29) {
        cell.setAttribute('data-chess', 'F5');
    } else if (coord == 30) {
        cell.setAttribute('data-chess', 'G5');
    } else if (coord == 31) {
        cell.setAttribute('data-chess', 'H5');
    } else if (coord == 32) {
        cell.setAttribute('data-chess', 'A4');
    } else if (coord == 33) {
        cell.setAttribute('data-chess', 'B4');
    } else if (coord == 34) {
        cell.setAttribute('data-chess', 'C4');
    } else if (coord == 35) {
        cell.setAttribute('data-chess', 'D4');
    } else if (coord == 36) {
        cell.setAttribute('data-chess', 'E4');
    } else if (coord == 37) {
        cell.setAttribute('data-chess', 'F4');
    } else if (coord == 38) {
        cell.setAttribute('data-chess', 'G4');
    } else if (coord == 39) {
        cell.setAttribute('data-chess', 'H4');
    } else if (coord == 40) {
        cell.setAttribute('data-chess', 'A3');
    } else if (coord == 41) {
        cell.setAttribute('data-chess', 'B3');
    } else if (coord == 42) {
        cell.setAttribute('data-chess', 'C3');
    } else if (coord == 43) {
        cell.setAttribute('data-chess', 'D3');
    } else if (coord == 44) {
        cell.setAttribute('data-chess', 'E3');
    } else if (coord == 45) {
        cell.setAttribute('data-chess', 'F3');
    } else if (coord == 46) {
        cell.setAttribute('data-chess', 'G3');
    } else if (coord == 47) {
        cell.setAttribute('data-chess', 'H3');
    } else if (coord == 48) {
        cell.setAttribute('data-chess', 'A2');
    } else if (coord == 49) {
        cell.setAttribute('data-chess', 'B2');
    } else if (coord == 50) {
        cell.setAttribute('data-chess', 'C2');
    } else if (coord == 51) {
        cell.setAttribute('data-chess', 'D2');
    } else if (coord == 52) {
        cell.setAttribute('data-chess', 'E2');
    } else if (coord == 53) {
        cell.setAttribute('data-chess', 'F2');
    } else if (coord == 54) {
        cell.setAttribute('data-chess', 'G2');
    } else if (coord == 55) {
        cell.setAttribute('data-chess', 'H2');
    } else if (coord == 56) {
        cell.setAttribute('data-chess', 'A1');
    } else if (coord == 57) {
        cell.setAttribute('data-chess', 'B1');
    } else if (coord == 58) {
        cell.setAttribute('data-chess', 'C1');
    } else if (coord == 59) {
        cell.setAttribute('data-chess', 'D1');
    } else if (coord == 60) {
        cell.setAttribute('data-chess', 'E1');
    } else if (coord == 61) {
        cell.setAttribute('data-chess', 'F1');
    } else if (coord == 62) {
        cell.setAttribute('data-chess', 'G1');
    } else if (coord == 63) {
        cell.setAttribute('data-chess', 'H1');
    }
};

function chessColour(cell) {
    const attr = cell.getAttribute('data-chess');
    if (attr == 'B8' || attr == 'D8' || attr == 'F8' || attr == 'H8' ||
        attr == 'A7' || attr == 'C7' || attr == 'E7' || attr == 'G7' ||
        attr == 'B6' || attr == 'D6' || attr == 'F6' || attr == 'H6' ||
        attr == 'A5' || attr == 'C5' || attr == 'E5' || attr == 'G5' ||
        attr == 'B4' || attr == 'D4' || attr == 'F4' || attr == 'H4' ||
        attr == 'A3' || attr == 'C3' || attr == 'E3' || attr == 'G3' ||
        attr == 'B2' || attr == 'D2' || attr == 'F2' || attr == 'H2' ||
        attr == 'A1' || attr == 'C1' || attr == 'E1' || attr == 'G1') { 
        if (!cell.classList.contains('gray')) { cell.classList.add('gray');}} 
    else {if(!cell.classList.contains('lightgray')) { cell.classList.add('lightgray');}};
};

function resetCells() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell) {
        chessColour(cell);
        let chesscoord = cell.getAttribute('data-chess');
        cell.firstChild.innerText = chesscoord;
        if (cell.classList.contains('start-cell')) {cell.classList.remove('start-cell');} 
        if (cell.classList.contains('end-cell')) {cell.classList.remove('end-cell');}
        if (cell.classList.contains('blue-cell')) {cell.classList.remove('blue-cell');}
    });
    const comment = document.getElementById('comment');
    comment.innerHTML = `<p id="comment-main" class="comment-text"></p>`;
};

function updateComment(message) {
    const comment = document.getElementById('comment-main');
    comment.innerText = message;
};

function appendComment(message) {
    const comment = document.getElementById('comment');
    const newText = document.createElement('p');
    newText.classList.add('comment-text');
    newText.innerText = message;
    comment.appendChild(newText);
};

function appendCommentNoBreak(message) {
    const comment = document.getElementById('comment');
    const newText = document.createElement('span');
    newText.classList.add('comment-text');
    newText.innerText = message;
    comment.appendChild(newText);
    return newText;
}

function makeMovesComment(moves) {
    let numMovesComment;
    let numMoves = moves.length - 1;
    if (numMoves === 0) { numMovesComment = 'You were already here!'} 
    else if (numMoves === 1) { numMovesComment = 'You made it in 1 move!' } 
    else { numMovesComment = `You made it in ${numMoves} moves!` }
    appendComment(numMovesComment);
}

function chessify(moves) {
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == 0) {moves[i] = 'A8';} 
        else if (moves[i] == 1) {moves[i] = 'B8';} 
        else if (moves[i] == 2) {moves[i] = 'C8';} 
        else if (moves[i] == 3) {moves[i] = 'D8';} 
        else if (moves[i] == 4) {moves[i] = 'E8';} 
        else if (moves[i] == 5) {moves[i] = 'F8';} 
        else if (moves[i] == 6) {moves[i] = 'G8';}
        else if (moves[i] == 7) {moves[i] = 'H8';} 
        else if (moves[i] == 8) {moves[i] = 'A7';} 
        else if (moves[i] == 9) {moves[i] = 'B7';} 
        else if (moves[i] == 10) {moves[i] = 'C7';} 
        else if (moves[i] == 11) {moves[i] = 'D7';} 
        else if (moves[i] == 12) {moves[i] = 'E7';} 
        else if (moves[i] == 13) {moves[i] = 'F7';} 
        else if (moves[i] == 14) {moves[i] = 'G7';} 
        else if (moves[i] == 15) {moves[i] = 'H7';} 
        else if (moves[i] == 16) {moves[i] = 'A6';} 
        else if (moves[i] == 17) {moves[i] = 'B6';} 
        else if (moves[i] == 18) {moves[i] = 'C6';} 
        else if (moves[i] == 19) {moves[i] = 'D6';} 
        else if (moves[i] == 20) {moves[i] = 'E6';} 
        else if (moves[i] == 21) {moves[i] = 'F6';} 
        else if (moves[i] == 22) {moves[i] = 'G6';} 
        else if (moves[i] == 23) {moves[i] = 'H6';} 
        else if (moves[i] == 24) {moves[i] = 'A5';} 
        else if (moves[i] == 25) {moves[i] = 'B5';} 
        else if (moves[i] == 26) {moves[i] = 'C5';} 
        else if (moves[i] == 27) {moves[i] = 'D5';} 
        else if (moves[i] == 28) {moves[i] = 'E5';} 
        else if (moves[i] == 29) {moves[i] = 'F5';} 
        else if (moves[i] == 30) {moves[i] = 'G5';} 
        else if (moves[i] == 31) {moves[i] = 'H5';}  
        else if (moves[i] == 32) {moves[i] = 'A4';} 
        else if (moves[i] == 33) {moves[i] = 'B4';} 
        else if (moves[i] == 34) {moves[i] = 'C4';} 
        else if (moves[i] == 35) {moves[i] = 'D4';} 
        else if (moves[i] == 36) {moves[i] = 'E4';} 
        else if (moves[i] == 37) {moves[i] = 'F4';} 
        else if (moves[i] == 38) {moves[i] = 'G4';} 
        else if (moves[i] == 39) {moves[i] = 'H4';}  
        else if (moves[i] == 40) {moves[i] = 'A3';} 
        else if (moves[i] == 41) {moves[i] = 'B3';} 
        else if (moves[i] == 42) {moves[i] = 'C3';} 
        else if (moves[i] == 43) {moves[i] = 'D3';} 
        else if (moves[i] == 44) {moves[i] = 'E3';} 
        else if (moves[i] == 45) {moves[i] = 'F3';} 
        else if (moves[i] == 46) {moves[i] = 'G3';} 
        else if (moves[i] == 47) {moves[i] = 'H3';}  
        else if (moves[i] == 48) {moves[i] = 'A2';} 
        else if (moves[i] == 49) {moves[i] = 'B2';} 
        else if (moves[i] == 50) {moves[i] = 'C2';} 
        else if (moves[i] == 51) {moves[i] = 'D2';} 
        else if (moves[i] == 52) {moves[i] = 'E2';} 
        else if (moves[i] == 53) {moves[i] = 'F2';} 
        else if (moves[i] == 54) {moves[i] = 'G2';} 
        else if (moves[i] == 55) {moves[i] = 'H2';}  
        else if (moves[i] == 56) {moves[i] = 'A1';} 
        else if (moves[i] == 57) {moves[i] = 'B1';} 
        else if (moves[i] == 58) {moves[i] = 'C1';} 
        else if (moves[i] == 59) {moves[i] = 'D1';} 
        else if (moves[i] == 60) {moves[i] = 'E1';} 
        else if (moves[i] == 61) {moves[i] = 'F1';} 
        else if (moves[i] == 62) {moves[i] = 'G1';} 
        else if (moves[i] == 63) {moves[i] = 'H1';}
    }
    return moves
};

function playTurn(graph, start, end) {
    // Call the function to move from start to end and get the moves required
    const knight = document.querySelector('.knight');
    let moves = knightMoves(graph, start, end);
    // Append the 'you made it in x moves' comment
    makeMovesComment(moves);
    // After 0.5s, print the first move
    setTimeout(function() {
        // remove the first and last item from moves
        let firstMove = moves.shift();
        let lastMove = moves.pop();
        let firstMoveCell = document.querySelector(`[data-chess="${firstMove}"]`);
        let lastMoveCell = document.querySelector(`[data-chess="${lastMove}"]`);
        let interval = 500;
        // Append the 'first move ' comment
        let movesComment = document.createElement('span');
        movesComment.classList.add('comment-text');
        movesComment.classList.add('start-move');
        movesComment.innerText = firstMove + ' ';
        document.getElementById('comment').appendChild(movesComment);
        setTimeout(function() {
            // if moves.length > 0, colour in all the squares
            if (moves.length > 0) {
                // colour first move cell
                firstMoveCell.classList.add('start-cell');
                firstMoveCell.firstChild.innerText = `${firstMoveCell.getAttribute('data-chess')}`;
                firstMoveCell.removeChild(knight);
                // iterate through moves
                moves.forEach( index => {
                    let thisIndex = moves.indexOf(index);
                    setTimeout(() => {
                        let moveCell = document.querySelector(`[data-chess="${index}"]`);
                        moveCell.classList.add('blue-cell');
                        moveCell.firstChild.innerText = '';
                        moveCell.appendChild(knight);
                        appendCommentNoBreak(' -> ' + index);
                        let prevCell = document.querySelector(`[data-chess="${moves[thisIndex-1]}"]`);
                        if (prevCell) {
                            prevCell.firstChild.innerText = `${prevCell.getAttribute('data-chess')}`;
                        };
                    }, interval * (thisIndex));
                });
                interval = interval * (moves.length + 1);
            };
            setTimeout(function() {
                lastMoveCell.classList.add('end-cell');
                lastMoveCell.firstChild.innerText = '';
                lastMoveCell.appendChild(knight);
                // Append the ending move comment
                let endMovesComment = document.createElement('span');
                let endMovesArrow = document.createElement('span');
                endMovesArrow.classList.add('comment-text');
                endMovesArrow.innerText = ' -> '
                endMovesComment.classList.add('comment-text');
                endMovesComment.classList.add('end-move');
                endMovesComment.innerText = lastMove;
                document.getElementById('comment').appendChild(endMovesArrow);
                document.getElementById('comment').appendChild(endMovesComment);
                
                let prevCell = document.querySelector(`[data-chess="${moves[moves.length - 1]}"]`);
                if (prevCell !== null) {
                    prevCell.firstChild.innerText = `${prevCell.getAttribute('data-chess')}`;
                }
                if (moves.length === 0) {
                    firstMoveCell.firstChild.innerText = `${firstMoveCell.getAttribute('data-chess')}`
                };
            }, interval - 500);
        }, interval);
    }, 500);
};

function beginGame() {
    const boardGraph = makeGraph();
    // make the knight icon
    const knight = makeKnight();
    // Board array for printing and making cells
    const board = [[0,1,2,3,4,5,6,7],
                  [8,9,10,11,12,13,14,15],
                  [16,17,18,19,20,21,22,23],
                  [24,25,26,27,28,29,30,31],
                  [32,33,34,35,36,37,38,39],
                  [40,41,42,43,44,45,46,47],
                  [48,49,50,51,52,53,54,55],
                  [56,57,58,59,60,61,62,63]]
    // Welcome message
    let welcomeMessage = `Welcome to Knights Travails!

    Please select a starting square...`;    
    // Start and end vertices set to null
    let start = null;
    let end = null;
    let startCoord;
    let endCoord;
    // Print the board and comment
    updateComment(welcomeMessage);
    printBoard(board);
    // Get all the cells
    const cells = document.querySelectorAll('.cell');
    // Iterate through each cell 
    cells.forEach(function(cell) {
        let coord = cell.getAttribute('data-coord');
        setChessCoord(cell, coord);
        let chesscoord = cell.getAttribute('data-chess');
        let cellText = document.createElement('p');
        cellText.classList.add('cell-text');
        cell.appendChild(cellText);
        cellText.innerText = chesscoord;
        chessColour(cell);
        cell.addEventListener('click', function() {   
            // get the vertex with this index number
            let thisVertex = boardGraph.list[coord]
            // If start is not defined, set this coord to start
            if (start === null) {
                resetCells();
                start = thisVertex;
                startCoord = chesscoord;
                cell.classList.toggle('start-cell');
                cell.firstChild.innerText = '';
                cell.appendChild(knight);
                updateComment('Start: ' + startCoord + `

                ` + 'Please select an ending square...');
                return start
            // Otherwise, set this coord to end and call the BFS method
            } else if (start !== null && end === null) {
                let end = thisVertex;
                endCoord = chesscoord;
                cell.classList.toggle('end-cell');
                updateComment(`Moving the Knight from ${startCoord} to ${endCoord}...`); 
                // Make the traversal
                setTimeout(playTurn, 500, boardGraph, start, end);
                // reset start to null for next click
                start = null;
                return;
            };
        });
    });
};

export { beginGame, updateComment, appendComment, chessify };