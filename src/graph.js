import { updateComment, chessify } from './displayControls';

const adjacencyList = {
    '0': [10, 17],
    '1': [16, 18, 11],
    '2': [8, 17, 12, 19],
    '3': [9, 18, 20, 13],
    '4': [10, 19, 21, 14],
    '5': [11, 20, 22, 15],
    '6': [12, 21, 23],
    '7': [13, 22],

    '8': [ 2, 18, 25 ],
    '9': [ 3, 24, 19, 26 ],
    '10': [ 0, 16, 4, 20, 25, 27 ],
    '11': [ 1, 17, 21, 5, 26, 28 ],
    '12': [ 2, 18, 22, 6, 27, 29 ],
    '13': [ 3, 19, 7, 23, 28, 30 ],
    '14': [ 4, 20, 31, 29 ],
    '15': [ 5, 21, 30 ],

    '16': [ 1, 10, 26, 33 ],
    '17': [ 0, 2, 11, 32, 27, 34 ],
    '18': [ 1, 3, 12, 28, 35, 33, 24, 8 ],
    '19': [ 2, 4, 13, 29, 36, 34, 25, 9 ],
    '20': [ 3, 5, 14, 30, 37, 35, 26, 10 ],
    '21': [ 4, 6, 15, 31, 38, 36, 27, 11 ],
    '22': [ 5, 7, 39, 37, 28, 12 ],
    '23': [ 6, 13, 29, 38 ],
    
    '24': [ 9, 18, 34, 41 ],
    '25': [ 8, 10, 19, 35, 42, 40 ],
    '26': [ 9, 11, 20, 36, 43, 41, 32, 16 ],
    '27': [ 10, 12, 21, 37, 44, 42, 33, 17 ],
    '28': [ 11, 13, 22, 38, 45, 43, 34, 18 ],
    '29': [ 12, 14, 23, 39, 46, 44, 35, 19 ],
    '30': [ 13, 15, 47, 45, 36, 20 ],
    '31': [ 14, 21, 37, 46 ],
    
    '32': [ 17, 26, 42, 49 ],
    '33': [ 16, 18, 27, 43, 50, 48 ],
    '34': [ 17, 19, 28, 44, 51, 49, 40, 24 ],
    '35': [ 18, 20, 29, 45, 52, 50, 41, 25 ],
    '36': [ 19, 21, 30, 46, 53, 51, 42, 26 ],
    '37': [ 20, 22, 31, 47, 54, 52, 43, 27 ],
    '38': [ 21, 23, 55, 53, 44, 28 ],
    '39': [ 22, 29, 45, 54 ],
    
    '40': [ 25, 34, 50, 57 ],
    '41': [ 24, 26, 35, 51, 58, 56 ],  
    '42': [ 25, 27, 36, 52, 59, 57, 48, 32 ],
    '43': [ 26, 28, 37, 53, 60, 58, 49, 33 ],
    '44': [ 27, 29, 38, 54, 61, 59, 50, 34 ],
    '45': [ 28, 30, 39, 55, 62, 60, 51, 35 ],
    '46': [ 29, 31, 63, 61, 52, 36 ],
    '47': [ 30, 37, 53, 62 ],
    
    '48': [ 33, 42, 58 ],
    '49': [ 32, 34, 43, 59 ],   
    '50': [ 33, 35, 44, 60, 56, 40 ],
    '51': [ 34, 36, 45, 61, 57, 41 ],
    '52': [ 35, 37, 46, 62, 58, 42 ],
    '53': [ 36, 38, 47, 63, 59, 43 ],
    '54': [ 37, 39, 60, 44 ],
    '55': [ 38, 45, 61 ],
    
    '56': [ 41, 50 ],
    '57': [ 40, 42, 51 ],
    '58': [ 41, 43, 52, 48 ],
    '59': [ 42, 44, 53, 49 ],
    '60': [ 43, 45, 54, 50 ],
    '61': [ 44, 46, 55, 51 ],
    '62': [ 45, 47, 52 ],
    '63': [ 46, 53,],
};

class Vertex {
    constructor(coord) {
        // set the coordinate of this vertex
        this.coord = coord;
        // get this vertex's adjacency list
        this.neighbours = [];
        // set visited to false
        this.visited = false;
        // set queued to false
        this.queued = false;
        // set level to null;
        this.level = null;
    }
};


class Graph { 
    constructor(numVertices, list) {
        this.vertices = numVertices;
        this.list = list;
    }

