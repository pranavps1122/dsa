class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    prepend(value){
        const node=new Node(value)
        if(this.head===null){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    apend(value){
        const node =new Node(value)
        if(this.head===null){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }

  
 

    print(){
        if(this.head===null){
            console.log('List is Empty')
        }else{
        let curr=this.head
        let ListValues=''
        while(curr){
            ListValues+=curr.value+'-->'
            curr=curr.next
        }
        ListValues+=null
        console.log(ListValues)

        }
 

    }
}
const list = new LinkedList()
list.apend(10)
list.prepend(20)
list.apend(30)
list.prepend(60)
list.prepend(60)
list.print()
list.remove()

list.print()