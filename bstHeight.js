class Node {
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree {
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertValue(this.root,node)
        }
    }
    insertValue(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertValue(root.left,node)
            }
        }else{
            if(node.value>root.value){
                if(root.right===null){
                    root.right=node
                }else{
                    this.insertValue(root.right,node)
                }
            }
        }
    }
    height(root){
        if(root==null){
            return -1
        }
       
        let heightLeft = this.height(root.left)
        let rightHeight= this.height(root.right)
        return 1+Math.max(heightLeft,rightHeight)
    }

}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
bst.insert(50)

console.log(bst.height(bst.root))