    breadthFirstSearch(start, end) {
        let moves= [];
        // set all vertices' 'visited' and 'queued' properties to false
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].visited = false;
            this.list[i].queued = false;
        }
        // Get the right start vertex
        let startVertex = this.list[start];
        let endVertex = this.list[end];
        // Make a queue
        let queue = [];
        // Add start node to queue and mark it as queued
        startVertex.queued = true;
        startVertex.level = 0;
        queue.push(startVertex);
        // While items are in the queue
        while (queue.length > 0) {
            // Get the first item in the queue
            let thisNode = queue[0];
            // Mark this item as visited
            thisNode.visited = true;
            // For each of this item's neighbours
            for (let i = 0; i < thisNode.neighbours.length; i++) {
                let thisNodeNeighbour = thisNode.neighbours[i];
                // If this neighbour has been visited or is already queued, skip it
                if (thisNodeNeighbour.visited === false && 
                    thisNodeNeighbour.queued === false &&
                    thisNodeNeighbour.coord !== end) { 
                    // Add this neighbour to the queue
                    thisNodeNeighbour.parent = thisNode;
                    thisNodeNeighbour.level = thisNode.level + 1;
                    thisNodeNeighbour.queued = true;
                    queue.push(thisNodeNeighbour);
                };
            };
            // Remove the first item from the queue
            queue[0].queued = false;
            queue.splice(0,1);
            // if the current node is our target, end traversal
            if (thisNode === endVertex) {
                if (thisNode.level === 0) {
                    moves = [startVertex.coord]; 
                    chessify(moves);
                    updateComment(`Start: ${moves[0]} -> End: ${moves[0]}
                    
                    You were already here!`);
                }
                if (thisNode.level === 1) {
                    moves = [startVertex.coord, thisNode.coord];
                    moves = chessify(moves);
                    updateComment(`Start: ${moves[0]} -> End: ${moves[1]}
                    
                    You made it in ${thisNode.level} move!

                    Move: ${moves[0]} -> ${moves[1]}`);          
                } else if (thisNode.level === 2) {
                    moves = [startVertex.coord, thisNode.parent.coord, thisNode.coord];
                    moves = chessify(moves);
                   updateComment(`Start: ${moves[0]} -> End: ${moves[2]}
                    
                   You made it in ${thisNode.level} moves!
                    
                    Moves: ${moves[0]} -> ${moves[1]} -> ${moves[2]}`);
                } else if (thisNode.level === 3) {
                    moves = [startVertex.coord, thisNode.parent.parent.coord, thisNode.parent.coord, thisNode.coord];
                    moves = chessify(moves);
                    updateComment(`Start: ${moves[0]} -> End: ${moves[3]}
                    
                    You made it in ${thisNode.level} moves!
                    
                    Moves: ${moves[0]} -> ${moves[1]} -> ${moves[2]} -> ${moves[3]}`);
                } else if (thisNode.level === 4) {
                    moves = [startVertex.coord, thisNode.parent.parent.parent.coord, thisNode.parent.parent.coord, thisNode.parent.coord, thisNode.coord];
                    moves = chessify(moves);
                    updateComment(`Start: ${moves[0]} -> End: ${moves[4]}
                    
                    You made it in ${thisNode.level} moves!
                    
                    Moves: ${moves[0]} -> ${moves[1]} -> ${moves[2]} -> ${moves[3]} -> ${moves[4]}`);
                } else if (thisNode.level === 5) {
                    moves = [startVertex.coord, thisNode.parent.parent.parent.parent.coord, thisNode.parent.parent.parent.coord, thisNode.parent.parent.coord, thisNode.parent.coord, thisNode.coord];                   
                    moves = chessify(moves);
                    updateComment(`Start: ${moves[0]} -> End: ${moves[5]}
                    
                    You made it in ${thisNode.level} moves!
                    
                    Moves: ${moves[0]} -> ${moves[1]} -> ${moves[2]} -> ${moves[3]} -> ${moves[4]} -> ${moves[5]}`);
                } else if (thisNode.level === 6) {
                    moves = [startVertex.coord, thisNode.parent.parent.parent.parent.parent.coord, thisNode.parent.parent.parent.parent.coord, thisNode.parent.parent.parent.coord, thisNode.parent.parent.coord, thisNode.parent.coord, thisNode.coord];
                    moves = chessify(moves);
                    updateComment(`Start: ${moves[0]} -> End: ${moves[6]}
                    
                    You made it in ${thisNode.level} moves!
                    
                    Moves: ${moves[0]} -> ${moves[1]} -> ${moves[2]} -> ${moves[3]} -> ${moves[4]} -> ${moves[5]} -> ${moves[6]}`);
                } else if (thisNode.level === 7) {
                    moves = [startVertex.coord, thisNode.parent.parent.parent.parent.parent.parent.coord, thisNode.parent.parent.parent.parent.parent.coord, thisNode.parent.parent.parent.parent.coord, thisNode.parent.parent.parent.coord, thisNode.parent.parent.coord, thisNode.parent.coord, thisNode.coord];
                    moves = chessify(moves);
                    updateComment(`Start: ${moves[0]} -> End: ${moves[7]}
                    
                    You made it in ${thisNode.level} moves!
                    
                    Moves: ${moves[0]} -> ${moves[1]} -> ${moves[2]} -> ${moves[3]} -> ${moves[4]} -> ${moves[5]} -> ${moves[6]} -> ${moves[7]}`);
                };
            };
        };
        // End traversal after going through all nodes
        return moves;
    };

    getMoves() {
        return moves;
    };

    
};

export { adjacencyList, Graph, Vertex }