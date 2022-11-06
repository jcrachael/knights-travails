import { updateComment } from './displayControls';
import { adjacencyList, Graph, Vertex } from './graph'

function knightMoves(start, end) {

    // get the right adjacency list for the start coord
    let startNeighbours = adjacencyList[start.toString()];
    let endNeighbours = adjacencyList[end.toString()];

    // TODO: instantiate the Graph with all nodes, then refactor below to grab the
    // required nodes, rather than making new ones
    // make a vertex node from the start point
    const startVertex = new Vertex(start, startNeighbours);
    const endVertex = new Vertex(end, endNeighbours);

    // DEBUG: console logging
    console.log('Starting vertex is: ' + startVertex.coord);
    console.log('Starting vertex\'s neighbours are: ' + startVertex.neighbours);

    console.log('Ending vertex is: ' + endVertex.coord);
    console.log('Ending vertex\'s neighbours are: ' + endVertex.neighbours);


    return
}

export { knightMoves }