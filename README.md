# Knights Travails

[Live demo](https://jcrachael.github.io/knights-travails/).

A search algorithm that shows the shortest possible route for a Knight on a standard 8x8 chessboard to move from one square to another.

Projcet sourced from [The Odin Project JavaScript course](https://www.theodinproject.com/lessons/javascript-knights-travails).


## About
On any given move, a Knight can move 2 spaces in one direction and 1 space in the perpendicular direction. For example, if a Knight is on square `C6`, its possible moves are `A5`, `A7`, `B4`, `B8`, `D4`, `D8`, `E7` and `E5`, i.e., for any given square `X`/`Y`, its neighbouring squares are those at `X-2`/`Y-1`, `X-2`/`Y+1`, `X-1`/`Y-2`, `X-1`/`Y+2`, `X+1`/`Y-2`, `X+1`/`Y+2`, `X+2`/`Y+1`, and `X+2`/`Y-1` (while X and Y remain in the bounds of 1 to 8 inclusive).

The `board` will be a 2-dimensional array where each index represents a square on the chessboard:

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

The `function knightMoves(start, end)` will return the shortest possible route from `start` coordinate (a `Vertex` object with a `coord` property with its index e.g. `10` as the property's value) and an `end` coordinate (e.g. `Vertex` with `coord` of value `27`).

The chessboard will be stored as a `Graph` data structure, with each square of the board being a `Vertex`, and each possible move from one square to another being an `Edge`. This graph is unweighted, undirected, connected and cyclic.

Two neighbouring vertices on the graph (called `u` and `v` here) share an undirected edge (an undirected edge `(u, v)` is the same as `(v, u)`). Each edge is incident on the two vertices (`u` and `v`), and the vertices connected by the edge are neighbours. The number of edges incident on any given vertex is the degree of that vertex.

A path between two vertices is the `path` of known edges between vertex `u` and vertex `v`. The path between two vertices with the fewest edges is the `shortest path`.

We usually denote the vertex set by `V` and the edge set by `E`, so a graph `G` is denoted by `G(V,E)`. We often want to use the sizes of the vertex and its edge sets when running an algorithm on a graph. We typically number the vertices in `V` from `0` to `(V.length - 1)`.

We can represent our graph with an adjacency, where for each vertex `v`, we store an array of the vertices adjacent to it. We typically have one adjacency list per vertex. For example, our vertex `0` would have an adjacency list of `[10, 17]`. Each vertex's adjacency list will be stored as a `key:value` pair in an `adjacencyList` object containg all of the vertices' adjacency lists.

We access each vertex's adjacency list by indexing into the corresponding adjacency list array. To find out whether an edge `(i, j)` is present in the graph, we go to `i`'s adjacency list and look for `j`.

We will use a Breadth-First Search (BFS) algorithm to search the graph. To avoid processing any vertex more than once, we divide the vertices into two categories, visited and not visited, using a boolean. It is assumed that all vertices are reachable from the starting vertex.

## To-dos
1. Improve UI and transitions
2. Write an algorithm to determine a Vertex's moves from its starting position



---

Last modified: 7 November 2022