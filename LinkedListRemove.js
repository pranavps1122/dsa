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
    insert(index,value){
        if(index<0||index>this.size){
            return null
        }
        if(index===0){
            this.prepend(value)
            return
        }else{
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
    remove(index){
        if(index>this.size||index<0){
            return null
        }
        let removed
        if(index===0){
            removed=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removed=prev.next
            prev.next=removed.next
        }
        this.size--
    }

    print(){
        if(this.head===null){
            console.log('List is Emptyyy')
        }else{
            let curr=this.head
            let ListValues=""
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
list.insert(0,10)
list.insert(1,20)
list.insert(2,40)
list.insert(3,50)
list.insert(4,60)
list.print()

list.remove(4)
list.print()