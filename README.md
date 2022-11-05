# Knights Travails

[Live demo](https://jcrachael.github.io/knights-travails/) (work in progress).

A search algorithm that shows the shortest possible route for a Knight on a standard 8x8 chessboard to move from one square to another.

Projcet sourced from [The Odin Project JavaScript course](https://www.theodinproject.com/lessons/javascript-knights-travails).


## About
On any given move, a Knight can move 2 spaces in one direction and 1 space in the perpendicular direction (i.e., 2x+1y OR 2y+1x (or their negatives)). 

For example, if a Knight is on square `[4,4]`, its possible moves are:
* `[2,5]`
* `[3,6]`
* `[5,6]`
* `[6,5]`
* `[6,3]`
* `[5,2]`
* `[3,2]`
* `[2,3]` 

The `board` will be a 2-dimensional array:

`board = [[0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7],`
        `[1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7],` 
        `[2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7],` 
        `[3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7],`
        `[4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7],`
        `[5,0], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7],`
        `[6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7],`
        `[7,0], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7]]`

The `function knightMoves(start, end)` will return the shortest possible route from `start` coordinate (an array e.g. `[1,2]`) and an `end` coordinate (e.g. `[3,3]`).

All of the possible moves the Knight could make will be stored as children in a tree.

## Pseudocode

`function knightMoves(start, end) {`

    1. Make a tree from `start` where all the children in the tree are possible moves the knight could make (don't allow any moves to go off the board)

    2. Use a search algorithm to find the shortest path between the `start` node and the `end` node

    3. Output the full path, e.g. `Start: [3,3] -> [4,5] -> [2,4] -> End: [4,3]`
`}`

---

Last modified: 5 November 2022