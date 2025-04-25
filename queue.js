class Queue {
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift()
    }
    isEmpty(){
        return this.items.length===0
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

queue.print()
queue.dequeue()
queue.print()