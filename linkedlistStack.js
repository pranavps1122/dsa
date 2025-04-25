class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Stack {
    constructor(){
        this.head=null
        this.size=0
    }
    push(value){
        const node = new Node(value)
        node.next=this.head
        this.head=node
        this.size++
    }
    pop(){
        let popped=this.head.value
        this.head=this.head.next
        this.size--
        return popped
    }
    peek(){
        return this.head.value
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size===0
    }
    print(){
        let curr=this.head
        let stackValue=[]
        while(curr){
            stackValue.push(curr.value)
            curr=curr.next
        }
        console.log(stackValue.join('-->'))
    }
}
const stack= new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
console.log('before Pop')
stack.print()
stack.pop()
console.log('after Pop')
stack.print()

console.log(stack.getSize())
console.log(stack.peek())
console.log(stack.isEmpty())
