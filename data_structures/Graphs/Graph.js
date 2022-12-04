class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((el) => el !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((el) => el !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfsRecursive(vertex) {
    const res = [];
    const visited = {};

    const dfs = (v) => {
      if (!v) return null;

      res.push(v);
      visited[v] = true;

      this.adjacencyList[v].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    };

    dfs(vertex);
    return res;
  }

  dfsIterative(vertex) {
    const stack = [],
      res = [],
      visited = {};

    stack.push(vertex);

    while (stack.length) {
      vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        res.push(vertex);
        this.adjacencyList[vertex].forEach((neighbor) => stack.push(neighbor));
      }
    }

    return res;
  }

  bfs(vertex) {
    const q = [vertex],
      res = [],
      visited = {};

    while (q.length) {
      vertex = q.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        res.push(vertex);
        this.adjacencyList[vertex].forEach((neighbor) => q.push(neighbor));
      }
    }
    return res;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.bfs('A'));
