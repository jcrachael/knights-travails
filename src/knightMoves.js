import { adjacencyList, Graph, Vertex } from './graph'

function makeVertices() {
    let vertexList = [];
    // Make a Vertex for each key in adjacencyList, with neighbours set to the values for that key
    for (const index in adjacencyList) {
        const vertex = new Vertex(index);
        vertexList.push(vertex);
    };
    // For each Vertex in vertexList, add its neighbours
    for (const vertex in vertexList) {
        const thisVertex = vertexList[vertex];
        // For each index in this vertex's adjacency list
        for (const index in adjacencyList[vertex]) {
            // Add the vertex with this coord to thisVertex's neighbours list
            const neighbourVertex = vertexList[adjacencyList[vertex][index]];
            thisVertex.neighbours.push(neighbourVertex);
        };
    };
    return vertexList;
};

function makeGraph() {
    let vertexList = makeVertices();
    const boardGraph = new Graph(64, vertexList);
    return boardGraph;

};

function knightMoves(graph, start, end) {
    let traverseStart = parseInt(start.coord);
    let traverseEnd = parseInt(end.coord);
    let moves = graph.breadthFirstSearch(traverseStart, traverseEnd);
    return moves;
};

export { knightMoves, makeGraph };