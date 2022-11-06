# Knights Travails

[Live demo](https://jcrachael.github.io/knights-travails/) (work in progress).

A search algorithm that shows the shortest possible route for a Knight on a standard 8x8 chessboard to move from one square to another.

Projcet sourced from [The Odin Project JavaScript course](https://www.theodinproject.com/lessons/javascript-knights-travails).


## About
On any given move, a Knight can move 2 spaces in one direction and 1 space in the perpendicular direction. For example, if a Knight is on square `36`, its possible moves are `19`, `21`, `26`, `30`, `42`, `46`, `51` and `53`.

The `board` will be a 2-dimensional array:

```javascript
board = [
         0,  1,  2,  3,  4,  5,  6,  7,
         8,  9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 30, 31,
        32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 58, 59, 60, 61, 62, 63
        ]
```

The `function knightMoves(start, end)` will return the shortest possible route from `start` coordinate (an array e.g. `10`) and an `end` coordinate (e.g. `27`).

The game board will be stored as a `Graph` data structure, with each square of the board being a `Vertex`, and each possible move from one square to another being an `Edge`. This graph is unweighted, undirected, connected and cyclic.

Two neighbouring nodes on the tree (called `u` and `v` here) share an undirected edge. An undirected edge `(u, v)` is the same as `(v, u)`. Each edge is incident on the two vertices (`u` and `v`), and the vertices connected by the edge are adjacent or neighbours. The number of edges incident on any given vertex is the degree of that vertex.

A path between two vertices is the `path` of known edges between vertex `u` and vertex `v`. The path between two vertices with the fewest edges is the `shortest path`.

We usually denote the vertex set by `V` and the edge set by `E`. We often want to use the sizes of the vertex and its edge sets when running an algorithm on a graph. We typically number the vertices in `V` from `0` to `(V.length - 1)`.

We can represent our graph with an `adjacency list` where for each vertex `i`, store an array of the vertices adjacent to it. We typically have one adjacency list per vertex. For example, our vertex `[0,0]` would have an adjacency list of `[10, 17]`. Each vertex's adjacency list will be stored as a key:value pair in a dictionary-type object containg all of the vertices' adjacency lists.

We can now get to each vertex's adjacency list by indexing into the adjacency list array. To find out whether an edge `(i, j)` is present in the graph, we go to `i`'s adjacency list and look for `j`. We can use a for loop to iterate through the vertices in the `adjacencyList` array, so that `adjacencyList[i]` is an array containing the neighbours of vertex `i`. Then, loop through `adjacencyList[i]` so that `adjacencyList[i][j]` returns each adjacent vertex.

We will use a Breadth-First Search (BFS) algorithm to search the graph. To avoid processing any vertex more than once, we divide the vertices into two categories, visited and not visited, using a boolean. It is assumed that all vertices are reachable from the starting vertex.

## To-dos
2. Feature: make each square in the returned moves display as a contrasting colour after a graph traversal
3. Feature: make the squares display with their chessboard reference (i.e., A1, E5) rather than their index number (coord)



---

Last modified: 5 November 2022