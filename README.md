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

```javascript
board = [
        [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7],
        [1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7],
        [2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7],
        [3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7],
        [4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7],
        [5,0], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7],
        [6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7],
        [7,0], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7]
        ]
```

The `function knightMoves(start, end)` will return the shortest possible route from `start` coordinate (an array e.g. `[1,2]`) and an `end` coordinate (e.g. `[3,3]`).

All of the possible moves the Knight could make will be stored as children in a tree.

The tree is a graph and each possible move (Node) is a vertex (`v`) of the graph. Two neighbouring nodes on the tree (called `u` and `v` here) share an undirected edge. An undirected edge `(u, v)` is the same as `(v, u)`. Each edge is incident on the two vertices (`u` and `v`), and the vertices connected by the edge are adjacent or neighbours. The number of edges incident on any given vertex is the degree of that vertex.

A path between two vertices is the `path` of known edges between vertex `u` and vertex `v`. The path between two vertices with the fewest edges is the `shortest path`.

We usually denote the vertex set by `V` and the edge set by `E`. We often want to use the sizes of the vertex and its edge sets when running an algorithm on a graph. We typically number the vertices in `V` from `0` to `(V.length - 1)`.

We can represent our graph with an `adjacency list` where for each vertex `i`, store an array of the vertices adjacent to it. We typically have one adjacency list per vertex. For example, our vertex `[0,0]` would have an adjacency list of `[[1,2], [2,1]]`. Each vertex's adjacency list will be stored as a key:value pair in a dictionary-type object containg all of the vertices' adjacency lists.

We can now get to each vertex's adjacency list by indexing into the adjacency list array. To find out whether an edge `(i, j)` is present in the graph, we go to `i`'s adjacency list and look for `j`. We can use a for loop to iterate through the vertices in the `adjacencyList` array, so that `adjacencyList[i]` is an array containing the neighbours of vertex `i`. Then, loop through `adjacencyList[i]` so that `adjacencyList[i][j]` returns each adjacent vertex.

We will use a Breadth-First Search (BFS) algorithm to search the graph. To avoid processing any vertex more than once, we divide the vertices into two categories, visited and not visited, using a boolean. It is assumed that all vertices are reachable from the starting vertex.

## Pseudocode

Sample Graph class:

```javascript
class Graph { 
        constructor() {
            // build the root
            this.root = this.buildGraph();

        buildGraph() {
            // build this Graph from the given vertex's adjacencyList array
        }

        breadthFirstSearch() {
            // perform breadth first search to find the shortest path using 
            // Dijkstra's algorithm: 
            // (https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
            // For a given source node in the graph, the algorithm finds the
            // shortest path between that node and every other
        }
    }
}
```

Sample vertex class:

```javascript
class Vertex {
    constructor(coord, array) {
        // set the coordinate of this vertex
        this.coord = coord;
        // get this vertex's adjacency list
        this.neighbours = array;
    }
}

const node = new Vertex(coord, adjacencyList);

```


Sample knightMoves function:

```javascript
function knightMoves(start, end) {
    
    // 1) make a Graph from start vertex where all the child Nodes are adjacent 
    // vertices of start, e.g. const newGraph = new Graph(array)

    // 2) use a breadth-first search algorithm to find the shortest path between 
    // start vertex and end vertex, e.g. newGraph.breadthFirstSearch(this, s)
        // 2.1) mark all vertices as not visited
        // 2.2) declare a queue
        // 2.3) enqueue the starting vertex
        // 2.4) mark the starting vertex's property 'visited' to true
        // 2.5) while queue:
            // 2.5.1) dequeue a vertex from the queue, save it as `s` and print it
            // 2.5.2) get all adjacent vertices of the dequeued vertex `s`
                // 2.5.2.1) if an adjacent vertex has not been visited
                    // 2.5.2.1.1) mark this adjacent vertex as visited
                    // 2.5.2.1.2) queue this adjacent vertex
            // 2.5.3) insert all unvisited neighbours of the vertex into the queue
    
    // 3) Output the shortest path from start to end, e.g. "Start: [3,3] -> [4,5] -> [2,4] -> End: [4,3]"
}
```





---

Last modified: 5 November 2022