class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList {
    constructor(){
        this.head=null
        this.size=0
    }
    prepend(value){
        const node = new Node(value)
        if(this.head===null){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

     reverse(){
        let prev=null
        let curr=this.head
        while(curr!==null){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
     }
    print(){
        if(this.head==null){
            console.log('Linkedlist is empty')
        }else{
            let curr=this.head
            let listvalue=''
            while(curr){
                listvalue+=curr.value+'-->'
                curr=curr.next
            }
            listvalue+=null
            console.log(listvalue)
        }
    }
}
const list = new LinkedList()
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.print()
list.reverse()
list.print()
