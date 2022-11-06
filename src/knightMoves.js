import { updateComment } from './displayControls';
import { adjacencyList, Graph, Vertex } from './graph'


function makeVertices() {
    // Instantiate an empty array to hold the Vertices
    let vertexList = [];
    // Make a Vertex for each key in adjacencyList, with neighbours set to the values for that key
    for (const index in adjacencyList) {
        const vertex = new Vertex(index);
        vertexList.push(vertex);
    }
    // For each Vertex in vertexList, add its neighbours
    for (const vertex in vertexList) {
        const thisVertex = vertexList[vertex];
        // For each index in this vertex's adjacency list
        for (const index in adjacencyList[vertex]) {
            // Add the vertex with this coord to thisVertex's neighbours list
            const neighbourVertex = vertexList[adjacencyList[vertex][index]];
            thisVertex.neighbours.push(neighbourVertex);
        }
    }
    return vertexList;
}


function makeGraph() {
    // make list of vertices
    let vertexList = makeVertices();
    // make a graph to represent the board
    const boardGraph = new Graph(64, vertexList);

    return boardGraph;

}


function knightMoves(start, end) {
    // DEBUG: console logging
    console.log('Starting vertex\'s neighbours are: ');
    for (let i = 0; i < start.neighbours.length; i++) {
        console.log(start.neighbours[i].coord)
    }
    console.log('Ending vertex\'s neighbours are: ');
    for (let i = 0; i < end.neighbours.length; i++) {
        console.log(end.neighbours[i].coord)
    }

    return
}

export { knightMoves, makeGraph }