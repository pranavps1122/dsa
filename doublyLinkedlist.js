class Node {
    constructor(value){
        this.value=value
        this.prev=null
        this.next=null
    }
}
class douLinkedList {
    constructor(){
        this.head=null
        this.tail=null
    }
  append(value){
    const node = new Node(value)
        if(this.tail===null){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
    
  }
    printForward(){
        if(this.tail==null){
            console.log('list is empty')
        }else{
            let curr=this.tail;
            let listValue=''
            while(curr){
                listValue+=curr.value+'<--'
                curr=curr.prev
            }
            listValue+=null
            console.log(listValue)
        }
    }
    printBack(){
        if(this.head===null){
            console.log("list is empty...")
        }else{
            let curr=this.head
            let listValue=''
            while(curr){
                listValue+=curr.value+'-->'
                curr=curr.next
            }
            listValue+=null
            console.log(listValue)

        }
    }
  
}
const list = new douLinkedList()
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.append(70)
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
list.printBack()
list.printForward()

