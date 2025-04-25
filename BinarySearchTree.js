class Node {
    constructor (value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(!this.root){
            this.root = node
        }
        this.insertValue(this.root,node)
    }
    insertValue(root,node){
        if(node.value<root.value){
            if(!root.left){
                root.left = node
            }else{
                this.insertValue(root.left,node)
            }
        }else{
            if(node.value>root.value){
                if(!root.right){
                    root.right = node
                }else{
                    this.insertValue(root.right,node)
                }
            }
        }
    }
    levelOrder(){
        const queue = [this.root]
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
    remove(value){
        this.root = this.removeValue(this.root,value)
    }
    removeValue(root,value){
        if(!root){
            console.log('value not in this tree')
            return null
        }else if(value<root.value){
            root.left = this.removeValue(root.left,value)
        }else if(value>root.value){
            root.right = this.removeValue(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }else if(!root.right){
                return root.left
            }else if(!root.left){
                return root.right
            }else{
                let min = this.min(root.right)
                root.value = min
                root.right= this.removeValue(root.right,min)
            }

        }
        return root
    }
    min(root){
        let curr = this.root
        if(!root){
            return null
        }
        while(curr.left){
            curr=curr.left
        }
        return curr.value
        
    }
    secondLarge(){
        let parent = null
        let curr=this.root
        while(curr.right){
            parent = curr
            curr=curr.right
        }
        if(curr.left){
            return this.max(curr.left)
        }
        return parent.value
    }
    closest(root,target){
        let closest = root.value
        while(root){
            if(Math.abs(target-root.value)<Math.abs(target-closest)){
                closest = root.value
            }
            if(target<root.value){
                root = root.left
            }else if(target>root.value){
                root=root.right
            }else{
                break;
            }
        }
        return closest
    }
}

const bst = new BinarySearchTree()
bst.insert(50)
bst.insert(10)
bst.insert(60)
bst.insert(30)
bst.insert(45)
bst.levelOrder()
console.log('Cloesest Value is : '+bst.closest(bst.root,35))
console.log('SecondLarge : '+bst.secondLarge())