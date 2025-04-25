class Queue{
    constructor(){
        this.items={}
        this.front=0
        this.rear=0

    }
    enQueue(element){
        this.items[this.rear]=element
        this.rear++
    }
    deQueue(){
       let item = this.items[this.front]=element
       delete this.items[this.front]
       this.front++
       return item

    }
    isEmpty(){
        return this.front-this.rear==0
    }
    Size(){
        return this.front+this.rear
    }
    peak(){
        return this.items[this.front]
    }
    print(){
        console.log(this.items)
    }
}
const queue=new Queue()
queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
console.log(queue.peak())
console.log(queue.Size())
console.log(queue.isEmpty())
queue.print()
