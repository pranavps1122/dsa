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
    append(value){
        const node = new Node(value)
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
    insert(value,index){
        if(index<0||index>this.size){
            return console.log('errror')
        }else{
            if(index==this.size){
                this.prepend(value)
            }
            const node = new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
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
list.append(10)
list.append(20)
list.prepend(50)
list.prepend(70)
list.print()
list.insert(30,1)
list.print()