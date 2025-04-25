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
  
    preoorder(root){
        if(root){
            console.log(root.value)
            this.preoorder(root.left)
            this.preoorder(root.right)
        }
    }
    search(value){
        return this.searchNode(this.root,value)
    }
    searchNode(root,value){
        if(root==null){
            return false
        }else if(value===root.value){
            return true
        }else if(value<root.value){
            return this.searchNode(root.left,value)
        }else if(value>root.value){
            return this.searchNode(root.right,value)
        }
    }
    levelOrder(){
        const queue=[this.root]
        while(queue.length){
            let curr =queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }

        }
    }
    // height(root){
    //     if(!root){
    //         return -1
    //     }
    //     let left = this.height(root.left)
    //     let right=this.height(root.right)
    //     return 1+Math.max(left,right)
    // }
    // sum(root){
    //     if(!root){
    //         return 0
    //     }
    //     let left = this.sum(root.left)
        
    //     let right=this.sum(root.right)
      
    //     let sum=left+right+root.value
    //     return sum
    // }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
bst.insert(50)

console.log(bst.search(80))
bst.levelOrder()
// console.log(bst.height(bst.root))
// console.log(bst.sum(bst.root))
