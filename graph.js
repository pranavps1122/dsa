class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdges(v1,v2){
        if(!this.adjacencyList[v1]){
            this.addVertex(v1)
        }
        if(!this.adjacencyList[v2]){
            this.addVertex(v2)
        }
        this.adjacencyList[v1].add(v2)
        this.adjacencyList[v2].add(v1)
    }
    print(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+'-->'+[...this.adjacencyList[vertex]])
        }
    }
}
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdges('A','B')
graph.addEdges('B','C')
graph.print()