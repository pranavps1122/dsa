class Stack{
    constructor(){
        this.queue=[]
    }
    push(element){
        let size=this.queue.length
        this.queue.push(element)
        for(let i=0;i<size;i++){
            this.queue.push(this.queue.shift())
        }
    }
    pop(){
        if(this.isEmpty()){
            return console.log('stack is empty')
        }
        return this.queue.pop()
    }
    size(){
        return this.queue.length
    }
    isEmpty(){
        return this.queue.length===0
    }
    peek(){
        return this.queue[0]
    }
    print(){
        console.log(this.queue)
    }
}
const stack=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
console.log(stack.size())
console.log(stack.peek())
console.log(stack.isEmpty())
stack.print()