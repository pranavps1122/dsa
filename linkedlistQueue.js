class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){

        this.head=null
        this.tail=null
    }
    enqueue(value){
        let node = new Node(value)
        if(!this.head){
            this.head=this.tail=node
        }else{
        this.tail.next=node
        this.tail=node
        }
       
    }
    dequeue(){
        if(!this.head){
            console.log('queue is empty')
            return null
        }
        let removed=this.head.value
        this.head=this.head.next
        if(!this.head){
            this.tail=null
        }
        return removed
    }
    display(){
        let curr=this.head
        let queueValue=''
        while(curr){
            queueValue+=curr.value+'-->'
            curr=curr.next
        }
        queueValue+=null
        console.log(queueValue)
    }
    
}
const lq=new Queue()
lq.enqueue(10)
lq.enqueue(20)
lq.enqueue(30)
lq.enqueue(40)
lq.enqueue(50)
console.log('queue before dequeue')
lq.display()
lq.dequeue()
console.log('queue after dequeue')
lq.display()