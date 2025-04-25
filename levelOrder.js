class Node {
    constructor(value){
        this.value = value
        this.left= null
        this.right=null
    }
}
class BinaryTree {
    constructor(){
        this.root=null
    }
    insert(value){
        const node = new Node(value)
        if(this.root===null){
            this.root=node
        }else{
            this.insertValue(this.root,node)
        }
    }
    insertValue(root,node){
        const queue=[root]
        while(queue.length){
            let curr=queue.shift()
            if(curr.left==null){
                curr.left=node
                break;
              
            }else{
                queue.push(curr.left)
            }
            if(curr.right==null){
                curr.right=node
                break;
               
            }else{
                queue.push(curr.right)
            }
        }
    }
    levelOrder(){
        const queue=[this.root]
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
   
}
const tree = new BinaryTree()
tree.insert(10)
tree.insert(50)
tree.insert(80)
tree.insert(30)
tree.insert(70)
tree.insert(40)
tree.levelOrder()

