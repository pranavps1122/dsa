class MinHeap {
    constructor(){
        this.heap =[]
    }
    GetParent(index){
        return Math.floor((index-1)/2)
    }
    GetLeftChild(index){
        return index*2+1
    }
    GetRightChild(index){
        return index*2+2
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length-1
        while(index>0){
            let ParentIndex = this.GetParent(index)
            if(this.heap[ParentIndex]<=this.heap[index]){
                break;
            }
            this.swap(index,ParentIndex)
            index = ParentIndex
        }
    }
    extractMin(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let min = this.heap[0]
        this.heap[0]= this.heap.pop()
        this.heapifyDown()
        return min
    }
    heapifyDown(){
        let index =0
        let length=this.heap.length
        while(this.GetLeftChild(index)<length){
            let small = this.GetLeftChild(index)
            let right = this.GetRightChild(index)
            if(right<length&&this.heap[right]<this.heap[small]){
                small=right
            }
            if(this.heap[index]<this.heap[small]){
                break;
            }
            this.swap(index,small)
            index = small
        }
    }
    delete(value){
        let index = this.heap.indexOf(value)
        if(index ==-1){
            return false
        }
        this.heap[index] = this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyUp()
        this.heapifyDown()
    }
    print(){
        console.log(this.heap)
    }
}

const heap = new MinHeap()
heap.insert(10)
heap.insert(1)
heap.insert(5)
heap.insert(20)
heap.insert(40)
heap.delete(5)
heap.print()