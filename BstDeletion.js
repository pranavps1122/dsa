class Node {
    constructor(value) {
        this.value=value;
        this.left=null
        this.right=null
    }
}
class Bst {
    constructor(){
       this.root=null 
    }
    isEmpty(){
        return this.root == null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root= node
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
    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
      this.root= this.deleteValue(this.root,value)  
    }
    deleteValue(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left= this.deleteValue(root.left,value)
        }else if(value>root.value){
            root.right = this.deleteValue(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }else{
                let min= this.min(root.right)
                root.value=min
                root.right = this.deleteValue(root.right,min)
            }
        }
        return root
    }
}
const bst = new Bst()
bst.insert(50)
bst.insert(10)
bst.insert(60)
bst.insert(30)
bst.insert(70)
bst.insert(40)
bst.levelOrder()
console.log('before deletion')
bst.delete(50)
console.log('after deletion')
bst.levelOrder()

