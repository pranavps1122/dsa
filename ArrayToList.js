class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList {
    constructor(){
        this.head=null
    }
    append(value){
        const node = new Node(value)
        if(this.head==null){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
    }

    toArray(arr){
        for(let val of arr){
            this.append(val)
        }
    }
 
    print(){
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
const list = new LinkedList()


list.toArray([1,2,3,4,5])
list.print()
