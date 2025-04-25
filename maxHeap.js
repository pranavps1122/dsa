class maxHeap {
    constructor(){
        this.heap=[]
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
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.GetParent(index);
            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    extractMax(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        const max = this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown()
        return max
    }
    heapifyDown() {
        let index = 0;
        let length = this.heap.length;

        while (this.GetLeftChild(index) < length) {
            let large = this.GetLeftChild(index);
            let right = this.GetRightChild(index);
            if (right < length && this.heap[right] > this.heap[large]) {
                large = right;
            }

            if (this.heap[index] > this.heap[large]) break;

            this.swap(index, large);
            index = large;
        }
    }

    peek(){
        return this.heap[0]
    }
    print(){
        console.log(this.heap)
    }
}

const max = new maxHeap()
max.insert(10)
max.insert(4)
max.insert(15)
max.insert(2)
max.insert(20)
max.insert(1)
max.print()
max.extractMax()
max.print()
